import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.scss';
import authApi from '../../../shared/api/auth-api';
import checkUserLogged from '../../../app/model/validation';
import useWindowSize from '../../../entities/hooks/useWindowSize';
import { setLocalStorageToken } from '../../../shared/api/storage-api';

/**
 *
 * @param {boolean} visible - determines whether the profile is displayed
 *
 */
function Profile({ visible = false }) {
  const navigate = useNavigate();

  const loggedIn = checkUserLogged();

  const { width } = useWindowSize();

  const onLogout = () => {
    authApi
      .postLogout()
      .then(() => {
        navigate('/?open=main', { replace: true });
        setLocalStorageToken(null);
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (visible && width < 1024) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [visible, width]);

  return (
    <div
      className={visible ? 'profile profile_active' : 'profile'}
      data-testid="profile"
    >
      <div className="profile__container">
        <h2 className="profile__title">Профиль</h2>
        <nav className="profile__nav-route">
          <button
            type="button"
            onClick={() => navigate('/my-orders', { replace: true })}
            className={`profile__item profile__item_color_black${
              loggedIn ? '' : ' profile__item_disabled'
            }`}
            disabled={!loggedIn}
          >
            Мои заказы
          </button>
          <button
            type="button"
            onClick={() => navigate('/profile', { replace: true })}
            className={`profile__item profile__item_color_black${
              loggedIn ? '' : ' profile__item_disabled'
            }`}
            disabled={!loggedIn}
          >
            Редактировать профиль
          </button>
        </nav>
        <nav className="profile__nav-auth">
          {!loggedIn ? (
            <button
              type="button"
              onClick={() =>
                navigate('/register?mode=login', { replace: true })
              }
              className="profile__item profile__item_color_black"
            >
              Войти
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onLogout()}
              className="profile__item profile__item_color_grey"
            >
              Выйти
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Profile;
