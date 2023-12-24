import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import './menu.scss';
import authApi from '../../../shared/api/auth-api';
import checkUserLogged from '../../../app/model/validation';
import { setLocalStorageToken } from '../../../shared/api/storage-api';

/**
 *
 * @param {boolean} visible - determines whether the menu is displayed
 * @param {string} location - determines the current route to highlight link
 *
 */
function Menu({ visible = false, onCreateOrderClick }) {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const [params] = useSearchParams();

  const loggedIn = checkUserLogged();

  const onLogout = () => {
    authApi
      .postLogout()
      .then(() => {
        navigate('/?open=main', { replace: true });
        setLocalStorageToken(null);
      })
      .catch(console.error);
  };

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
            onClick={() => {
              onCreateOrderClick();
              navigate('/?open=order', { replace: true });
            }}
            className={`menu__item ${
              pathname === '/' && params.get('open') === 'order'
                ? 'menu__item_active'
                : ''
            }`}
          >
            Заказать эвакуатор
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
          <button
            type="button"
            onClick={() => navigate('/my-orders', { replace: true })}
            className={`menu__item ${
              pathname === './my-orders' ? 'menu__item_active' : ''
            }`}
          >
            Мои заказы
          </button>
          {!loggedIn ? (
            <button
              type="button"
              onClick={() =>
                navigate('/register?mode=login', { replace: true })
              }
              className="menu__auth"
            >
              Войти
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onLogout()}
              className="menu__auth"
            >
              Выйти
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Menu;
