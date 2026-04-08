import { type ChangeEvent, type InputHTMLAttributes, useRef } from 'react';
import InputDateRange from './InputDateRange';
import type { InputTypeType } from './types';
import { formatDateValue } from './utils';

const DATE_PLACEHOLDER: Partial<Record<InputTypeType, string>> = {
  date: 'YYYY-MM-DD',
};

type InputPropsType = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> & {
  value: string;
  onValueChange?: (rawValue: string, maskedValue: string) => void;
  onClear?: () => void;
  type?: InputTypeType;
  isClearable?: boolean;
  error?: boolean;
  className?: string;
};

const ClearIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path
      d="M1 1L9 9M9 1L1 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const Input = ({
  value,
  onValueChange,
  onClear,
  type = 'text',
  isClearable = false,
  disabled = false,
  error = false,
  placeholder,
  className,
  name,
  id,
  ...rest
}: InputPropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const resolvedPlaceholder = placeholder ?? DATE_PLACEHOLDER[type] ?? undefined;
  const htmlType = type === 'number' || type === 'date' ? 'text' : 'text';
  const inputMode = type === 'number' || type === 'date' ? 'numeric' : undefined;
  const displayValue = type === 'date' ? formatDateValue(value) : value;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    if (type === 'number') {
      const digits = raw.replace(/\D/g, '');

      onValueChange?.(digits, digits);

      return;
    }

    if (type === 'date') {
      const formatted = formatDateValue(raw);
      const rawDigits = formatted.replace(/-/g, '');

      onValueChange?.(rawDigits, formatted);

      return;
    }

    onValueChange?.(raw, raw);
  };

  const handleClearClick = () => {
    onValueChange?.('', '');
    onClear?.();
    inputRef.current?.focus();
  };

  const wrapperClassNames = [
    'input',
    error && 'input--error',
    disabled && 'input--disabled',
    isClearable && 'input--clearable',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClassNames}>
      <input
        ref={inputRef}
        className="input__field"
        type={htmlType}
        inputMode={inputMode}
        value={displayValue}
        onChange={handleChange}
        placeholder={resolvedPlaceholder}
        disabled={disabled}
        name={name}
        id={id}
        {...rest}
      />
      {isClearable && value && (
        <button
          type="button"
          className="input__clear"
          onClick={handleClearClick}
          tabIndex={-1}
          aria-label="입력 초기화"
        >
          <ClearIcon />
        </button>
      )}
    </div>
  );
};

export default Object.assign(Input, {
  DateRange: InputDateRange,
});
