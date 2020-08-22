export default {
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  colors: {
    text: "#FFFFFF",
    textSecondary: "#d2d2f1",
    textMuted: "#4e4c7a",
    primary: "#2B2BE2",
    secondary: "#aaaaf3",
    surface: "#08082d",
    background: "#151571"
  },
  breakpoints: ["576px", "768px", "992px", "1200px"],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 24, 32, 48, 64],

  radii: [4, 8, 50],

  borderWidths: [1, 4],

  shadows: [`0 0 0 2px`],
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "normal",
    }
  }
}
