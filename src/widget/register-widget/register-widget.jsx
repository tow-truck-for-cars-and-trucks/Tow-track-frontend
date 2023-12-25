import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import './register-widget.scss';
import ChipsList from '../../entities/ui/chips-list/chips-list';
import Auth from '../../features/auth/auth';
import Register from '../../features/register/register';
import BackButton from '../../shared/ui/back-button/back-button';
import PopupRegistration from '../../features/popup-registration/popup-registration';

function RegisterWidget() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [isSuccess, setIsSuccess] = useState(false);

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
          value={params.get('mode')}
          onChange={(chips) =>
            navigate(`/register?mode=${chips}`, { state: location.state })
          }
        />
      </div>

      {params.get('mode') === 'login' ? (
        <Auth />
      ) : (
        <Register setIsSuccess={setIsSuccess} />
      )}
      <PopupRegistration isSuccess={isSuccess} />
    </main>
  );
}

export default RegisterWidget;
