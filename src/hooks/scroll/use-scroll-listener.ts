import { Dispatch, SetStateAction, useEffect } from 'react';

export const useScrollListener = (fn?: Dispatch<SetStateAction<boolean>>) => {
  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;
      if (fn) {
        fn(!isAtTop);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
