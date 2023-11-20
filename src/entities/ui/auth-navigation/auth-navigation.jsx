import Chip from '../../../shared/ui/chip/chip';

function AuthNavigation() {
  return (
    <div className="register__navigation">
      <Chip label="Войти" />
      <Chip label="Зарегистрироваться" />
    </div>
  );
}

export default AuthNavigation;
