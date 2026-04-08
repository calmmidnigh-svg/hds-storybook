import type { ChangeEvent } from 'react';
import Icon from '../icon';
import { formatDateValue } from './utils';

type InputDateRangePropsType = {
  startValue: string;
  endValue: string;
  onStartValueChange?: (rawValue: string, maskedValue: string) => void;
  onEndValueChange?: (rawValue: string, maskedValue: string) => void;
  startPlaceholder?: string;
  endPlaceholder?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
};

const InputDateRange = ({
  startValue,
  endValue,
  onStartValueChange,
  onEndValueChange,
  startPlaceholder = '시작일',
  endPlaceholder = '종료일',
  disabled = false,
  error = false,
  className,
}: InputDateRangePropsType) => {
  const handleStartChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDateValue(e.target.value);
    const rawDigits = formatted.replace(/-/g, '');

    onStartValueChange?.(rawDigits, formatted);
  };

  const handleEndChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDateValue(e.target.value);
    const rawDigits = formatted.replace(/-/g, '');

    onEndValueChange?.(rawDigits, formatted);
  };

  const wrapperClassNames = [
    'input',
    'input--date-range',
    error && 'input--error',
    disabled && 'input--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClassNames}>
      <div className="input__date-range-inner">
        <input
          className="input__field input__field--date-slot"
          type="text"
          inputMode="numeric"
          value={startValue}
          onChange={handleStartChange}
          placeholder={startPlaceholder}
          disabled={disabled}
        />
        <Icon name="chevron_right" size={12} className="input__range-separator" />
        <input
          className="input__field input__field--date-slot"
          type="text"
          inputMode="numeric"
          value={endValue}
          onChange={handleEndChange}
          placeholder={endPlaceholder}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default InputDateRange;
