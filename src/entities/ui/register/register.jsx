import './register.scss';
import { useState } from 'react';
import Input from '../../../shared/ui/input/input';
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
          placeholderStatic="true"
        />
      </div>
      <div className="register__input">
        <Input
          value={lastNameValue}
          onChange={(value) => setLastNameValue(value)}
          placeholder="Фамилия"
          placeholderStatic="true"
        />
      </div>
      <div className="register__input">
        <Input
          value={numberValue}
          onChange={(value) => setNumberValue(value)}
          mask="+7 (999) 999 99 99"
          placeholder="+ 7 (___) ___ __ __"
          placeholderStatic="true"
        />
      </div>
      <div className="register__input">
        <Input
          value={emailValue}
          onChange={(value) => setEmailValue(value)}
          placeholder="Введите почту"
          placeholderStatic="true"
        />
      </div>
      <div className="register__input">
        <Input
          value={passwordValue}
          onChange={(value) => setPasswordValue(value)}
          placeholder="Введите пароль"
          placeholderStatic="true"
        />
      </div>
      <div className="register__input">
        <Input
          value={confirmPasswordValue}
          onChange={(value) => setConfirmPasswordValue(value)}
          placeholder="Подтвердите пароль"
          placeholderStatic="true"
        />
      </div>
      <div className="register__button">
        <Button primary="true" label="Зарегистрироваться" />
      </div>
      <Checkbox
        height="16px"
        width="16px"
        value={isCheckedValue}
        onChange={(value) => setIsCheckedValue(value)}
      >
        <CheckboxAuthDescription />
      </Checkbox>
    </main>
  );
}

export default Register;
