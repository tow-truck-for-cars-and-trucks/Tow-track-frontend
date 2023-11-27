import './auth-confirmation.scss';
import { useState } from 'react';
import Input from '../../../shared/ui/input/input';
import Button from '../../../shared/ui/button/button';
import AuthTitle from '../../../shared/ui/auth-title/auth-title';

/**
 * @param {number} seconds - seconds to new message
 * @param {string} phoneNumber - phone number from the input value
 */
function AuthConfirmation({ seconds, phoneNumber }) {
  const [codeValue, setCodeValue] = useState('');

  return (
    <main className="auth-confirmation">
      <AuthTitle
        subtitle={`Введите код, отправленный на номер ${phoneNumber}`}
      />
      <Input
        value={codeValue}
        onChange={(value) => setCodeValue(value)}
        mask="999 999"
        placeholder="000 000"
        placeholderStatic="true"
      />
      <div className="auth-confirmation__button">
        <Button label="Подтвердить" />
      </div>
      <p className="auth-confirmation__caption">
        Получить код повторно можно через {seconds} секунд
      </p>
    </main>
  );
}

export default AuthConfirmation;
