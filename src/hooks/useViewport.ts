'use client';

import { useState, useEffect } from 'react';

type ViewportType = 'mobile' | 'tablet' | 'desktop';

const BREAKPOINTS = {
  MAX_MOBILE_WIDTH: 620,
  MAX_TABLET_WIDTH: 1024,
} as const;

export function useViewport() {
  const [viewport, setViewport] = useState<ViewportType>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < BREAKPOINTS.MAX_MOBILE_WIDTH) {
        setViewport('mobile');
      } else if (width >= BREAKPOINTS.MAX_MOBILE_WIDTH && width < BREAKPOINTS.MAX_TABLET_WIDTH) {
        setViewport('tablet');
      } else {
        setViewport('desktop');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    viewport,
    isMobile: viewport === 'mobile',
    isTablet: viewport === 'tablet',
    isDesktop: viewport === 'desktop',
  };
}
