import './auth.scss';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  setLocalStorageAuth,
  getLocalStorageAuth,
  removeLocalStorageAuth,
} from '../../shared/api/storage-api';
import Input from '../../shared/ui/input/input';
import PasswordInput from '../../shared/ui/password-input/password-input';
import Button from '../../shared/ui/button/button';

function Auth() {
  const authData = getLocalStorageAuth();

  const submit = () => {
    console.log(authData);
    removeLocalStorageAuth();
  };

  const { control, handleSubmit, watch } = useForm({
    defaultValues: authData
      ? JSON.parse(authData)
      : {
          email: '',
          password: '',
        },
  });

  useEffect(() => {
    const subscription = watch((value) => {
      setLocalStorageAuth(value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

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
                value={value}
                onChange={onChange}
                placeholder="Введите пароль"
                id="password-input"
              />
            )}
          />
        </div>
        <div className="auth__button">
          <Button primary="true" label="Войти" onClick={handleSubmit(submit)} />
        </div>
      </form>
    </main>
  );
}

export default Auth;
