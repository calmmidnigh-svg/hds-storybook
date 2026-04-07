// @ts-nocheck  <-- 이 줄을 최상단에 복사해서 넣어주세요!
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const hdsTheme = create({
  base: 'light',
  
  // 폰트 설정
  fontBase: '"Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  
  // 브랜드 타이틀
  brandTitle: '',
  brandUrl: '/',
  brandImage: 'public/HDSlogo.svg', // 나중에 로고 이미지 URL이 생기면 여기에 넣으세요

  // 컬러 팔레트
  colorPrimary: '#333333',
  colorSecondary: '#000000', 

  // UI 배경색 (SEED 스타일의 화이트)
  appBg: '#FFFFFF',
  appContentBg: '#FFFFFF',
  appBorderColor: '#F2F4F6',
  appBorderRadius: 8,

  // 텍스트 컬러
  textColor: '#1A1A1B',
  textInverseColor: '#ffffff',

  // 툴바 색상
  barTextColor: '#999999',
  barSelectedColor: '#000000',
  barBg: '#FFFFFF',
});

addons.setConfig({
  theme: hdsTheme,
});