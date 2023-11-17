import ArrowUpwardIcon from '../icons/arrow-upward-icon';
import './arrow-scroll.scss';

function ArrowScroll() {
  return (
    <a href="#header" className="arrow__container" aria-label="anchor">
      <ArrowUpwardIcon width="16px" height="40px" />
    </a>
  );
}

export default ArrowScroll;
