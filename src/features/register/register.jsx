import './register.scss';
import { useEffect, createRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { setPopupsOpen } from '../../shared/ui/popup/model/popup-slice';
import Input from '../../shared/ui/input/input';
import { registerFormSchema } from '../../shared/schema/schema';
import PasswordInput from '../../shared/ui/password-input/password-input';
import Button from '../../shared/ui/button/button';
import Checkbox from '../../shared/ui/checkbox/checkbox';
import CheckboxAuthDescription from '../../shared/ui/checkbox-auth-description/checkbox-auth-description';
import registerApi from '../../shared/api/register-api';
import errorHandler from '../../shared/utils/error-handler';

function Register({ setIsSuccess }) {
  const registerInputRef = createRef();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    setValue,
    getValues,
    trigger,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    defaultValues: {
      firstName: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      consent: false,
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(registerFormSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (inputData) => {
    setIsLoading(true);
    registerApi
      .postRegister(inputData)
      .then(() => {
        setIsSuccess(true);
        navigate('/register?mode=login', { state: location.state });
      })
      .catch(({ error }) => {
        setIsSuccess(false);
        errorHandler(error, setError);
      })
      .finally(() => {
        dispatch(setPopupsOpen('popup-register'));
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const handleFocus = (e) => {
      if (
        registerInputRef.current &&
        !registerInputRef.current.contains(e.relatedTarget)
      ) {
        setValue('firstName', getValues('firstName').trim());
        trigger('firstName');
      }
    };

    document.addEventListener('focusout', handleFocus);
    return () => document.removeEventListener('focusout', handleFocus);
  }, [getValues, setValue, trigger, registerInputRef]);

  return (
    <main className="register" data-testid="register">
      <form>
        <div className="register__input" ref={registerInputRef}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Input
                invalid={errors.firstName?.message}
                value={value}
                onChange={onChange}
                placeholder="Имя"
                id="firstName"
              />
            )}
          />
        </div>
        <div className="register__input">
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
        <div className="register__input">
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
          <p className="register__input-caption">
            Пароль должен содержать минимум 8 символов, максимум 20
          </p>
        </div>
        <div className="register__input">
          <Controller
            name="confirmPassword"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <PasswordInput
                value={value}
                invalid={errors.confirmPassword?.message}
                onChange={onChange}
                placeholder="Подтвердите пароль"
                id="confirmPassword"
              />
            )}
          />
        </div>
        <div className="register__checkbox">
          <Controller
            name="consent"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Checkbox
                height="16px"
                width="16px"
                value={value}
                onChange={onChange}
              >
                <CheckboxAuthDescription />
              </Checkbox>
            )}
          />
        </div>
        <p className="register__field-error">
          {!isValid ? errors.fieldErrors?.message : ''}
        </p>
      </form>
      <div className="register__button">
        <Button
          label="Зарегистрироваться"
          onClick={handleSubmit(onSubmit)}
          primary
          disabled={!isValid || isLoading}
        />
      </div>
    </main>
  );
}

export default Register;
