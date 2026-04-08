import { type ChangeEvent, type KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import Icon from '../icon';
import type { ComboboxOptionType } from './types';

type ComboboxPropsType = {
  options: ComboboxOptionType[];
  value: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
};

const Combobox = ({
  options,
  value,
  onValueChange,
  placeholder = '입력 또는 선택',
  disabled = false,
  error = false,
  className,
}: ComboboxPropsType) => {
  const selectedLabel = options.find((option) => option.value === value)?.label ?? '';

  const [inputText, setInputText] = useState(selectedLabel);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = useMemo(() => {
    const keyword = inputText.trim().toLowerCase();
    if (!keyword) return options;

    return options.filter((option) =>
      option.label.toLowerCase().includes(keyword)
    );
  }, [options, inputText]);

  useEffect(() => {
    setInputText(selectedLabel);
  }, [selectedLabel]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setInputText(selectedLabel);
        setActiveIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedLabel]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setIsOpen(true);
    setActiveIndex(-1);
  };

  const handleInputFocus = () => {
    if (!disabled) setIsOpen(true);
  };

  const handleToggleClick = () => {
    if (disabled) return;
    if (isOpen) {
      setIsOpen(false);
      setInputText(selectedLabel);
    } else {
      setIsOpen(true);
      inputRef.current?.focus();
    }
  };

  const handleSelectOption = (option: ComboboxOptionType) => {
    if (option.disabled) return;
    onValueChange?.(option.value);
    setInputText(option.label);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        setIsOpen(true);
      }

      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, filteredOptions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && filteredOptions[activeIndex]) {
        handleSelectOption(filteredOptions[activeIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setInputText(selectedLabel);
      setActiveIndex(-1);
    }
  };

  const hasValue = inputText.length > 0;

  const wrapperClassNames = [
    'combobox',
    isOpen && 'combobox--open',
    hasValue && !isOpen && 'combobox--filled',
    error && 'combobox--error',
    disabled && 'combobox--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div ref={containerRef} className={wrapperClassNames}>
      <div className="combobox__field">
        <span className="combobox__search-icon">
          <Icon name="search" size={24} />
        </span>
        <input
          ref={inputRef}
          className="combobox__input"
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete="off"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-activedescendant={activeIndex >= 0 ? `combobox-option-${activeIndex}` : undefined}
        />
        <button
          type="button"
          className="combobox__toggle"
          onClick={handleToggleClick}
          disabled={disabled}
          tabIndex={-1}
          aria-label="목록 열기/닫기"
        >
          <Icon name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'} size={24} />
        </button>
      </div>

      {isOpen && (
        <ul className="combobox__list" role="listbox">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={option.value}
                id={`combobox-option-${index}`}
                role="option"
                aria-selected={option.value === value}
                className={[
                  'combobox__item',
                  option.value === value && 'combobox__item--selected',
                  option.disabled && 'combobox__item--disabled',
                  index === activeIndex && 'combobox__item--active',
                ].filter(Boolean).join(' ')}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleSelectOption(option)}
              >
                {option.value === value && (
                  <span className="combobox__item-check">
                    <Icon name="checked" size={16} />
                  </span>
                )}
                {option.label}
              </li>
            ))
          ) : (
            <li className="combobox__empty">검색 결과가 없습니다</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Combobox;
