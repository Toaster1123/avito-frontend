import { useEffect } from 'react';

export const useChangeScroll = (isScroll: boolean) => {
  useEffect(() => {
    if (isScroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isScroll]);
};
