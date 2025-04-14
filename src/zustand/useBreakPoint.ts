import { useEffect } from 'react';
import { create } from 'zustand';

const BREAKPOINTS = {
  desktop: 1024,
  tablet: 768
} as const;

type BreakPointType = {
  isDesktop: boolean;
  isTablet: boolean;
  updateBreakPoints: () => void;
};

export const useBreakPointStore = create<BreakPointType>((set) => ({
  isDesktop: window.innerWidth >= BREAKPOINTS.desktop,
  isTablet: window.innerWidth >= BREAKPOINTS.tablet,

  updateBreakPoints: () => {
    set({
      isDesktop: window.innerWidth >= BREAKPOINTS.desktop,
    });
  },
}));

export const useBreakPointListener = () => {
  const updateBreakPoints = useBreakPointStore(
    (state) => state.updateBreakPoints
  );

  useEffect(() => {
    const handleResize = () => updateBreakPoints();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, [updateBreakPoints]);
};
