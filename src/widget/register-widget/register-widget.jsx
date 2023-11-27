import { useState } from 'react';
import './register-widget.scss';
import ChipsList from '../../entities/ui/chips-list/chips-list';
import Auth from '../../features/auth/auth';
import Register from '../../features/register/register';
import BackButton from '../../shared/ui/back-button/back-button';

function RegisterWidget() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <main className="register-widget">
      <div className="register-widget__back-button">
        <BackButton />
      </div>
      <div className="register-widget__navigation">
        <ChipsList
          chips={[
            { label: 'Вход', id: 'login' },
            { label: 'Регистрация', id: 'register' },
          ]}
          value={activeTab}
          onChange={(chips) => setActiveTab(chips)}
        />
      </div>

      {activeTab === 'login' ? <Auth /> : <Register />}
    </main>
  );
}

export default RegisterWidget;
