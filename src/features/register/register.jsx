import './register.scss';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Input from '../../shared/ui/input/input';
import {
  setLocalStorageRegister,
  getLocalStorageRegister,
} from '../../shared/api/storage-api';
import PasswordInput from '../../shared/ui/password-input/password-input';
import Button from '../../shared/ui/button/button';
import Checkbox from '../../shared/ui/checkbox/checkbox';
import CheckboxAuthDescription from '../../shared/ui/checkbox-auth-description/checkbox-auth-description';

function Register() {
  const registerData = getLocalStorageRegister();

  const submit = () => {
    console.log(registerData);
  };

  const { control, watch, handleSubmit } = useForm({
    defaultValues: registerData
      ? JSON.parse(registerData)
      : {
          userName: '',
          userLastName: '',
          phoneInput: '',
          email: '',
          password: '',
          confirmPassword: '',
          checkbox: '',
        },
  });

  useEffect(() => {
    const subscription = watch((value) => {
      setLocalStorageRegister(value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <main className="register">
      <form>
        <div className="register__input">
          <Controller
            name="userName"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChange={onChange}
                placeholder="Имя"
                id="name-input"
              />
            )}
          />
        </div>
        <div className="register__input">
          <Controller
            name="userLastName"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChange={onChange}
                placeholder="Фамилия"
                id="last-name-input"
              />
            )}
          />
        </div>
        <div className="register__input">
          <Controller
            name="phoneInput"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChange={onChange}
                mask="+7 (999) 999 99 99"
                placeholder="Телефон"
                id="phone-input"
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
                onChange={onChange}
                placeholder="Введите почту"
                id="email-input"
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
                value={value}
                onChange={onChange}
                placeholder="Введите пароль"
                id="password-input"
              />
            )}
          />
          <p className="register__input-caption">
            Пароль должен содержать латинские символы, цифры и символы /!-?:
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
                onChange={onChange}
                placeholder="Подтвердите пароль"
                id="confirm-password-input"
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
          primary="true"
          label="Зарегистрироваться"
          onClick={handleSubmit(submit)}
        />
      </div>
    </main>
  );
}

export default Register;
