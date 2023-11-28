import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import './menu.scss';

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

  return (
    <div className={`menu ${!visible && 'menu_display-none'}`}>
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
        </nav>
      </div>
    </div>
  );
}

export default Menu;
