import ArrowUpwardIcon from '../icons/arrow-upward-icon';
import './arrow-scroll.scss';

function ArrowScroll() {
  return (
    <a href="#header" className="arrow" aria-label="Наверх">
      <ArrowUpwardIcon width="16px" height="40px" />
    </a>
  );
}

export default ArrowScroll;
