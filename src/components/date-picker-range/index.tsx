import Icon from '../icon';
import type { DatePickerRangePropsType } from './types';

const DatePickerRange = ({
  startValue,
  endValue,
  onOpen,
  isOpen = false,
  startPlaceholder = '시작일',
  endPlaceholder = '종료일',
  disabled = false,
  error = false,
  className,
}: DatePickerRangePropsType) => {
  const hasValue = Boolean(startValue || endValue);

  const wrapperClassNames = [
    'date-picker-range',
    isOpen && 'date-picker-range--open',
    hasValue && 'date-picker-range--filled',
    error && 'date-picker-range--error',
    disabled && 'date-picker-range--disabled',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (!disabled) onOpen?.();
  };

  return (
    <div className={wrapperClassNames}>
      <button
        type="button"
        className="date-picker-range__field"
        onClick={handleClick}
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span className={`date-picker-range__text${startValue ? ' date-picker-range__text--filled' : ''}`}>
          {startValue || startPlaceholder}
        </span>
        <span className="date-picker-range__arrow">
          <Icon name="chevron_right" size={24} />
        </span>
        <span className={`date-picker-range__text${endValue ? ' date-picker-range__text--filled' : ''}`}>
          {endValue || endPlaceholder}
        </span>
        <span className="date-picker-range__separator" />
        <span className="date-picker-range__icon">
          <Icon name="calendar_month" size={24} />
        </span>
      </button>
    </div>
  );
};

export default DatePickerRange;
