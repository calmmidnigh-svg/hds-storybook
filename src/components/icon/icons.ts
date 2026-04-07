// =============================================================================
// HDS Icon Registry
// 피그마에서 추출한 SVG path 데이터를 여기에 등록합니다.
//
// 등록 방법:
//   1. 피그마에서 아이콘 컴포넌트 선택
//   2. Claude에게 "이 아이콘 SVG 추출해줘" 요청
//   3. 아래 iconMap에 { name: { path, viewBox } } 형식으로 추가
// =============================================================================

export type IconNameType = keyof typeof iconMap;

export const iconMap = {
  chevron_right: {
    viewBox: '0 0 12 7.41',
    path: 'M 1.41 7.41 L 6 2.83 L 10.59 7.41 L 12 6 L 6 0 L 0 6 Z',
    fill: true,
  },
  // 아이콘 추가 예시:
  // close_small: {
  //   viewBox: '0 0 10 10',
  //   path: 'M 1 1 L 9 9 M 9 1 L 1 9',
  //   fill: false,  // stroke 방식
  // },
} as const;
