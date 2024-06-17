import { useEffect, useState } from "react";

export const useDevice = () => {
  const [device, setDevice] = useState({
    isDesktop: false,
    isTablet: false,
    isMobile: false,
  });

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;

      if (width >= 1025) {
        setDevice({
          isDesktop: true,
          isTablet: false,
          isMobile: false,
        });
      } else if (width >= 767) {
        setDevice({
          isDesktop: false,
          isTablet: true,
          isMobile: false,
        });
      } else {
        setDevice({
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
