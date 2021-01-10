const tailwindcss = require('tailwindcss');

module.exports = {
  purge: [],
  theme: {
    // Breakpoints
    screens: {
      mobile: { min: '0px', max: '767px' },
      tablet: { min: '768px' },
      desktop: { min: '1024px' },
    },
    container: {
      padding: '5%',
      center: true,
      screens: {
        mobile: '100%',
        tablet: '100%',
        desktop: '1400px',
      },
    },
    // Grid Gutter spacing
    gap: {
      0: '0',
      1: '1.5rem',
    },
    // Color reset
    colors: {
      blue: {
        default: '#00BFDA', // primary
        2: '#0099B8', // secondary
        3: '#00353C', // secondary
      },
      coral: {
        default: '#F9665E', // primary
        2: '#B64B45', // secondary
        3: '#883929', // secondary
      },
      lemon: {
        default: '#FFCC1B', // primary
        2: '#D1A717', // secondary
        3: '#9E7F11', // secondary
      },
      green: {
        default: '#00CCA8', // primary
        2: '#00A888',
        3: '#005D4D',
      },
      gray: {
        default: '#B3B3B3', // primary
        2: '#DADADA', // primary
        3: '#ECECEC', // background
        4: '#F2F2F2', // background
        5: '#F9F9F9', // background
        disabled: '#D0D0D0',
      },
      black: {
        default: '#242424',
        2: '#4d4d4d',
        3: '#000000',
      },
      white: {
        default: '#FFFFFF',
      },
      google: '#DB4437',
      facebook: '#1877F2',
      transparent: 'transparent',
    },
    // Site fonts
    fontFamily: {
      sans: ['Soleil'],
      secondary: ['"Bayu Prahara 2"'],
    },
    // Font sizes plus letter spacing and line height
    fontSize: {
      xl: ['3.5rem', {
        letterSpacing: '-0.15px',
        lineHeight: '4.0625rem',
      }],
      h1: ['2.813rem', {
        letterSpacing: '-0.15px',
        lineHeight: '3.875rem',
      }],
      h2: ['2rem', {
        letterSpacing: '-0.15px',
        lineHeight: '3rem',
      }],
      h3: ['1.625rem', {
        letterSpacing: '-0.15px',
        lineHeight: '2.438rem',
      }],
      h4: ['1.25rem', {
        letterSpacing: '-0.15px',
        lineHeight: '2rem',
      }],
      h5: ['1rem', {
        letterSpacing: '-0.15px',
        lineHeight: '1.563rem',
      }],
      h6: ['0.875rem', {
        letterSpacing: '-0.15px',
        lineHeight: '1.375rem',
      }],
      'h6-tiny': ['0.8rem', {
        letterSpacing: '-0.15px',
        lineHeight: '1.063rem',
      }],
      'x-tiny': ['0.625rem', {
        letterSpacing: '-0.15px',
        lineHeight: '0.75rem',
      }],
      base: ['1.25rem', {
        letterSpacing: '-0.15px',
        lineHeight: '2rem',
      }],
    },
    // Line Height
    lineHeight: {
      xl: '4.0625rem',
      h1: '3.875rem',
      h2: '3rem',
      h3: '2.438rem',
      'h3-sm': '1.875rem',
      h4: '2rem',
      'h4-sm': '1.625rem',
      h5: '1.563rem',
      'h5-sm': '1.125rem',
      h6: '1.375rem',
      'h6-tiny': '1.063rem',
      'h6-tiny-sm': '0.875rem',
      'x-tiny': '0.75rem',
    },
    fontWeight: {
      light: 200,
      normal: 400,
      bold: 700,
      'extra-bold': 800,
    },
    spacing: {
      0: '0',
      5: '0.313rem',
      8: '0.5rem',
      10: '0.625rem',
      15: '0.938rem',
      20: '1.25rem',
      25: '1.563rem',
      30: '1.875rem',
      40: '2.5rem',
      50: '3.125rem',
      60: '3.75rem',
      80: '5rem',
      100: '6.25rem',
      120: '7.5rem',
      140: '8.75rem',
      210: '13.125rem',
      256: '16rem',
      350: '21.875rem',
      'favorite-icon': '1.6875rem',
      'more-info': '1.6875rem',
    },
    extend: {
      spacing: {
        'purina-w': '10.5rem',
        'purina-h': '1.8rem',
        'purina-mobile-w': '6.938rem',
        'chewy-w': '5rem',
        'chewy-h': '1.438rem',
        'chewy-mobile-w': '4rem',
        'chewy-mobile-h': '1.1rem',
        'petbasics-w': '4.625rem',
        'petbasics-mobile-w': '4.25rem',
        'petbasics-mobile-h': '1.438rem',
      },
      boxShadow: {
        'inner-hover-blue': '0 2px 0 0 theme(colors.blue.3)',
        'inner-active-blue': 'inset 0 2px 3px 0 rgba(0,122,139,1)',
        'inner-hover-coral': '0 2px 0 0 theme(colors.coral.3)',
        'inner-active-coral': 'inset 0 2px 3px 0 theme(colors.coral.2)',
        'inner-hover-green': '0 2px 0 0 theme(colors.green.3)',
        'inner-active-green': 'inset 0 2px 3px 0 theme(colors.green.2)',
        tooltip: '0 2px 4px 0 theme(colors.gray.default)',
        'icon-shadow': '0px 4px 12px rgba(106, 106, 106, 0.19)',

      },
      inset: {
        80: '5rem',
        20: '1.25rem',
      },
      borderWidth: {
        5: '0.313rem',
      },
      maxHeight: {
        'minus-160': 'calc(100vh - 160px)',
        'minus-255': 'calc(100vh - 255px)',
      },
    },
  },
  variants: {
    backgroundImage: ['responsive', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within', 'active'],
  },
  plugins: [
    tailwindcss,
  ],
};
