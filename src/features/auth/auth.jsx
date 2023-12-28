import './auth.scss';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLocalStorageToken,
  getLocalStorageToken,
} from '../../shared/api/storage-api';
import { authFormSchema } from '../../shared/schema/schema';
import Input from '../../shared/ui/input/input';
import PasswordInput from '../../shared/ui/password-input/password-input';
import Button from '../../shared/ui/button/button';
import authApi from '../../shared/api/auth-api';
import { placeAnOrder } from '../create-order/model/create-order-slice';
import errorHandler from '../../shared/utils/error-handler';

function Auth() {
  const location = useLocation();
  const navigate = useNavigate();
  const fromPage = location.state?.from?.pathname || '/';
  const temporaryOrder = useSelector(
    (store) => store.createOrder.temporaryOrder
  );
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(authFormSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const continueOrder = async () => {
    if (getLocalStorageToken()) {
      try {
        const order = await dispatch(placeAnOrder(temporaryOrder)).unwrap();
        navigate(`/order/${order.id}`);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onSubmit = (inputData) => {
    setIsLoading(true);
    authApi
      .postLogin(inputData)
      .then((data) => {
        setLocalStorageToken(data);
        if (temporaryOrder) {
          continueOrder();
        } else {
          navigate(fromPage, { replace: true });
        }
      })
      .catch(({ error }) => {
        errorHandler(error, setError);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <main className="auth" data-testid="auth">
      <form>
        <div className="auth__input">
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChange={onChange}
                invalid={errors.phoneNumber?.message}
                mask="+7 (999) 999 99 99"
                placeholder="Телефон"
                id="phoneNumber"
              />
            )}
          />
        </div>
        <div className="auth__input">
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <PasswordInput
                invalid={errors.password?.message}
                value={value}
                onChange={onChange}
                placeholder="Введите пароль"
                id="password"
              />
            )}
          />
        </div>
        <p className="auth__field-error">
          {isValid ? '' : errors.fieldErrors?.message}
        </p>
        <div className="auth__button">
          <Button
            label="Войти"
            onClick={handleSubmit(onSubmit)}
            primary
            disabled={!isValid || isLoading}
          />
        </div>
      </form>
    </main>
  );
}

export default Auth;
