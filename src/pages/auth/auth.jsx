import { useState } from 'react';
import Header from '../../widget/header/header';
import ChipsList from '../../entities/ui/chips-list/chips-list';

function AuthPage() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <>
      <Header />
      <div className="register__navigation">
        <ChipsList
          chips={[
            { label: 'Войти', id: 'login' },
            { label: 'Зарегестрироваться', id: 'register' },
          ]}
          value={activeTab}
          onChange={(chips) => setActiveTab(chips)}
        />
      </div>

      {activeTab === 'login' ? <div>login</div> : <div> register</div>}
    </>
  );
}

export default AuthPage;
