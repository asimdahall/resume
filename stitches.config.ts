import { createStyled } from "@stitches/react";

export const { styled, css } = createStyled({
  tokens: {
    colors: {
      $primary: "rgb(44,62,80)",
      $secondary: "rgb(43,77,151)",
      $tertiary: "rgb(55,152,255)",
      $gray: "rgb(242,242,242)",
      $darkGray: "#ddd",
      $fontColor: "rgb(51,51,51)",
    },
    space: {
      $1: "5px",
      $2: "10px",
      $3: "15px",
    },
    fontSizes: {
      $1: "12px",
      $2: "13px",
      $3: "15px",
      $4: "20px",
      $5: "26px",
      $6: "30px",
    },
    fonts: {
      $untitled: "Untitled Sans, apple-system, sans-serif",
      $mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
