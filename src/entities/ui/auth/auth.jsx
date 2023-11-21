import './auth.scss';
import { useState } from 'react';
import AuthTitle from '../../../shared/ui/auth-title/auth-title';
import Input from '../../../shared/ui/input/input';
import Button from '../../../shared/ui/button/button';
import Checkbox from '../../../shared/ui/checkbox/checkbox';
import CheckboxAuthDescription from '../../../shared/ui/checkbox-auth-description/checkbox-auth-description';

function Auth() {
  const [numberValue, setNumberValue] = useState('');
  const [isCheckedValue, setIsCheckedValue] = useState('');

  return (
    <main className="auth">
      <AuthTitle subtitle="Введите номер телефона, мы вышлем на него код для проверки" />
      <Input
        value={numberValue}
        onChange={(value) => setNumberValue(value)}
        mask="+7 (999) 999 99 99"
        placeholder="+ 7 (___) ___ __ __"
        placeholderStatic="true"
      />
      <div className="auth__button">
        <Button primary="true" label="Получить код" />
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

export default Auth;
