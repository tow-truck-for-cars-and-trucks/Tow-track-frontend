import './register.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../shared/ui/input/input';
import {
  setLocalStorageRegister,
  getLocalStorageRegister,
  removeLocalStorageRegister,
} from '../../shared/api/storage-api';
import { registerFormSchema } from '../../shared/schema/schema';
import PasswordInput from '../../shared/ui/password-input/password-input';
import Button from '../../shared/ui/button/button';
import Checkbox from '../../shared/ui/checkbox/checkbox';
import CheckboxAuthDescription from '../../shared/ui/checkbox-auth-description/checkbox-auth-description';
import registerApi from '../../shared/api/register-api';

function Register() {
  const registerData = getLocalStorageRegister();

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: registerData
      ? JSON.parse(registerData)
      : {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          password: '',
          confirmPassword: '',
          checkbox: false,
        },
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(registerFormSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (inputData) => {
    registerApi
      .postRegister(inputData)
      .then(() => {
        removeLocalStorageRegister();
        navigate('/register?mode=login');
      })
      .catch(({ error }) => {
        Object.entries(error).forEach(([key, value]) => {
          if (value) {
            setError(key, { message: value.join(', ') });
          }
        });
        console.log(error);
      });
  };

  useEffect(() => {
    const subscription = watch(
      ({ firstName, lastName, email, phoneNumber }) => {
        setLocalStorageRegister({
          firstName,
          lastName,
          email,
          phoneNumber,
        });
      }
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <main className="register">
      <form>
        <div className="register__input">
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
            name="lastName"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Input
                invalid={errors.lastName?.message}
                value={value}
                onChange={onChange}
                placeholder="Фамилия"
                id="lastName"
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
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                invalid={errors.email?.message}
                onChange={onChange}
                placeholder="Введите почту"
                id="email"
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
            Пароль должен содержать хотя бы одну заглавную букву, одну строчную
            букву, одну цифру и один специальный символ @,#,$,%
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
            name="checkbox"
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
      </form>
      <div className="register__button">
        <Button
          label="Зарегистрироваться"
          onClick={handleSubmit(onSubmit)}
          primary
          disabled={!!Object.keys(errors).length}
        />
      </div>
    </main>
  );
}

export default Register;
