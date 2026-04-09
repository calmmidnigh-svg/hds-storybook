export type CalendarContentModeType = 'default' | 'daypicker' | 'range';

export type CalendarContentPropsType = {
  mode?: CalendarContentModeType;
  // default / daypicker 모드
  value?: string;
  onChange?: (dateStr: string) => void;
  // range 모드
  startValue?: string;
  endValue?: string;
  onRangeChange?: (start: string, end: string) => void;
  className?: string;
};
