import { useMemo } from 'react';

export const useFormattedText = (text: string, maxLength: number, shouldTrim: boolean) => {
  return useMemo(() => {
    return shouldTrim && text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  }, [text, maxLength, shouldTrim]);
};
