import { extendTheme } from "@chakra-ui/react";

const global = {
  // styles for the `body`
  body: {
    bg: "primary.500",
    color: "#000",
    padding: 0,
    margin: 0,
  },
  // styles for the `a`
  a: {
    color: "accent.500",
    _hover: {
      textDecoration: "underline",
    },
  },
};

// Colors
const colors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  gray: {
    50: "#f7fafc",
    900: "#171923",
  },
  brand: {
    100: "#9b77da",
  },
  primary: {
    100: "#6fa5b1",
  },
  secondary: {
    100: "#4e6b9f",
  },
  accent: {
    100: "#f39de5",
  },
};

// Typography
const typography = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};

// Breakpoint
const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const customTheme = extendTheme({ global, colors, typography, breakpoints });
export default customTheme;
