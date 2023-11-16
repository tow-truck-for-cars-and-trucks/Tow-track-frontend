import './back-button.scss';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '../icons/arrow-back-icon';

function BackButton() {
	const navigate = useNavigate();

	function goBack() {
		navigate(-1);
	}

	return (
		<div className="back-button">
			<button
				type="button"
				aria-label="Назад"
				className="back-button__icon"
				onClick={goBack}
			>
				<ArrowBackIcon width="16px" height="16px" />
			</button>
			<p className="back-button__title">Назад</p>
		</div>
	);
}

export default BackButton;
