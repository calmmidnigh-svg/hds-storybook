import { useEffect, useRef, useState } from 'react';
import Icon from '../icon';
import type { DropDownOptionType, DropDownSizeType } from './types';

type DropDownPropsType = {
  options: DropDownOptionType[];
  value: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  size?: DropDownSizeType;
  disabled?: boolean;
  error?: boolean;
  className?: string;
};

const DropDown = ({
  options,
  value,
  onValueChange,
  placeholder = '선택',
  size = 'medium',
  disabled = false,
  error = false,
  className,
}: DropDownPropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((option) => option.value === value)?.label;
  const hasSelection = selectedLabel !== undefined;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleSelectOption = (optionValue: string) => {
    onValueChange?.(optionValue);
    setIsOpen(false);
  };

  const wrapperClassNames = [
    'drop-down',
    `drop-down--${size}`,
    isOpen && 'drop-down--open',
    error && 'drop-down--error',
    disabled && 'drop-down--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div ref={containerRef} className={wrapperClassNames}>
      <button
        type="button"
        className="drop-down__field"
        onClick={handleToggle}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span
          className={[
            'drop-down__text',
            !hasSelection && 'drop-down__text--placeholder',
          ].filter(Boolean).join(' ')}
        >
          {hasSelection ? selectedLabel : placeholder}
        </span>
        <span className="drop-down__icon">
          <Icon name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'} size={24} />
        </span>
      </button>

      {isOpen && (
        <ul className="drop-down__list" role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              className={[
                'drop-down__item',
                option.value === value && 'drop-down__item--selected',
                option.disabled && 'drop-down__item--disabled',
              ].filter(Boolean).join(' ')}
              onClick={() => {
                if (!option.disabled) handleSelectOption(option.value);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
