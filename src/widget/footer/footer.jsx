import './footer.scss';
import { Link } from 'react-router-dom';
import ExpressLogo from '../../shared/ui/icons/express-logo';
import Logo from '../../shared/ui/icons/logo';
import ArrowScroll from '../../shared/ui/arrow-scroll/arrow-scroll';
import PhoneIcon from '../../shared/ui/icons/phone-icon';
import handlePhoneCall from '../../shared/utils/helpers';

const companyPhoneNumber = '88801112222';

function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footer__container">
        <ArrowScroll />
        <div className="footer__logo-mobile">
          <Logo width="100px" height="100px" />
        </div>
        <div className="footer__logo-desktop">
          <Logo width="136px" height="136px" />
        </div>
        <div className="footer__express-logo">
          <ExpressLogo width="241px" height="107px" />
        </div>
        <div className="footer__main-pages">
          <button
            className="footer__phone-block"
            type="button"
            label="Связаться с компанией"
            onClick={() => handlePhoneCall(companyPhoneNumber, 'в компанию')}
          >
            <div className="footer__phone-icon">
              <PhoneIcon width="16px" height="16px" color="#fff" />
            </div>
            {[
              [
                companyPhoneNumber.substring(0, 1),
                companyPhoneNumber.substring(1, 4),
                companyPhoneNumber.substring(4, 7),
              ].join(' '),
              companyPhoneNumber.substring(7, 9),
              companyPhoneNumber.substring(9),
            ].join(' ')}
          </button>
          <p className="footer__time">Круглосуточно</p>
          <Link className="footer__link footer__pages" to="/contacts">
            Контакты
          </Link>
          <Link
            className="footer__link footer__pages footer__pages-desktop"
            to="/my-orders"
          >
            Мои заказы
          </Link>
          <Link
            className="footer__link footer__pages footer__pages-desktop"
            to="/?open=order"
          >
            Заказать эвакуатор
          </Link>
        </div>
        <div className="footer__documents">
          <a href="/" className="footer__link">
            Оферта
          </a>
          <a href="/" className="footer__link">
            Политика конфиденциальности
          </a>
          <a href="/" className="footer__link">
            Пользовательское соглашение
          </a>
          <a href="/" className="footer__link footer__link-certification">
            Сертификация эвакуаторов
          </a>
        </div>
        <div className="footer__copyright">
          <p className="footer__offer">
            Информация, представленная на сайте, не является публичной офертой
          </p>
          <p className="footer__copyright-date-company">
            &copy; {new Date().getFullYear()} TT Express
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
