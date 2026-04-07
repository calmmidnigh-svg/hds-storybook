// =============================================================================
// HDS Color Tokens - 2025_HDS1.1.2
// _colors.scss의 HDS 컬러 토큰을 TypeScript에서 참조하기 위한 상수 파일
// =============================================================================

export const HDS_COLORS = {
  // Primary
  primary950: '#126DFF',
  primary800: '#488FFF',

  // Gray
  gray200: '#EEEEEE',
  gray500: '#AAAAAA',
  gray900: '#333333',

  // Semantic
  error600:   '#F04523',
  warning600: '#CB9C01',
  success600: '#31A552',
} as const;

export type HdsColorType = (typeof HDS_COLORS)[keyof typeof HDS_COLORS];
