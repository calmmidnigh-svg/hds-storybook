export type CalendarDateStateType = 'disabled' | 'default' | 'start' | 'middle' | 'end';

export type BadgeColorType =
  | 'blue'
  | 'green'
  | 'indigo'
  | 'lightgreen'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'teal'
  | 'yellow';

export type BadgeItemType = {
  text: string;
  color: BadgeColorType;
};

export type CalendarDatePropsType = {
  state?: CalendarDateStateType;
  date: number;
  isToday?: boolean;
  events?: BadgeItemType[];
  className?: string;
};
