import { useMemo, useState } from 'react';
import Icon from '../icon';
import type { CalendarContentPropsType } from './types';

const DAY_NAMES = ['월', '화', '수', '목', '금', '토', '일'];

const parseLocalDate = (dateStr: string): Date => {
  const [y, m, d] = dateStr.split('-').map(Number);

  return new Date(y, m - 1, d);
};

const toDateString = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');

  return `${y}-${m}-${d}`;
};

const isSameDay = (a: Date, b: Date): boolean =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

type CalendarDay = {
  date: Date;
  isCurrentMonth: boolean;
};

const getCalendarDays = (viewDate: Date): CalendarDay[] => {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

  const days: CalendarDay[] = [];

  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    days.push({ date: new Date(year, month, -i), isCurrentMonth: false });
  }

  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push({ date: new Date(year, month, d), isCurrentMonth: true });
  }

  while (days.length < 42) {
    const nextDay = days.length - firstDayOfWeek - lastDay.getDate() + 1;
    days.push({ date: new Date(year, month + 1, nextDay), isCurrentMonth: false });
  }

  return days;
};

const CalendarContent = ({
  mode = 'default',
  value,
  onChange,
  startValue,
  endValue,
  onRangeChange,
  className,
}: CalendarContentPropsType) => {
  const initialDate = useMemo(() => {
    if (mode === 'range' && startValue) return parseLocalDate(startValue);
    if (value) return parseLocalDate(value);

    return new Date();
  }, []);

  const [viewDate, setViewDate] = useState<Date>(initialDate);
  // range 모드에서 첫 번째 클릭 이후 두 번째 클릭 대기 상태
  const [selectingEnd, setSelectingEnd] = useState(false);

  const today = useMemo(() => new Date(), []);
  const days = useMemo(() => getCalendarDays(viewDate), [viewDate]);
  const monthLabel = `${viewDate.getFullYear()}. ${String(viewDate.getMonth() + 1).padStart(2, '0')}`;

  const selectedDate = value ? parseLocalDate(value) : null;
  const rangeStart = startValue ? parseLocalDate(startValue) : null;
  const rangeEnd = endValue ? parseLocalDate(endValue) : null;

  const handlePrevMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const handleDateClick = (dateStr: string, date: Date) => {
    if (mode === 'range') {
      if (!selectingEnd) {
        if (dateStr === startValue) {
          onRangeChange?.('', endValue ?? '');

          return;
        }

        onRangeChange?.(dateStr, '');
        setSelectingEnd(true);
      } else {
        if (dateStr === endValue) {
          onRangeChange?.(startValue ?? '', '');
          setSelectingEnd(false);

          return;
        }

        const start = startValue ?? '';
        if (start && dateStr < start) {
          onRangeChange?.(dateStr, start);
        } else {
          onRangeChange?.(start, dateStr);
        }

        setSelectingEnd(false);
      }

      return;
    }

    // default / daypicker
    if (dateStr === value) {
      onChange?.('');
    } else {
      onChange?.(dateStr);
    }
  };

  const getCellState = (date: Date) => {
    if (mode === 'range') {
      const isStart = rangeStart && isSameDay(date, rangeStart);
      const isEnd = rangeEnd && isSameDay(date, rangeEnd);
      const inRange =
        rangeStart && rangeEnd &&
        date.getTime() > rangeStart.getTime() &&
        date.getTime() < rangeEnd.getTime();

      return { isSelected: isStart || isEnd, inRange: inRange && !isStart && !isEnd };
    }

    return { isSelected: selectedDate ? isSameDay(date, selectedDate) : false, inRange: false };
  };

  const wrapperClassNames = [
    'calendar-content',
    `calendar-content--${mode}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClassNames}>
      {/* Header */}
      <div className="calendar-content__header">
        <span className="calendar-content__month">{monthLabel}</span>
        <div className="calendar-content__nav">
          <button
            type="button"
            className="calendar-content__nav-btn"
            onClick={handlePrevMonth}
            aria-label="이전 달"
          >
            <Icon name="chevron_left" size={20} />
          </button>
          <button
            type="button"
            className="calendar-content__nav-btn"
            onClick={handleNextMonth}
            aria-label="다음 달"
          >
            <Icon name="chevron_right" size={20} />
          </button>
        </div>
      </div>

      {/* Day names */}
      <div className="calendar-content__day-names">
        {DAY_NAMES.map((name) => (
          <span key={name} className="calendar-content__day-name">{name}</span>
        ))}
      </div>

      {/* Date grid */}
      <div className="calendar-content__grid">
        {days.map((day, index) => {
          const dateStr = toDateString(day.date);
          const { isSelected, inRange } = getCellState(day.date);
          const isToday = isSameDay(day.date, today);

          const cellClassNames = [
            'calendar-content__cell',
            !day.isCurrentMonth && 'calendar-content__cell--other-month',
            isSelected && 'calendar-content__cell--selected',
            inRange && 'calendar-content__cell--in-range',
            isToday && !isSelected && 'calendar-content__cell--today',
          ].filter(Boolean).join(' ');

          return (
            <button
              key={index}
              type="button"
              className={cellClassNames}
              onClick={() => !day.isCurrentMonth || handleDateClick(dateStr, day.date)}
            >
              {day.date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarContent;
