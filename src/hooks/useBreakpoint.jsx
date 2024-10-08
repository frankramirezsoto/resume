import { useState, useEffect } from 'react';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

const getCurrentBreakpoint = () => {
  const width = window.innerWidth;

  if (width >= breakpoints['2xl']) {
    return '2xl';
  } else if (width >= breakpoints.xl) {
    return 'xl';
  } else if (width >= breakpoints.lg) {
    return 'lg';
  } else if (width >= breakpoints.md) {
    return 'md';
  } else if (width >= breakpoints.sm) {
    return 'sm';
  } else {
    return 'default'; // For any width smaller than sm
  }
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(getCurrentBreakpoint());

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getCurrentBreakpoint());
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;