'use client';

import { useMemo } from 'react';

export const useFormattedTime = (time: string, isMobile: boolean) => {
  return useMemo(() => {
    return isMobile ? time.replace(/(\d+)\s.*/, '$1') : time;
  }, [time, isMobile]);
};
