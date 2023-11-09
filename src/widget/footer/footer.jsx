import './footer.scss';
import ExpressLogo from '../../shared/ui/icons/express-logo';

function Footer() {
	return (
		<footer>
			<div className="container">
				<ExpressLogo width="158px" height="70px" />
				<div className="main">
					<div className="phone">
						<span className="phone-span">8 880 111 2222</span>
						<span>Круглосуточно</span>
					</div>
					<span className="contacts-span">Контакты</span>
				</div>
				<div className="documents">
					<div className="offer">
						<span>Оферта</span>
						<span>Политика конфидициальности</span>
					</div>
					<span>Пользовавтельское соглашение</span>
					<span>Сертификация эвакуаторов</span>
				</div>
				<div className="copyright">
					<span>
						Информация, представленная на сайте, не является публичной офертой
					</span>
					<span>&#169; 2023 TT Express</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
