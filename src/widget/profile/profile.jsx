// import { Controller, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PasswordInput from '../../shared/ui/password-input/password-input';
import NavigationArrowIcon from '../../shared/ui/icons/navigation-arrow-icon';
import ProfileInput from '../../shared/ui/profile-input/profile-input';
import { getProfile, profileSelector } from './model/profile-slice';
import './profile.scss';

function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const { firstName, phoneNumber } = useSelector(profileSelector);
  /* const { control } = useForm({
    defaultValues: {
      firstName: '',
      phoneNumber: '567',
      password: '********',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  }); */

  return (
    <div className="profile-page">
      <div className="profile-page__container">
        <h2 className="profile-page__title">Мой Профиль</h2>
        <div className="profile-page__content">
          <div className="profile-page__input">
            <ProfileInput
              // invalid={errors.firstName?.message}
              icon={<NavigationArrowIcon width="16px" height="16px" />}
              value={firstName}
              readonly
              // onChange={onChange}
              placeholder="Имя"
              id="firstName"
            />
          </div>
          <div className="profile-page__input">
            <ProfileInput
              value={phoneNumber}
              // onChange={onChange}
              readonly
              // invalid={errors.phoneNumber?.message}
              mask="+7 (999) 999 99 99"
              placeholder="Телефон"
              id="phoneNumber"
            />
          </div>
          <div className="profile-page__input">
            {/* <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <PasswordInput
                    // invalid={errors.password?.message}
                    value={value}
                    onChange={onChange}
                    placeholder="Введите пароль"
                    id="password"
                  />
                )}
              /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
