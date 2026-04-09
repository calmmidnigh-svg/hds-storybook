import Icon from '../icon';
import type { DatePickerPropsType } from './types';

const DatePicker = ({
  value,
  onOpen,
  isOpen = false,
  placeholder = 'yyyy-mm-dd',
  disabled = false,
  error = false,
  className,
}: DatePickerPropsType) => {
  const hasValue = Boolean(value);

  const wrapperClassNames = [
    'date-picker',
    isOpen && 'date-picker--open',
    hasValue && 'date-picker--filled',
    error && 'date-picker--error',
    disabled && 'date-picker--disabled',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (!disabled) onOpen?.();
  };

  return (
    <div className={wrapperClassNames}>
      <button
        type="button"
        className="date-picker__field"
        onClick={handleClick}
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span className="date-picker__text">
          {value || placeholder}
        </span>
        <span className="date-picker__separator" />
        <span className="date-picker__icon">
          <Icon name="calendar_month" size={24} />
        </span>
      </button>
    </div>
  );
};

export default DatePicker;
