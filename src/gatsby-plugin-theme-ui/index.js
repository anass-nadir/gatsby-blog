const headings = {
  color: 'text',
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'normal',
  wordBreak: 'break-word',
  margin: 0,
  a: {
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    color: 'inherit'
  }
};

const anchors = {
  color: 'primary',
  cursor: 'pointer',
  fontFamily: 'body',
  fontSize: [2, 3],
  fontWeight: 'body',
  lineHeight: '28px',
  outline: 'none',
  transition: '.2s linear all',
  ':hover': {
    color: 'text'
  },
  ':focus': {
    color: 'text'
  }
};

export default {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  colors: {
    text: '#FFFFFF',
    textSecondary: '#d2d2f1',
    textMuted: '#4e4c7a',
    primary: '#a92aeb',
    secondary: '#688ce0',
    surface: '#1a1832',
    background: '#131127',
    transparent: `rgba(0,0,0,0)`
  },
  breakpoints: ['576px', '768px', '992px', '1200px'],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 24, 32, 48, 64],

  radii: [4, 8, 50],

  borderWidths: [1, 4],

  shadows: [`0 0 0 2px`],
  transitions: {
    sideBarTransition: '.3s ease-in-out margin-left'
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'normal'
    },

    h1: {
      ...headings,
      marginBottom: 3,
      fontSize: [6, 7, 8]
    },

    h2: {
      ...headings,
      marginBottom: 3,
      fontSize: [5, 7]
    },

    h3: {
      ...headings,
      marginBottom: 3,
      fontSize: [4, 6]
    },

    h4: {
      ...headings,
      marginBottom: 3,
      fontSize: [4, 5]
    },

    h5: {
      ...headings,
      marginBottom: 2,
      fontSize: [3, 4]
    },

    h6: {
      ...headings,
      marginBottom: 2,
      fontSize: [2, 3],
      fontWeight: 'body'
    },

    p: {
      color: 'textSecondary',
      fontFamily: 'body',
      fontSize: [2, 3],
      fontWeight: 'body',
      lineHeight: '28px',
      wordBreak: 'break-word',
      marginTop: 0,
      marginBottom: 4,
      a: {
        ...anchors
      },
      code: {
        fontFamily: 'monospace',
        fontSize: [2, 3],
        fontWeight: 'body',
        lineHeight: '28px',
        backgroundColor: 'surface',
        p: 1,
        borderRadius: 0,
        WebkitFontSmoothing: 'antialiased'
      }
    },
    ul: {
      marginTop: 3,
      paddingLeft: 3
    },
    ol: {
      marginTop: 3,
      paddingLeft: 3
    },
    li: {
      color: 'text',
      fontFamily: 'body',
      fontSize: [1, 2],
      fontWeight: 'body',
      lineHeight: '28px',
      p: {
        color: 'text'
      }
    },
    a: {
      ...anchors
    },
    blockquote: {
      backgroundColor: 'background',
      borderLeftStyle: 'solid',
      borderLeftWidth: 4,
      borderColor: 'secondary',
      px: 3,
      py: 3,
      my: 3,
      mx: [2, 3],
      p: {
        mb: 0
      }
    },
    table: {
      color: 'textSecondary',
      fontFamily: 'body',
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      backgroundColor: 'background',
      color: 'text',
      borderTopColor: 'textMuted',
      borderLeftColor: 'textMuted',
      borderBottomColor: 'transparent',
      borderRightColor: 'textMuted',
      borderStyle: 'solid',
      borderWidth: 0,
      px: 2,
      py: 2
    },
    td: {
      borderStyle: 'solid',
      borderWidth: 0,
      borderColor: 'textMuted',
      px: 2,
      py: 2
    },
    hr: {
      opacity: 0
    },
    img: {
      width: '100%',
      height: 'auto'
    }
  }
};
