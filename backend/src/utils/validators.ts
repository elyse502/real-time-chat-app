export const isValidString = (
  value: string,
  minLength = 1,
  maxLength = 1000,
): boolean => {
  const trimmedValue = value.trim();

  return trimmedValue.length >= minLength && trimmedValue.length <= maxLength;
};
