import { type ChangeEvent, type TextareaHTMLAttributes, useRef } from 'react';

type TextAreaPropsType = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> & {
  value: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  maxLength?: number;
  rows?: number;
  className?: string;
};

const TextArea = ({
  value,
  onValueChange,
  placeholder,
  disabled = false,
  error = false,
  maxLength,
  rows = 5,
  className,
  id,
  name,
  ...rest
}: TextAreaPropsType) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onValueChange?.(e.target.value);
  };

  const wrapperClassNames = [
    'text-area',
    error && 'text-area--error',
    disabled && 'text-area--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClassNames}>
      <textarea
        ref={textareaRef}
        className="text-area__field"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        rows={rows}
        id={id}
        name={name}
        {...rest}
      />
      {maxLength !== undefined && (
        <div className="text-area__footer">
          <span className="text-area__count">
            {value.length}/{maxLength}
          </span>
        </div>
      )}
    </div>
  );
};

export default TextArea;
