'use client';
import { useEffect } from 'react';

export const useDisableScroll = (active: boolean) => {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [active]);
};
