export type DatePickerRangePropsType = {
  startValue?: string;
  endValue?: string;
  onOpen?: () => void;
  isOpen?: boolean;
  startPlaceholder?: string;
  endPlaceholder?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
};
