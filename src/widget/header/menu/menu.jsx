import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import './menu.scss';

/**
 *
 * @param {boolean} visible - determines whether the menu is displayed
 * @param {boolean} showProfile - determines whether the profile is displayed
 * @param {function} handleClickProfile - callback function for opening a profile
 *
 */
function Menu({ visible = false, handleClickProfile }) {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const [params] = useSearchParams();

  return (
    <div
      className={`menu ${!visible && 'menu_display-none'}`}
      data-testid="menu"
    >
      <div className="menu__container">
        <nav className="menu__nav">
          <button
            type="button"
            onClick={() => navigate('/?open=main', { replace: true })}
            className={`menu__item ${
              pathname === '/' && params.get('open') === 'main'
                ? 'menu__item_active'
                : ''
            }`}
          >
            Главная
          </button>
          <button
            type="button"
            onClick={handleClickProfile}
            className="menu__item"
          >
            Профиль
          </button>
          <button
            type="button"
            onClick={() => navigate('/contacts', { replace: true })}
            className={`menu__item ${
              pathname === '/contacts' ? 'menu__item_active' : ''
            }`}
          >
            Контакты
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
