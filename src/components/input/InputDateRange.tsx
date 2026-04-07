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

const SeparatorIcon = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="input__range-separator"
  >
    <path
      d="M1 4H11M8 1L11 4L8 7"
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
      <input
        className="input__field"
        type="text"
        value={startValue}
        onChange={handleStartChange}
        placeholder={startPlaceholder}
        disabled={disabled}
      />
      <SeparatorIcon />
      <input
        className="input__field"
        type="text"
        value={endValue}
        onChange={handleEndChange}
        placeholder={endPlaceholder}
        disabled={disabled}
      />
    </div>
  );
};

export default InputDateRange;
