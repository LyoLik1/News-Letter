import { useEffect, useState } from "react";

export const useDevice = () => {
  const [device, setDevice] = useState({
    isDesktop: false,
    isTablet: false,
    isMobile: false,
    isLargeDesktop: false,
  });

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      if (width > 1400) {
        setDevice({
          isLargeDesktop: true,
          isDesktop: false,
          isTablet: false,
          isMobile: false,
        });
      } else if (width >= 1025) {
        setDevice({
          isLargeDesktop: false,
          isDesktop: true,
          isTablet: false,
          isMobile: false,
        });
      } else if (width >= 490) {
        setDevice({
          isLargeDesktop: false,
          isDesktop: false,
          isTablet: true,
          isMobile: false,
        });
      } else {
        setDevice({
          isLargeDesktop: false,
          isDesktop: false,
          isTablet: false,
          isMobile: true,
        });
      }
    };

    updateDevice();

    window.addEventListener("resize", updateDevice);

    return () => {
      window.removeEventListener("resize", updateDevice);
    };
  }, []);

  return device;
};
