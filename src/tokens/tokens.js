module.exports = {
  prefix: {
    value: '"sd"',
    themeable: true,
  },
  // Base colors
  color: {
    black: {
      value: '#000000',
    },
    white: {
      value: '#FFFFFF',
    },
    primary: {
      default: {
        value: '#4F31E4',
      },
      surface: {
        value: '#F6F4FF',
      },
      border: {
        value: '#BDB1F6',
      },
      hover: {
        value: '#3A1BD1',
      },
      active: {
        value: '#23117F',
      },
      focus: {
        value: '{color.primary.default.value}',
        modify: [
          {
            type: 'alpha',
            amount: 0.2,
          },
        ],
      },
    },
    info: {
      default: {
        value: '#0B5CD7',
      },
      surface: {
        value: '#ECF2FC',
      },
      border: {
        value: '#B6CFF3',
      },
      hover: {
        value: '#044DBA',
      },
      active: {
        value: '#043C8F',
      },
    },
    success: {
      default: {
        value: '#008243',
      },
      surface: {
        value: '#EBF5F0',
      },
      border: {
        value: '#B3DAC7',
      },
      hover: {
        value: '#006836',
      },
      active: {
        value: '#005029',
      },
    },
    warning: {
      default: {
        value: '#EA780E',
      },
      surface: {
        value: '#FFF2E7',
      },
      border: {
        value: '#FFCA99',
      },
      hover: {
        value: '#D16603',
      },
      active: {
        value: '#653508',
      },
    },
    danger: {
      default: {
        value: '#EE0000',
      },
      surface: {
        value: '#FFECEC',
      },
      border: {
        value: '#FFD7D7',
      },
      hover: {
        value: '#A20000',
      },
      active: {
        value: '#630000',
      },
    },
    neutral: {
      10: {
        value: '{color.white.value}',
        comment: 'Neutral background, White text',
      },
      20: {
        value: '#F5F5F5',
        comment: 'Item Background Hover, Secondary Background',
      },
      30: {
        value: '#EDEDED',
        comment: 'Item Background Pressed',
      },
      40: {
        value: '#E0E0E0',
        comment: 'Item Background Selected',
      },
      50: {
        value: '#C2C2C2',
        comment: 'Borders and Dividers',
      },
      60: {
        value: '#9E9E9E',
        comment: 'Disabled text',
      },
      70: {
        value: '#757575',
        comment: 'Placeholder text',
      },
      80: {
        value: '#616161',
        comment: 'Caption text, secondary text',
      },
      90: {
        value: '#424242',
        comment: 'Body text and inactive text',
      },
      100: {
        value: '#0A0A0A',
        comment: 'Headings and active text',
      },
    },
    // Link colors
    link: {
      default: {
        value: '{color.info.default.value}',
      },
      hover: {
        value: '{color.info.hover.value}',
      },
    },
    // Text colors
    text: {
      primary: {
        'on-light': {
          value: '{color.neutral.90.value}',
        },
        'on-dark': {
          value: '{color.neutral.10.value}',
        },
      },
    },
    // Icon colors
    icon: {
      default: {
        value: '{color.neutral.90.value}',
      },
      hover: {
        value: '{color.neutral.100.value}',
      },
    },
    // Background colors
    background: {
      white: {
        value: '{color.neutral.10.value}',
      },
      neutral: {
        value: '{color.neutral.20.value}',
      },
    },
  },
  // Border
  border: {
    radius: {
      default: {
        value: '0.25rem',
      },
    },
    component: {
      'on-light': {
        value: 'solid 1px {color.neutral.40.value}',
      },
    },
  },
  // Fonts
  font: {
    family: {
      'sans-serif': {
        value:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      },
    },
    'line-height': {
      body: {
        value: '1.5',
      },
      heading: {
        value: '1.3',
      },
    },
    weight: {
      regular: {
        value: 400,
      },
      medium: {
        value: 500,
      },
    },
  },
  //   Box shadow
  box: {
    shadow: {
      1: {
        value: '0 1px 2px 0 rgba({color.black.value}, .12)',
      },
      2: {
        value: '0 4px 8px 0 rgba({color.black.value}, .10)',
      },
    },
  },
  //   Size
  size: {
    //   base
    xxs: {
      value: 0.25,
      comment: '4px',
    },
    xs: {
      value: 0.5,
      comment: '8px',
    },
    sm: {
      value: 0.75,
      comment: '12px',
    },
    md: {
      value: 1,
      comment: '16px',
    },
    lg: {
      value: 1.5,
      comment: '24px',
    },
    xl: {
      value: 2,
      comment: '32px',
    },
    xxl: {
      value: 3,
      comment: '48px',
    },
    xxxl: {
      value: 4,
      comment: '64px',
    },
    '4xl': {
      value: 5,
      comment: '80px',
    },
    '5xl': {
      value: 6,
      comment: '96px',
    },
    '6xl': {
      value: 8,
      comment: '128px',
    },
    // spacing
    space: {
      inset: {
        xxs: {
          value: '{size.xxs.value}',
        },
        xs: {
          value: '{size.xs.value}',
        },
        sm: {
          value: '{size.sm.value}',
        },
        md: {
          value: '{size.md.value}',
        },
        lg: {
          value: '{size.lg.value}',
        },
        xl: {
          value: '{size.xl.value}',
        },
        xxl: {
          value: '{size.xxl.value}',
        },
        xxxl: {
          value: '{size.xxxl.value}',
        },
        '4xl': {
          value: '{size.4xl.value}',
        },
        '5xl': {
          value: '{size.5xl.value}',
        },
        '6xl': {
          value: '{size.6xl.value}',
        },
      },
      'inset-stretch': {
        sm: {
          value: '{size.xs.value} {size.sm.value}',
        },
        md: {
          value: '{size.sm.value} {size.xl.value}',
        },
        lg: {
          value: '{size.md.value} {size.xl.value}',
        },
      },
      stack: {
        xxs: {
          value: '0 0 {size.xxs.value}',
        },
        xs: {
          value: '0 0 {size.xs.value}',
        },
        sm: {
          value: '0 0 {size.sm.value}',
        },
        md: {
          value: '0 0 {size.md.value}',
        },
        lg: {
          value: '0 0 {size.lg.value}',
        },
        xl: {
          value: '0 0 {size.xl.value}',
        },
        xxl: {
          value: '0 0 {size.xxl.value}',
        },
        '4xl': {
          value: '0 0 {size.4xl.value}',
        },
        '5xl': {
          value: '0 0 {size.5xl.value}',
        },
        '6xl': {
          value: '0 0 {size.6xl.value}',
        },
      },
      'inline-left': {
        xxs: {
          value: '0 {size.xxs.value} 0 0',
        },
        xs: {
          value: '0 {size.xs.value} 0 0',
        },
        sm: {
          value: '0 {size.sm.value} 0 0',
        },
        md: {
          value: '0 {size.md.value} 0 0',
        },
        lg: {
          value: '0 {size.lg.value} 0 0',
        },
        xl: {
          value: '0 {size.xl.value} 0 0',
        },
        xxl: {
          value: '0 {size.xxl.value} 0 0',
        },
        xxxl: {
          value: '0 {size.xxxl.value} 0 0',
        },
        '4xl': {
          value: '0 {size.4xl.value} 0 0',
        },
        '5xl': {
          value: '0 {size.5xl.value} 0 0',
        },
        '6xl': {
          value: '0 {size.6xl.value} 0 0',
        },
      },
      'inline-right': {
        xxs: {
          value: '0 0 0 {size.xxs.value}',
        },
        xs: {
          value: '0 0 0 {size.xs.value}',
        },
        sm: {
          value: '0 0 0 {size.sm.value}',
        },
        md: {
          value: '0 0 0 {size.md.value}',
        },
        lg: {
          value: '0 0 0 {size.lg.value}',
        },
        xl: {
          value: '0 0 0 {size.xl.value}',
        },
        xxl: {
          value: '0 0 0 {size.xxl.value}',
        },
        xxxl: {
          value: '0 0 0 {size.xxxl.value}',
        },
        '4xl': {
          value: '0 0 0 {size.4xl.value}',
        },
        '5xl': {
          value: '0 0 0 {size.5xl.value}',
        },
        '6xl': {
          value: '0 0 0 {size.6xl.value}',
        },
      },
    },
    // fonts
    font: {
      text: {
        sm: {
          value: 0.75,
          comment: '12px',
        },
        md: {
          value: 0.875,
          comment: '14px',
        },
        lg: {
          value: 1,
          comment: '16px',
        },
      },
      heading: {
        sm: {
          value: 1.25,
          comment: '20px',
        },
        md: {
          value: 1.75,
          comment: '28px',
        },
        lg: {
          value: 2.25,
          comment: '36px',
        },
      },
    },
    //   Icons
    icon: {
      xs: {
        value: '{size.md.value}',
      },
      sm: {
        value: 1.25,
        comment: '20px',
      },
      md: {
        value: '{size.lg.value}',
        comment: '24px',
      },
      lg: {
        value: '{size.xl.value}',
      },
      xl: {
        value: '{size.xxl.value}',
      },
    },
    // Breakpoints
    breakpoint: {
      sm: {
        value: 20,
        comment: '320px',
      },
      md: {
        value: 42,
        comment: '672px',
      },
      lg: {
        value: 66,
        comment: '1056px',
      },
      xl: {
        value: 84,
        comment: '1344',
      },
      max: {
        value: 99,
        comment: '1584px',
      },
    },
  },
};
