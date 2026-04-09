import { type ChangeEvent, type KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import Icon from '../icon';
import type { ComboboxMultiOptionType } from './types';

type ComboboxMultiPropsType = {
  options: ComboboxMultiOptionType[];
  values: string[];
  onValuesChange?: (values: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
};

const ComboboxMulti = ({
  options,
  values,
  onValuesChange,
  placeholder = '입력 또는 선택',
  disabled = false,
  error = false,
  className,
}: ComboboxMultiPropsType) => {
  const [inputText, setInputText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOptions = useMemo(
    () => options.filter((option) => values.includes(option.value)),
    [options, values],
  );

  const filteredOptions = useMemo(() => {
    const keyword = inputText.trim().toLowerCase();
    if (!keyword) return options;

    return options.filter((option) =>
      option.label.toLowerCase().includes(keyword),
    );
  }, [options, inputText]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setInputText('');
        setActiveIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
      setInputText('');
    } else {
      setIsOpen(true);
      inputRef.current?.focus();
    }
  };

  const handleToggleOption = (optionValue: string) => {
    const isSelected = values.includes(optionValue);
    const nextValues = isSelected
      ? values.filter((v) => v !== optionValue)
      : [...values, optionValue];

    onValuesChange?.(nextValues);
  };

  const handleRemoveBadge = (optionValue: string) => {
    onValuesChange?.(values.filter((v) => v !== optionValue));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && inputText === '' && values.length > 0) {
      onValuesChange?.(values.slice(0, -1));

      return;
    }

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
      if (activeIndex >= 0 && filteredOptions[activeIndex] && !filteredOptions[activeIndex].disabled) {
        handleToggleOption(filteredOptions[activeIndex].value);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setInputText('');
      setActiveIndex(-1);
    }
  };

  const hasSelection = values.length > 0;

  const wrapperClassNames = [
    'combobox-multi',
    isOpen && 'combobox-multi--open',
    hasSelection && !isOpen && 'combobox-multi--filled',
    error && 'combobox-multi--error',
    disabled && 'combobox-multi--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div ref={containerRef} className={wrapperClassNames}>
      <div className="combobox-multi__field" onClick={() => !isOpen && inputRef.current?.focus()}>
        {/* Filled(닫힘): X 없는 배지만 표시, 고정 높이 */}
        {hasSelection && !isOpen && (
          <div className="combobox-multi__badges">
            {selectedOptions.map((option) => (
              <span key={option.value} className="combobox-multi__badge">
                <span className="combobox-multi__badge-text">{option.label}</span>
              </span>
            ))}
          </div>
        )}

        {/* Default / Open: 검색 아이콘(default만) + 입력 */}
        {(!hasSelection || isOpen) && (
          <div className="combobox-multi__input-area">
            {!isOpen && (
              <span className="combobox-multi__search-icon">
                <Icon name="search" size={24} />
              </span>
            )}
            <input
              ref={inputRef}
              className="combobox-multi__input"
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
            />
          </div>
        )}

        <span className="combobox-multi__separator" />
        <button
          type="button"
          className="combobox-multi__toggle"
          onClick={handleToggleClick}
          disabled={disabled}
          tabIndex={-1}
          aria-label="목록 열기/닫기"
        >
          <Icon name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'} size={24} />
        </button>
      </div>

      {isOpen && (
        <div className="combobox-multi__list-container">
          {/* 옵션 리스트 — 50% 고정 */}
          <ul className="combobox-multi__list" role="listbox" aria-multiselectable="true">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => {
                const isSelected = values.includes(option.value);

                return (
                  <li
                    key={option.value}
                    role="option"
                    aria-selected={isSelected}
                    className={[
                      'combobox-multi__item',
                      isSelected && 'combobox-multi__item--selected',
                      option.disabled && 'combobox-multi__item--disabled',
                      index === activeIndex && 'combobox-multi__item--active',
                    ].filter(Boolean).join(' ')}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      if (!option.disabled) handleToggleOption(option.value);
                    }}
                  >
                    {option.label}
                  </li>
                );
              })
            ) : (
              <li className="combobox-multi__empty">검색 결과가 없습니다</li>
            )}
          </ul>

          {/* 구분선 — 항상 표시 */}
          <div className="combobox-multi__divider" />

          {/* 배지 영역 — 항상 표시, 50% 고정, X 있음 */}
          <div className="combobox-multi__selected-area">
            {selectedOptions.map((option) => (
              <span key={option.value} className="combobox-multi__badge">
                <span className="combobox-multi__badge-text">{option.label}</span>
                <button
                  type="button"
                  className="combobox-multi__badge-remove"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleRemoveBadge(option.value)}
                  tabIndex={-1}
                  aria-label={`${option.label} 제거`}
                >
                  <Icon name="close_small" size={16} />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComboboxMulti;
