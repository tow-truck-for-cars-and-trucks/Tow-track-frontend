import './auth.scss';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  setLocalStorageAuth,
  getLocalStorageAuth,
  removeLocalStorageAuth,
  setLocalStorageToken,
  getOrderCreationStorage,
  getLocalStorageToken,
  setOrderCreationStorage,
} from '../../shared/api/storage-api';
import { authFormSchema } from '../../shared/schema/schema';
import Input from '../../shared/ui/input/input';
import PasswordInput from '../../shared/ui/password-input/password-input';
import Button from '../../shared/ui/button/button';
import authApi from '../../shared/api/auth-api';
import orderApi from '../../shared/api/order-api';

function Auth() {
  const authData = getLocalStorageAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const fromPage = location.state?.from?.pathname || '/';
  console.log(location);
  console.log(fromPage);
  const {
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: authData
      ? {
          email: JSON.parse(authData),
        }
      : {
          email: '',
          password: '',
        },
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(authFormSchema),
  });

  useEffect(() => {
    const subscription = watch((value) => {
      setLocalStorageAuth(value.email);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const continueOrder = () => {
    const order = getOrderCreationStorage();
    if (getLocalStorageToken()) {
      orderApi.createOrder(order).then((data) => {
        navigate(`/order/${data.id}`);
        setOrderCreationStorage(undefined);
      });
    }
  };

  const onSubmit = (inputData) => {
    authApi
      .postLogin(inputData)
      .then((data) => {
        setLocalStorageToken(data);
        removeLocalStorageAuth();
        if (getOrderCreationStorage()) continueOrder();
        else navigate(fromPage, { replace: true });
      })
      .catch(({ error }) => {
        if (error)
          Object.entries(error).forEach(([key, value]) => {
            if (value) {
              setError(key, { message: value.join(', ') });
            }
          });
        // console.log(error);
      });
  };

  return (
    <main className="auth">
      <form>
        <div className="auth__input">
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Input
                invalid={errors.email?.message}
                value={value}
                type="email"
                onChange={onChange}
                placeholder="Введите почту"
                id="email-input"
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
        <p className="auth__field-error">{errors.fieldErrors?.message}</p>
        <div className="auth__button">
          <Button
            label="Войти"
            onClick={handleSubmit(onSubmit)}
            primary
            disabled={!!Object.keys(errors).length}
          />
        </div>
      </form>
    </main>
  );
}

export default Auth;
