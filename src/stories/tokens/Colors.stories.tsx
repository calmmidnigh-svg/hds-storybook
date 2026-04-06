import type { Meta, StoryObj } from '@storybook/react';

const COLOR_GROUPS = [
  {
    name: 'Primary',
    colors: [
      { token: 'primary-50',  value: '#F3F8FF' },
      { token: 'primary-100', value: '#EAF3FF' },
      { token: 'primary-200', value: '#E0EDFF' },
      { token: 'primary-300', value: '#CFE1FF' },
      { token: 'primary-400', value: '#B7D2FF' },
      { token: 'primary-500', value: '#9BC2FF' },
      { token: 'primary-600', value: '#80B0FF' },
      { token: 'primary-700', value: '#629FFF' },
      { token: 'primary-800', value: '#488FFF', label: 'Hover' },
      { token: 'primary-900', value: '#1F79FF' },
      { token: 'primary-950', value: '#126DFF', label: 'CTA' },
    ],
  },
  {
    name: 'Gray (Neutral)',
    colors: [
      { token: 'gray-50',  value: '#FAFAFA' },
      { token: 'gray-100', value: '#F5F5F5' },
      { token: 'gray-200', value: '#EEEEEE', label: 'Background' },
      { token: 'gray-300', value: '#DDDDDD' },
      { token: 'gray-400', value: '#CCCCCC' },
      { token: 'gray-500', value: '#AAAAAA', label: 'Disabled' },
      { token: 'gray-600', value: '#888888' },
      { token: 'gray-700', value: '#666666' },
      { token: 'gray-800', value: '#444444' },
      { token: 'gray-900', value: '#333333', label: 'Body Text' },
      { token: 'gray-950', value: '#222222' },
    ],
  },
  {
    name: 'Success',
    colors: [
      { token: 'success-50',  value: '#F5FAF6' },
      { token: 'success-100', value: '#EAF6EE' },
      { token: 'success-200', value: '#E0F2E5' },
      { token: 'success-300', value: '#D6EDDC' },
      { token: 'success-400', value: '#C1E4CB' },
      { token: 'success-500', value: '#98D2A8' },
      { token: 'success-600', value: '#31A552', label: 'Success' },
    ],
  },
  {
    name: 'Warning',
    colors: [
      { token: 'warning-50',  value: '#FFFDF5' },
      { token: 'warning-100', value: '#FEF3CC' },
      { token: 'warning-200', value: '#FEE79A' },
      { token: 'warning-300', value: '#FEDB67' },
      { token: 'warning-400', value: '#FECF34' },
      { token: 'warning-500', value: '#FCC101' },
      { token: 'warning-600', value: '#CB9C01', label: 'Warning' },
    ],
  },
  {
    name: 'Error',
    colors: [
      { token: 'error-50',  value: '#FEF6F4' },
      { token: 'error-100', value: '#FFF3F0' },
      { token: 'error-200', value: '#FDE3DE' },
      { token: 'error-300', value: '#FCDAD3' },
      { token: 'error-400', value: '#FAC7BD' },
      { token: 'error-500', value: '#F7A291' },
      { token: 'error-600', value: '#F04523', label: 'Error' },
    ],
  },
  {
    name: 'Blue',
    colors: [
      { token: 'blue-50',  value: '#F0F5F9' },
      { token: 'blue-100', value: '#E9F0F6' },
      { token: 'blue-200', value: '#C4D6E8' },
      { token: 'blue-300', value: '#9FBCDA' },
      { token: 'blue-400', value: '#7AA2CC' },
      { token: 'blue-500', value: '#5588BE' },
      { token: 'blue-600', value: '#3E6EA2' },
    ],
  },
  {
    name: 'Green',
    colors: [
      { token: 'green-50',  value: '#EAF5F0' },
      { token: 'green-100', value: '#C8E4D7' },
      { token: 'green-200', value: '#A6D4BE' },
      { token: 'green-300', value: '#83C3A5' },
      { token: 'green-400', value: '#61B38C' },
      { token: 'green-500', value: '#499772' },
      { token: 'green-600', value: '#387357' },
    ],
  },
  {
    name: 'Indigo',
    colors: [
      { token: 'indigo-50',  value: '#F2F3F8' },
      { token: 'indigo-100', value: '#E5E6F0' },
      { token: 'indigo-200', value: '#D8DAE9' },
      { token: 'indigo-300', value: '#B8BBD6' },
      { token: 'indigo-400', value: '#979CC3' },
      { token: 'indigo-500', value: '#777DB1' },
      { token: 'indigo-600', value: '#5A619D' },
    ],
  },
  {
    name: 'Light Green',
    colors: [
      { token: 'lightgreen-50',  value: '#F0F4EB' },
      { token: 'lightgreen-100', value: '#D6E2CA' },
      { token: 'lightgreen-200', value: '#BCD0A9' },
      { token: 'lightgreen-300', value: '#A3BE89' },
      { token: 'lightgreen-400', value: '#8AAC68' },
      { token: 'lightgreen-500', value: '#719150' },
      { token: 'lightgreen-600', value: '#58703E' },
    ],
  },
  {
    name: 'Orange',
    colors: [
      { token: 'orange-50',  value: '#FAF5EF' },
      { token: 'orange-100', value: '#EFDDC8' },
      { token: 'orange-200', value: '#E3C4A0' },
      { token: 'orange-300', value: '#D8AB79' },
      { token: 'orange-400', value: '#CC9351' },
      { token: 'orange-500', value: '#B67A35' },
      { token: 'orange-600', value: '#8E5F29' },
    ],
  },
  {
    name: 'Pink',
    colors: [
      { token: 'pink-50',  value: '#F8F2F6' },
      { token: 'pink-100', value: '#F0E5EC' },
      { token: 'pink-200', value: '#E5D1DE' },
      { token: 'pink-300', value: '#D3B1C6' },
      { token: 'pink-400', value: '#C190AE' },
      { token: 'pink-500', value: '#AE6F96' },
      { token: 'pink-600', value: '#96547D' },
    ],
  },
  {
    name: 'Purple',
    colors: [
      { token: 'purple-50',  value: '#F5F3F7' },
      { token: 'purple-100', value: '#ECE6EF' },
      { token: 'purple-200', value: '#DBD0E1' },
      { token: 'purple-300', value: '#C3B1CE' },
      { token: 'purple-400', value: '#AB92BA' },
      { token: 'purple-500', value: '#9373A6' },
      { token: 'purple-600', value: '#79598C' },
    ],
  },
  {
    name: 'Red',
    colors: [
      { token: 'red-50',  value: '#F8F2F2' },
      { token: 'red-100', value: '#F1E4E4' },
      { token: 'red-200', value: '#E0C3C3' },
      { token: 'red-300', value: '#CEA1A1' },
      { token: 'red-400', value: '#BD8080' },
      { token: 'red-500', value: '#AB5E5E' },
      { token: 'red-600', value: '#8E4A4A' },
    ],
  },
  {
    name: 'Teal',
    colors: [
      { token: 'teal-50',  value: '#E8F5F8' },
      { token: 'teal-100', value: '#C1E5EB' },
      { token: 'teal-200', value: '#9BD5DF' },
      { token: 'teal-300', value: '#74C5D2' },
      { token: 'teal-400', value: '#4EB5C6' },
      { token: 'teal-500', value: '#379AAA' },
      { token: 'teal-600', value: '#2A7682' },
    ],
  },
  {
    name: 'Yellow',
    colors: [
      { token: 'yellow-50',  value: '#F6F1DF' },
      { token: 'yellow-100', value: '#ECDFB7' },
      { token: 'yellow-200', value: '#E1CD8F' },
      { token: 'yellow-300', value: '#D6BC66' },
      { token: 'yellow-400', value: '#CBAA3E' },
      { token: 'yellow-500', value: '#A98C2E' },
      { token: 'yellow-600', value: '#816B23' },
    ],
  },
];

const SEMANTIC_COLORS = [
  { token: '$color-cta-primary',       value: '#126DFF', usage: '기본 CTA' },
  { token: '$color-cta-primary-hover', value: '#488FFF', usage: 'Hover 상태' },
  { token: '$color-text-body',         value: '#333333', usage: '본문 텍스트' },
  { token: '$color-text-disabled',     value: '#AAAAAA', usage: 'Disabled' },
  { token: '$color-bg-subtle',         value: '#EEEEEE', usage: '배경' },
  { token: '$color-error',             value: '#F04523', usage: '에러 상태' },
  { token: '$color-warning',           value: '#CB9C01', usage: '경고 상태' },
  { token: '$color-success',           value: '#31A552', usage: '성공 상태' },
];

type ColorSwatchPropsType = {
  token: string;
  value: string;
  label?: string;
};

const isLightColor = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
};

const ColorSwatch = ({ token, value, label }: ColorSwatchPropsType) => {
  const isLight = isLightColor(value);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '100px' }}>
      <div style={{
        width: '100%',
        height: '56px',
        background: value,
        borderRadius: '8px',
        border: isLight ? '1px solid #DDDDDD' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {label && (
          <span style={{
            fontSize: '11px',
            fontWeight: 600,
            color: isLight ? '#333333' : '#FFFFFF',
            padding: '2px 6px',
            background: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.2)',
            borderRadius: '4px',
          }}>
            {label}
          </span>
        )}
      </div>
      <span style={{ fontSize: '11px', color: '#888888', fontFamily: 'monospace' }}>{`$${token}`}</span>
      <span style={{ fontSize: '12px', color: '#333333', fontWeight: 600 }}>{value}</span>
    </div>
  );
};

const ColorPalette = () => (
  <div style={{ fontFamily: "'Pretendard', sans-serif", padding: '24px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
    <div>
      <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#333333', marginBottom: '16px' }}>Semantic Tokens</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
        {SEMANTIC_COLORS.map(({ token, value, usage }) => (
          <div key={token} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid #EEEEEE', borderRadius: '8px' }}>
            <div style={{ width: '40px', height: '40px', background: value, borderRadius: '8px', flexShrink: 0, border: isLightColor(value) ? '1px solid #DDDDDD' : 'none' }} />
            <div>
              <div style={{ fontSize: '11px', color: '#888888', fontFamily: 'monospace' }}>{token}</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#333333' }}>{value}</div>
              <div style={{ fontSize: '12px', color: '#666666' }}>{usage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {COLOR_GROUPS.map(({ name, colors }) => (
      <div key={name}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#333333', marginBottom: '16px' }}>{name}</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {colors.map(color => (
            <ColorSwatch key={color.token} {...color} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

const meta: Meta = {
  title: 'Foundation/Colors',
  component: ColorPalette,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {};
