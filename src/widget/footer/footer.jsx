import './footer.scss';
import ExpressLogo from '../../shared/icons/express-logo';
import Logo from '../../shared/icons/logo';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__main">
					<div className="footer__logo">
						<Logo width="100px" height="100px" />
					</div>
					<div className="footer__column">
						<ExpressLogo width="158px" height="70px" />
						<div className="footer__main-contacts">
							<div className="footer__phone-block">
								<span className="footer__phone-number">8 880 111 2222</span>
								<div>Круглосуточно</div>
							</div>
							<div className="footer__contacts">Контакты</div>
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
							<a href="/" className="footer__link">
								Сертификация эвакуаторов
							</a>
						</div>
					</div>
				</div>
				<div className="footer__copyright">
					<div>
						Информация, представленная на сайте, не является публичной офертой
					</div>
					<div>&copy; 2023 TT Express</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
