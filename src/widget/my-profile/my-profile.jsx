import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavigationArrowIcon from '../../shared/ui/icons/navigation-arrow-icon';
import ProfileInput from '../../shared/ui/profile-input/profile-input';
import { getProfile, profileSelector } from './model/profile-slice';
import './my-profile.scss';

function MyProfile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const { firstName, phoneNumber } = useSelector(profileSelector);

  return (
    <div className="profile-page">
      <div className="profile-page__container">
        <h2 className="profile-page__title">Мой профиль</h2>
        <div className="profile-page__content">
          <div className="profile-page__input">
            <ProfileInput
              icon={<NavigationArrowIcon width="16px" height="16px" />}
              value={firstName}
              readonly
              placeholder="Имя"
              id="firstName"
            />
          </div>
          <div className="profile-page__input">
            <ProfileInput
              value={phoneNumber}
              readonly
              mask="+7 (999) 999 99 99"
              placeholder="Телефон"
              id="phoneNumber"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
