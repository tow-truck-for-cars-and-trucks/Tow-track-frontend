import './register.scss';
import { useState } from 'react';
import Input from '../../../shared/ui/input/input';
import PasswordInput from '../../../shared/ui/password-input/password-input';
import Button from '../../../shared/ui/button/button';
import Checkbox from '../../../shared/ui/checkbox/checkbox';
import CheckboxAuthDescription from '../../../shared/ui/checkbox-auth-description/checkbox-auth-description';

function Register() {
  const [nameValue, setNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [isCheckedValue, setIsCheckedValue] = useState('');

  return (
    <main className="register">
      <div className="register__input">
        <Input
          value={nameValue}
          onChange={(value) => setNameValue(value)}
          placeholder="Имя"
          id="name-input"
        />
      </div>
      <div className="register__input">
        <Input
          value={lastNameValue}
          onChange={(value) => setLastNameValue(value)}
          placeholder="Фамилия"
          id="last-name-input"
        />
      </div>
      <div className="register__input">
        <Input
          value={numberValue}
          onChange={(value) => setNumberValue(value)}
          mask="+7 (999) 999 99 99"
          placeholder="+ 7 (___) ___ __ __"
          id="phone-input"
        />
      </div>
      <div className="register__input">
        <Input
          value={emailValue}
          onChange={(value) => setEmailValue(value)}
          placeholder="Введите почту"
          id="email-input"
        />
      </div>
      <div className="register__input">
        <PasswordInput
          value={passwordValue}
          onChange={(value) => setPasswordValue(value)}
          placeholder="Введите пароль"
          id="password-input"
        />
        <p className="register__input-caption">
          Пароль должен содержать латинские символы, цифры и символы /!-?:
        </p>
      </div>
      <div className="register__input">
        <PasswordInput
          value={confirmPasswordValue}
          onChange={(value) => setConfirmPasswordValue(value)}
          placeholder="Подтвердите пароль"
          id="confirm-password-input"
        />
      </div>
      <div className="register__checkbox">
        <Checkbox
          height="16px"
          width="16px"
          value={isCheckedValue}
          onChange={(value) => setIsCheckedValue(value)}
        >
          <CheckboxAuthDescription />
        </Checkbox>
      </div>
      <div className="register__button">
        <Button primary="true" label="Зарегистрироваться" />
      </div>
    </main>
  );
}

export default Register;
