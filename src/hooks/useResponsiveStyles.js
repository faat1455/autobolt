import { useState, useEffect } from 'react';

const useResponsiveStyles = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 640);
  const [isTablet, setIsTablet] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Stílus helper - csökkenti a kódot
  const s = (mobile, desktop) => isMobile ? mobile : desktop;
  const st = (mobile, tablet, desktop) => isMobile ? mobile : isTablet ? tablet : desktop;

  return { isMobile, isTablet, s, st };
};

export default useResponsiveStyles;