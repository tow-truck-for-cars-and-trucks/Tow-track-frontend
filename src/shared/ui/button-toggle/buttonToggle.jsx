import './buttonToggle.scss';

function ButtonToggle() {
	return (
		<label className="buttonToggle__lab" htmlFor="checkbox">
			{/* <p className="filterCheckbox__title"></p> */}
			<input className="buttonToggle__input" type="checkbox" id="checkbox" />
			<span className="buttonToggle__span" />
		</label>
	);
}
export default ButtonToggle;
