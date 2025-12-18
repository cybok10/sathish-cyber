import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  toggleTheme: () => void;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  toggleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  // 1. Initialize state from localStorage or default
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  // 2. Effect to apply the theme class to the HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove both classes first to avoid conflicts
    root.classList.remove("light", "dark");
    
    // Add the current active theme class
    root.classList.add(theme);
    
    // Save preference to localStorage
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  // 3. Function to toggle between themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProviderContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// 4. Custom hook for consuming the theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};