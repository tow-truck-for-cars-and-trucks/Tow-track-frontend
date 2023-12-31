import { useCallback } from 'react';
import './dropdown.scss';
import ArrowDownIcon from '../icons/arrow-down-icon';

function Dropdown({
  value,
  isActive,
  setIsActive,
  options,
  onChange,
  valueComparator,
  isCreateOrder,
  isDefferedOrder,
}) {
  const onValueSelect = useCallback(
    (option) => {
      onChange(option);
      setIsActive(false);
    },
    [onChange, setIsActive]
  );

  return (
    <div
      className={`dropdown ${
        isDefferedOrder ? 'dropdown_style_deffered-order' : ''
      } ${isCreateOrder ? 'dropdown_style_create-order' : ''}`}
      data-testid="dropdown"
    >
      {!isCreateOrder && (
        <div
          className={`dropdown__header ${
            isActive ? 'dropdown__header_active' : ''
          }`}
          onMouseDown={(e) => {
            e.stopPropagation();
            setIsActive(!isActive);
          }}
          role="button"
          tabIndex={0}
          aria-label="Дробдаун-меню"
        >
          <div className="dropdown__title">
            {options.find((option) => valueComparator(option, value))?.label}
          </div>
          <div className="dropdown__icon">
            <ArrowDownIcon width="16px" height="16px" fill="#3B3E49" />
          </div>
        </div>
      )}
      <div
        className={`dropdown__content ${
          isDefferedOrder ? 'dropdown__content_style_deffered-order' : ''
        } ${isCreateOrder ? 'dropdown__content_style_create-order' : ''} ${
          isActive ? 'dropdown__content_active' : ''
        }`}
      >
        {options.map((option) => (
          <div
            role="button"
            tabIndex={0}
            key={option.id}
            aria-label="Дробдаун-меню"
            className="dropdown__item"
            onMouseDown={() => onValueSelect(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}

Dropdown.defaultProps = {
  valueComparator: (option, value) => option.id === value,
};

export default Dropdown;
