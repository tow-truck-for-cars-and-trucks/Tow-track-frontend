import './auth.scss';
import { useState } from 'react';
import Input from '../../../shared/ui/input/input';
import PasswordInput from '../../../shared/ui/password-input/password-input';
import Button from '../../../shared/ui/button/button';

function Auth() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <main className="auth">
      <div className="auth__input">
        <Input
          value={emailValue}
          onChange={(value) => setEmailValue(value)}
          placeholder="Введите почту"
          id="email-input"
        />
      </div>
      <div className="auth__input">
        <PasswordInput
          value={passwordValue}
          onChange={(value) => setPasswordValue(value)}
          placeholder="Введите пароль"
          id="password-input"
        />
      </div>
      <div className="auth__button">
        <Button primary="true" label="Получить код" />
      </div>
    </main>
  );
}

export default Auth;
