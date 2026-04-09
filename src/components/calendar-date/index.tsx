import type { BadgeItemType, CalendarDatePropsType } from './types';

const MAX_VISIBLE_BADGES = 3;

const CalendarDate = ({
  state = 'default',
  date,
  isToday = false,
  events = [],
  className,
}: CalendarDatePropsType) => {
  const isDisabled = state === 'disabled';
  const isSelected = state === 'start' || state === 'end';
  const isMiddle = state === 'middle';
  const useTextBadge = state === 'middle' || state === 'end';

  const visibleEvents = events.slice(0, MAX_VISIBLE_BADGES);
  const overflowCount = events.length - MAX_VISIBLE_BADGES;

  const wrapperClassNames = [
    'calendar-date',
    `calendar-date--${state}`,
    className,
  ].filter(Boolean).join(' ');

  const dayClassNames = [
    'calendar-date__day',
    isSelected && 'calendar-date__day--selected',
    isToday && !isSelected && !isMiddle && 'calendar-date__day--today',
  ].filter(Boolean).join(' ');

  const getBadgeClassNames = (badge: BadgeItemType) => [
    'calendar-date__badge',
    useTextBadge && 'calendar-date__badge--text',
    `calendar-date__badge--${badge.color}`,
    isDisabled && 'calendar-date__badge--disabled',
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClassNames}>
      <div className="calendar-date__day-wrap">
        <span className={dayClassNames}>{date}</span>
      </div>
      <div className="calendar-date__badges">
        {visibleEvents.map((badge, index) => (
          <span key={index} className={getBadgeClassNames(badge)}>
            {badge.text}
          </span>
        ))}
        {overflowCount > 0 && (
          <span className="calendar-date__overflow">+{overflowCount}</span>
        )}
      </div>
    </div>
  );
};

export default CalendarDate;
