import './progress-bar.scss';

/**
 * @param {JSX element} icon - icon of the progress-bar
 * @param {number} activeIndex - active element index
 * @param {string} activeText - active element description
 */
function ProgressBar({ icons, activeIndex, activeText }) {
  return (
    <div className="progress-bar">
      <div className="progress-bar__container">
        {icons.map((icon) => (
          <div className="progress-bar__item">{icon}</div>
        ))}
      </div>
      <div className="progress-bar__text-container">
        {icons.map((e, i) => (
          <div
            className={[
              'progress-bar__description',
              i === activeIndex ? 'progress-bar__description_active' : '',
            ].join(' ')}
          >
            {i === activeIndex ? activeText : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;
