import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

export type ThemeContextType = [Theme | null, () => void];

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>([null, () => null]);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme | null>(Theme.LIGHT);

  const switchTheme = () => {
    setTheme((value) => (value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <ThemeContext.Provider value={[theme, switchTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
