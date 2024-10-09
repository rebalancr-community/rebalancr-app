import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return {
    theme,
    setTheme,
  };
};
