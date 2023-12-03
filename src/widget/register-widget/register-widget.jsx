import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './register-widget.scss';
import ChipsList from '../../entities/ui/chips-list/chips-list';
import Auth from '../../features/auth/auth';
import Register from '../../features/register/register';
import BackButton from '../../shared/ui/back-button/back-button';

function RegisterWidget() {
  const [params] = useSearchParams();
  const [activeTab, setActiveTab] = useState(params.mode || 'login');

  useEffect(() => {
    setActiveTab(params.get('mode'));
  }, [params]);

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
