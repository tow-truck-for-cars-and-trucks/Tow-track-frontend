import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPopupsOpen,
  setPopupsClose,
  isPopupOpen,
} from '../../../shared/ui/popup/model/popup-slice';
import './profile.scss';
import authApi from '../../../shared/api/auth-api';
import profileApi from '../../../shared/api/profile-api';
import checkUserLogged from '../../../app/model/validation';
import useWindowSize from '../../../entities/hooks/useWindowSize';
import PopupCancel from '../../../entities/ui/popup-cancel/popup-cancel';
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

  const dispatch = useDispatch();

  const onLogout = () => {
    authApi
      .postLogout()
      .then(() => {
        navigate('/?open=main', { replace: true });
        setLocalStorageToken(null);
      })
      .catch(console.error);
  };

  const handleDeleteProfile = () => {
    profileApi
      .deleteProfile()
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
    <section
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
            <>
              <button
                type="button"
                onClick={() => onLogout()}
                className="profile__item profile__item_color_grey"
              >
                Выйти
              </button>
              <button
                type="button"
                onClick={() => dispatch(setPopupsOpen('popup-delete'))}
                className="profile__item profile__item_color_grey"
              >
                Удалить профиль
              </button>
            </>
          )}
        </nav>
      </div>
      <PopupCancel
        isOpen={useSelector((state) => isPopupOpen(state, 'popup-delete'))}
        messageText="Вы уверены, что хотите удалить профиль?"
        secondaryText="удалить"
        onClickPrimary={() => dispatch(setPopupsClose('popup-delete'))}
        onClickSecondary={() => {
          handleDeleteProfile();
          dispatch(setPopupsClose('popup-delete'));
        }}
      />
    </section>
  );
}

export default Profile;
