import { NavLink } from 'react-router-dom';
import './menu.scss';

/**
 *
 * @param {boolean} visible - determines whether the menu is displayed
 * @param {string} location - determines the current route to highlight link
 *
 */
function Menu({ visible = false /* location = '/' */ }) {
  const setActive = ({ isActive }) =>
    isActive ? 'menu__item_active' : 'menu__item';
  return (
    <div className={`menu ${!visible && 'menu_display_none'}`}>
      <div className="menu__container">
        <nav className="menu__nav">
          <NavLink to="/" className={setActive}>
            Главная
          </NavLink>
          <NavLink to="/order" className={setActive}>
            Заказать эвакуатор
          </NavLink>
          <NavLink to="/contacts" className={setActive}>
            Контакты
          </NavLink>
          <NavLink to="/orders" className={setActive}>
            Мои заказы
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
