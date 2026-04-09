import { useEffect, useRef, useState } from 'react';
import Calendar from '../date-picker/Calendar';
import Icon from '../icon';
import type { DatePickerRangePropsType } from './types';

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
  const [selectingEnd, setSelectingEnd] = useState(false);
  const [viewDate, setViewDate] = useState<Date>(() =>
    startValue ? new Date(startValue) : new Date(),
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (startValue) setViewDate(new Date(startValue));
  }, [startValue]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSelectingEnd(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFieldClick = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
      setSelectingEnd(false);
    }
  };

  const handleDateClick = (dateStr: string) => {
    if (!selectingEnd) {
      onChange?.(dateStr, '');
      setSelectingEnd(true);
    } else {
      const start = startValue ?? '';
      const isBeforeStart = start && dateStr < start;

      if (isBeforeStart) {
        onChange?.(dateStr, start);
      } else {
        onChange?.(start, dateStr);
      }

      setIsOpen(false);
      setSelectingEnd(false);
    }
  };

  const handlePrevMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
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
        <Calendar
          viewDate={viewDate}
          selectedStart={startValue}
          selectedEnd={endValue}
          onDateClick={handleDateClick}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
        />
      )}
    </div>
  );
};

export default DatePickerRange;
