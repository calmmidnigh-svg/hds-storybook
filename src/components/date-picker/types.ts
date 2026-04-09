export type DatePickerPropsType = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
};

export type CalendarDayType = {
  date: Date;
  isCurrentMonth: boolean;
};
