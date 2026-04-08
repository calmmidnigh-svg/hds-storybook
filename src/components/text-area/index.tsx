import { type ChangeEvent, type TextareaHTMLAttributes, useRef } from 'react';
import Icon from '../icon';

type TextAreaPropsType = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> & {
  value: string;
  onValueChange?: (value: string) => void;
  onSend?: () => void;
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
  onSend,
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

  const handleSendClick = () => {
    onSend?.();
  };

  const wrapperClassNames = [
    'text-area',
    error && 'text-area--error',
    disabled && 'text-area--disabled',
    className,
  ].filter(Boolean).join(' ');

  const hasSendButton = onSend !== undefined;
  const isSendDisabled = disabled || value.trim() === '';

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
      {(hasSendButton || maxLength !== undefined) && (
        <div className="text-area__footer">
          {maxLength !== undefined && (
            <span className="text-area__count">
              {value.length}/{maxLength}
            </span>
          )}
          {hasSendButton && (
            <button
              type="button"
              className={[
                'text-area__send',
                isSendDisabled && 'text-area__send--disabled',
              ].filter(Boolean).join(' ')}
              onClick={handleSendClick}
              disabled={isSendDisabled}
              aria-label="전송"
            >
              <Icon name="send" size={20} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TextArea;
