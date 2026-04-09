import { useEffect, useRef } from 'react';
import CalendarContent from '../calendar-content';
import '../calendar-content/index.scss';
import Icon from '../icon';
import type { DatePickerRangePropsType } from './types';
import { useState } from 'react';

const DatePickerRange = ({
  startValue,
  endValue,
  onChange,
  startPlaceholder = '시작일',
  endPlaceholder = '종료일',
  disabled = false,
  error = false,
  className,
}: DatePickerRangePropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFieldClick = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleRangeChange = (start: string, end: string) => {
    onChange?.(start, end);
    if (start && end) setIsOpen(false);
  };

  const hasValue = Boolean(startValue || endValue);

  const wrapperClassNames = [
    'date-picker-range',
    isOpen && 'date-picker-range--open',
    hasValue && 'date-picker-range--filled',
    error && 'date-picker-range--error',
    disabled && 'date-picker-range--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div ref={containerRef} className={wrapperClassNames}>
      <button
        type="button"
        className="date-picker-range__field"
        onClick={handleFieldClick}
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span className={`date-picker-range__text${startValue ? ' date-picker-range__text--filled' : ''}`}>
          {startValue || startPlaceholder}
        </span>
        <span className="date-picker-range__arrow">
          <Icon name="chevron_right" size={24} />
        </span>
        <span className={`date-picker-range__text${endValue ? ' date-picker-range__text--filled' : ''}`}>
          {endValue || endPlaceholder}
        </span>
        <span className="date-picker-range__separator" />
        <span className="date-picker-range__icon">
          <Icon name="calendar_month" size={24} />
        </span>
      </button>

      {isOpen && (
        <CalendarContent
          mode="range"
          startValue={startValue}
          endValue={endValue}
          onRangeChange={handleRangeChange}
          className="date-picker-range__calendar"
        />
      )}
    </div>
  );
};

export default DatePickerRange;
