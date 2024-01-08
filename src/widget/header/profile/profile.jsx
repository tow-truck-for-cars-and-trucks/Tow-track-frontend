import { useEffect, createRef } from 'react';
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

function Profile() {
  const navigate = useNavigate();

  const loggedIn = checkUserLogged();

  const { width } = useWindowSize();

  const dispatch = useDispatch();

  const isOpenProfile = useSelector((state) => isPopupOpen(state, 'profile'));
  const isOpenDelete = useSelector((state) =>
    isPopupOpen(state, 'popup-delete')
  );

  const profileRef = createRef();

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
        dispatch(setPopupsClose('profile'));
      })
      .catch(console.error);
  };

  useEffect(() => {
    const handleFocus = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.relatedTarget))
        profileRef.current.focus();
    };

    if (width < 1024) document.addEventListener('focusout', handleFocus);
    return () => document.removeEventListener('focusout', handleFocus);
  }, [isOpenDelete, profileRef, width]);

  useEffect(() => {
    if (isOpenProfile && width < 1024) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpenDelete, isOpenProfile, width]);

  return (
    <section
      className={isOpenProfile ? 'profile profile_active' : 'profile'}
      data-testid="profile"
      role="dialog"
      tabIndex={-1}
      ref={profileRef}
    >
      <div className="profile__container">
        <h2 className="profile__title">Профиль</h2>
        <nav className="profile__nav-route">
          <button
            type="button"
            onClick={() => {
              navigate('/my-orders', { replace: true });
              dispatch(setPopupsClose('profile'));
            }}
            className={`profile__item profile__item_color_black${
              loggedIn ? '' : ' profile__item_disabled'
            }`}
            disabled={!loggedIn}
          >
            Мои заказы
          </button>
          <button
            type="button"
            onClick={() => {
              navigate('/profile', { replace: true });
              dispatch(setPopupsClose('profile'));
            }}
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
              onClick={() => {
                navigate('/register?mode=login', { replace: true });
                dispatch(setPopupsClose('profile'));
              }}
              className="profile__item profile__item_color_black"
            >
              Войти
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => {
                  onLogout();
                  dispatch(setPopupsClose('profile'));
                }}
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
