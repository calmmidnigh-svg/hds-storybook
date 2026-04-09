import { useMemo } from 'react';
import Icon from '../icon';
import type { CalendarDayType } from './types';

const DAY_NAMES = ['월', '화', '수', '목', '금', '토', '일'];

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

const parseLocalDate = (dateStr: string): Date => {
  const [y, m, d] = dateStr.split('-').map(Number);

  return new Date(y, m - 1, d);
};

const getCalendarDays = (viewDate: Date): CalendarDayType[] => {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // 주 시작: 월요일 (JS: 0=일,1=월...) → 월=0, 일=6
  const firstDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

  const days: CalendarDayType[] = [];

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

type CalendarPropsType = {
  viewDate: Date;
  selectedStart?: string;
  selectedEnd?: string;
  onDateClick: (dateStr: string) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
};

const Calendar = ({
  viewDate,
  selectedStart,
  selectedEnd,
  onDateClick,
  onPrevMonth,
  onNextMonth,
}: CalendarPropsType) => {
  const days = useMemo(() => getCalendarDays(viewDate), [viewDate]);
  const today = useMemo(() => new Date(), []);

  const monthLabel = `${viewDate.getFullYear()}. ${String(viewDate.getMonth() + 1).padStart(2, '0')}`;

  const startDate = selectedStart ? parseLocalDate(selectedStart) : null;
  const endDate = selectedEnd ? parseLocalDate(selectedEnd) : null;

  const isSelected = (date: Date) => {
    if (startDate && isSameDay(date, startDate)) return true;
    if (endDate && isSameDay(date, endDate)) return true;

    return false;
  };

  const isInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    const time = date.getTime();

    return time > startDate.getTime() && time < endDate.getTime();
  };

  return (
    <div className="date-picker-calendar">
      {/* Header */}
      <div className="date-picker-calendar__header">
        <span className="date-picker-calendar__month">{monthLabel}</span>
        <div className="date-picker-calendar__nav">
          <button
            type="button"
            className="date-picker-calendar__nav-btn"
            onClick={onPrevMonth}
            aria-label="이전 달"
          >
            <Icon name="chevron_left" size={20} />
          </button>
          <button
            type="button"
            className="date-picker-calendar__nav-btn"
            onClick={onNextMonth}
            aria-label="다음 달"
          >
            <Icon name="chevron_right" size={20} />
          </button>
        </div>
      </div>

      {/* Day names */}
      <div className="date-picker-calendar__day-names">
        {DAY_NAMES.map((name) => (
          <span key={name} className="date-picker-calendar__day-name">{name}</span>
        ))}
      </div>

      {/* Date grid */}
      <div className="date-picker-calendar__grid">
        {days.map((day, index) => {
          const dateStr = toDateString(day.date);
          const selected = isSelected(day.date);
          const inRange = isInRange(day.date);
          const isToday = isSameDay(day.date, today);

          const cellClassNames = [
            'date-picker-calendar__cell',
            !day.isCurrentMonth && 'date-picker-calendar__cell--other-month',
            selected && 'date-picker-calendar__cell--selected',
            inRange && 'date-picker-calendar__cell--in-range',
            isToday && !selected && 'date-picker-calendar__cell--today',
          ].filter(Boolean).join(' ');

          return (
            <button
              key={index}
              type="button"
              className={cellClassNames}
              onClick={() => onDateClick(dateStr)}
            >
              {day.date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
