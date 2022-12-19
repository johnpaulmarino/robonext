export const NOTO = 'Noto Serif, sans-serif';
export const NOTO_BOLDITALIC = 'Noto Serif Bold Italic, sans-serif';

export const SOURCE = 'Source Sans Pro, sans-serif';
export const SOURCE_BOLD = 'Source Sans Pro Bold, sans-serif';
export const SOURCE_ITALIC = 'Source Sans Pro Italic, sans-serif';

// sizes in rem
// line-height in absolute
// letter-spacing in px

export const TYPE_COLORS = {
  black: '#282828',
  grey: '#7E7E7E',
  white: '#FFFFFF',
  darkgrey: '#404040',
}

const Type =  {
  jumbo: {
    size: 4,
    line: 1.1,
    font: SOURCE_BOLD,
    weight: 'normal',
  },
  xl: {
    size: 2.5,
    line: 1.1,
    font: SOURCE_BOLD,
    weight: 'normal',
  },
  l: {
    size: 2,
    line: 1.25,
    font: SOURCE_BOLD,
    weight: 'normal',
  },
  m: {
    size: 1.5,
    line: 1.25,
    font: SOURCE_BOLD,
    weight: 'normal',
  },
  ms: {
    size: 1.25,
    line: 1.25,
    font: SOURCE_BOLD,
    weight: 'normal',
  },
  s: {
    size: 0.875,
    line: 1.25,
    font: SOURCE_BOLD,
    weight: 'normal',
  },
  lede: {
    size: 1.75,
    line: 1.45,
    font: SOURCE,
    weight: 'lighter',
  },
  bodySerif: {
    size: 1,
    line: 1.75,
    font: NOTO,
  },
  bodySans: {
    size: 1,
    line: 1.4,
    font: SOURCE,
  },
  label: {
    size: 0.875,
    line: 1,
    font: SOURCE_BOLD,
    weight: 'normal',
    letterSpacing: 2.5,
  },
  labelTiny: {
    size: 0.75,
    line: 1,
    font: SOURCE_BOLD,
    weight: 'normal',
    letterSpacing: 2.5,
  },
  labelMedium: {
    size: 1,
    line: 1,
    font: SOURCE_BOLD,
    weight: 'normal',
    letterSpacing: 2.5,
  },
  blockBoxParagraph: {
    line: 1.5,
  },
  mobileBlockBox: {
    size: 1,
    letterSpacing: 0.3,
  },
}
export default Type;