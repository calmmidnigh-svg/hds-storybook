const MAX_DATE_DIGITS = 8;

export const formatDateValue = (input: string): string => {
  const digits = input.replace(/\D/g, '').slice(0, MAX_DATE_DIGITS);

  if (digits.length <= 4) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 4)}-${digits.slice(4)}`;

  return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6)}`;
};
