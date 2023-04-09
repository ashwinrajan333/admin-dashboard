import { createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";

const dark = {
  primary: {
    main: "#141b2d",
  },
  secondary: {
    main: "#4cceac",
  },
  neutral: {
    dark: "#3d3d3d",
    main: "#666666",
    light: "#e0e0e0",
  },
  background: {
    default: "#141b2d",
  },
};

const light = {
  primary: {
    main: "#040509",
  },
  secondary: {
    main: "#4cceac",
  },
  neutral: {
    dark: "#a3a3a3",
    main: "#666666",
    light: "#141414",
  },
  background: {
    default: "#fcfcfc",
  },
};

const getThemes = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark" ? dark : light),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ThemeContext = createContext({
  toggleTheme: () => {},
});

export const useTheme = () => {
  const [mode, setMode] = useState("dark");

  const toggleMode = useMemo(
    () => ({
      toggleTheme: () =>
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getThemes(mode)), [mode]);

  return [theme, toggleMode];
};
