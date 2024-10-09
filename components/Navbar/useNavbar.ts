import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useNavbar = () => {
  const { theme } = useTheme();

  const [logoSrc, setLogoSrc] = useState("/assets/logo-text-white-bg.png");

  useEffect(() => {
    if (theme === "dark") {
      setLogoSrc("/assets/logo-text-dark-bg.png");
    } else {
      setLogoSrc("/assets/logo-text-white-bg.png");
    }
  }, [theme]);

  return {
    theme,
    logoSrc,
  };
};
