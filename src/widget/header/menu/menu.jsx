import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPopupsOpen,
  setPopupsClose,
  isPopupOpen,
} from '../../../shared/ui/popup/model/popup-slice';
import './menu.scss';

function Menu() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isOpenMenu = useSelector((state) => isPopupOpen(state, 'menu'));
  const isOpenProfile = useSelector((state) => isPopupOpen(state, 'profile'));

  const { pathname } = useLocation();
  const [params] = useSearchParams();

  return (
    <div
      className={`menu ${!isOpenMenu && 'menu_display-none'}`}
      data-testid="menu"
    >
      <div className="menu__container">
        <nav className="menu__nav">
          <button
            type="button"
            onClick={() => {
              navigate('/?open=main', { replace: true });
              dispatch(setPopupsClose('profile'));
              dispatch(setPopupsClose('menu'));
            }}
            className={`menu__item ${
              pathname === '/' &&
              params.get('open') === 'main' &&
              !isOpenProfile
                ? 'menu__item_active'
                : ''
            }`}
          >
            Главная
          </button>
          <button
            data-testid="profile-button"
            type="button"
            onClick={() => {
              dispatch(setPopupsOpen('profile'));
              dispatch(setPopupsClose('menu'));
            }}
            className={`menu__item${isOpenProfile ? ' menu__item_active' : ''}`}
          >
            Профиль
          </button>
          <button
            type="button"
            onClick={() => {
              navigate('/contacts', { replace: true });
              dispatch(setPopupsClose('profile'));
              dispatch(setPopupsClose('menu'));
            }}
            className={`menu__item ${
              pathname === '/contacts' && !isOpenProfile
                ? 'menu__item_active'
                : ''
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
