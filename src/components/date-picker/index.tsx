import { useEffect, useRef, useState } from 'react';
import Icon from '../icon';
import Calendar from './Calendar';
import type { DatePickerPropsType } from './types';

const DatePicker = ({
  value,
  onChange,
  placeholder = 'yyyy-mm-dd',
  disabled = false,
  error = false,
  className,
}: DatePickerPropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState<Date>(() => (value ? new Date(value) : new Date()));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) setViewDate(new Date(value));
  }, [value]);

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

  const handleDateClick = (dateStr: string) => {
    onChange?.(dateStr);
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const hasValue = Boolean(value);

  const wrapperClassNames = [
    'date-picker',
    isOpen && 'date-picker--open',
    hasValue && 'date-picker--filled',
    error && 'date-picker--error',
    disabled && 'date-picker--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div ref={containerRef} className={wrapperClassNames}>
      <button
        type="button"
        className="date-picker__field"
        onClick={handleFieldClick}
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span className="date-picker__text">
          {value || placeholder}
        </span>
        <span className="date-picker__separator" />
        <span className="date-picker__icon">
          <Icon name="calendar_month" size={24} />
        </span>
      </button>

      {isOpen && (
        <Calendar
          viewDate={viewDate}
          selectedStart={value}
          onDateClick={handleDateClick}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
        />
      )}
    </div>
  );
};

export default DatePicker;
