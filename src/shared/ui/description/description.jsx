import './description.scss';

function Description({ title, subtitle }) {
  return (
    <div className="description__text">
      <h3 className="description__title">{title}</h3>
      <h4 className="description__subtitle">{subtitle}</h4>
    </div>
  );
}
export default Description;
