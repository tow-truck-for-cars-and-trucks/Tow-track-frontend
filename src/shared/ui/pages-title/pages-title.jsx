import './pages-title.scss';

/**
 * @param {string} title - title of the pages
 */

function PagesTitle({ title }) {
  return (
    <h1 className="pages-title" id="pages-title" data-testid="pages-title">
      {title}
    </h1>
  );
}

PagesTitle.defaultProps = {
  title: 'label',
};

export default PagesTitle;
