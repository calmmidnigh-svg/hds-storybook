import type { ChangeEvent } from 'react';

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

const RangeArrowIcon = () => (
  <svg
    className="input__range-separator"
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M1 3.5H11M8.5 1L11 3.5L8.5 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
    onStartValueChange?.(e.target.value, e.target.value);
  };

  const handleEndChange = (e: ChangeEvent<HTMLInputElement>) => {
    onEndValueChange?.(e.target.value, e.target.value);
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
          value={startValue}
          onChange={handleStartChange}
          placeholder={startPlaceholder}
          disabled={disabled}
        />
        <RangeArrowIcon />
        <input
          className="input__field input__field--date-slot"
          type="text"
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
