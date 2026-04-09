export type DatePickerRangePropsType = {
  startValue?: string;
  endValue?: string;
  onChange?: (start: string, end: string) => void;
  startPlaceholder?: string;
  endPlaceholder?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
};
