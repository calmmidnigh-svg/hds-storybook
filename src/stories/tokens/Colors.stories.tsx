import type { Meta, StoryObj } from '@storybook/react';

const COLOR_GROUPS = [
  {
    name: 'Primary',
    colors: [
      { token: 'primary-50',  value: '#F3F8FF' },
      { token: 'primary-100', value: '#E6F0FF' },
      { token: 'primary-200', value: '#BFCEFF' },
      { token: 'primary-300', value: '#93AAFF' },
      { token: 'primary-400', value: '#7092FF' },
      { token: 'primary-500', value: '#5C7EFF' },
      { token: 'primary-600', value: '#3E68FF' },
      { token: 'primary-700', value: '#1E50FF' },
      { token: 'primary-800', value: '#488FFF', label: 'hover' },
      { token: 'primary-900', value: '#1F78FF' },
      { token: 'primary-950', value: '#126DFF', label: 'CTA' },
    ],
  },
  {
    name: 'Gray (Neutral)',
    colors: [
      { token: 'gray-50',  value: '#F9F9F9' },
      { token: 'gray-100', value: '#F5F5F5' },
      { token: 'gray-200', value: '#EEEEEE', label: 'Background' },
      { token: 'gray-300', value: '#E0E0E0' },
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
      { token: 'success-100', value: '#E6F4EB' },
      { token: 'success-200', value: '#C4E4CE' },
      { token: 'success-300', value: '#9DD1AF' },
      { token: 'success-400', value: '#72BC8E' },
      { token: 'success-500', value: '#4EAA70' },
      { token: 'success-600', value: '#31A552', label: 'Success' },
    ],
  },
  {
    name: 'Warning',
    colors: [
      { token: 'warning-50',  value: '#FEFCF4' },
      { token: 'warning-100', value: '#FEF8E4' },
      { token: 'warning-200', value: '#FAEEBB' },
      { token: 'warning-300', value: '#F5E08E' },
      { token: 'warning-400', value: '#EDD062' },
      { token: 'warning-500', value: '#E3BF3C' },
      { token: 'warning-600', value: '#CB9B00', label: 'Warning' },
    ],
  },
  {
    name: 'Error',
    colors: [
      { token: 'error-50',  value: '#FEF6F4' },
      { token: 'error-100', value: '#FDE9E5' },
      { token: 'error-200', value: '#F9CAC1' },
      { token: 'error-300', value: '#F4A699' },
      { token: 'error-400', value: '#EE8070' },
      { token: 'error-500', value: '#E75E4B' },
      { token: 'error-600', value: '#EF4523', label: 'Error' },
    ],
  },
  {
    name: 'Blue',
    colors: [
      { token: 'blue-50',  value: '#EFF6FF' },
      { token: 'blue-100', value: '#DBEAFE' },
      { token: 'blue-200', value: '#BFDBFE' },
      { token: 'blue-300', value: '#93C5FD' },
      { token: 'blue-400', value: '#60A5FA' },
      { token: 'blue-500', value: '#3B82F6' },
      { token: 'blue-600', value: '#2563EB' },
    ],
  },
  {
    name: 'Green',
    colors: [
      { token: 'green-50',  value: '#F0FDF4' },
      { token: 'green-100', value: '#DCFCE7' },
      { token: 'green-200', value: '#BBF7D0' },
      { token: 'green-300', value: '#86EFAC' },
      { token: 'green-400', value: '#4ADE80' },
      { token: 'green-500', value: '#22C55E' },
      { token: 'green-600', value: '#16A34A' },
    ],
  },
  {
    name: 'Indigo',
    colors: [
      { token: 'indigo-50',  value: '#EEF2FF' },
      { token: 'indigo-100', value: '#E0E7FF' },
      { token: 'indigo-200', value: '#C7D2FE' },
      { token: 'indigo-300', value: '#A5B4FC' },
      { token: 'indigo-400', value: '#818CF8' },
      { token: 'indigo-500', value: '#6366F1' },
      { token: 'indigo-600', value: '#4F46E5' },
    ],
  },
  {
    name: 'Orange',
    colors: [
      { token: 'orange-50',  value: '#FFF7ED' },
      { token: 'orange-100', value: '#FFEDD5' },
      { token: 'orange-200', value: '#FED7AA' },
      { token: 'orange-300', value: '#FDBA74' },
      { token: 'orange-400', value: '#FB923C' },
      { token: 'orange-500', value: '#F97316' },
      { token: 'orange-600', value: '#EA580C' },
    ],
  },
  {
    name: 'Pink',
    colors: [
      { token: 'pink-50',  value: '#FDF2F8' },
      { token: 'pink-100', value: '#FCE7F3' },
      { token: 'pink-200', value: '#FBCFE8' },
      { token: 'pink-300', value: '#F9A8D4' },
      { token: 'pink-400', value: '#F472B6' },
      { token: 'pink-500', value: '#EC4899' },
      { token: 'pink-600', value: '#DB2777' },
    ],
  },
  {
    name: 'Purple',
    colors: [
      { token: 'purple-50',  value: '#FAF5FF' },
      { token: 'purple-100', value: '#F3E8FF' },
      { token: 'purple-200', value: '#E9D5FF' },
      { token: 'purple-300', value: '#D8B4FE' },
      { token: 'purple-400', value: '#C084FC' },
      { token: 'purple-500', value: '#A855F7' },
      { token: 'purple-600', value: '#9333EA' },
    ],
  },
  {
    name: 'Red',
    colors: [
      { token: 'red-50',  value: '#FEF2F2' },
      { token: 'red-100', value: '#FEE2E2' },
      { token: 'red-200', value: '#FECACA' },
      { token: 'red-300', value: '#FCA5A5' },
      { token: 'red-400', value: '#F87171' },
      { token: 'red-500', value: '#EF4444' },
      { token: 'red-600', value: '#DC2626' },
    ],
  },
  {
    name: 'Teal',
    colors: [
      { token: 'teal-50',  value: '#F0FDFA' },
      { token: 'teal-100', value: '#CCFBF1' },
      { token: 'teal-200', value: '#99F6E4' },
      { token: 'teal-300', value: '#5EEAD4' },
      { token: 'teal-400', value: '#2DD4BF' },
      { token: 'teal-500', value: '#14B8A6' },
      { token: 'teal-600', value: '#0D9488' },
    ],
  },
  {
    name: 'Yellow',
    colors: [
      { token: 'yellow-50',  value: '#FEFCE8' },
      { token: 'yellow-100', value: '#FEF9C3' },
      { token: 'yellow-200', value: '#FEF08A' },
      { token: 'yellow-300', value: '#FDE047' },
      { token: 'yellow-400', value: '#FACC15' },
      { token: 'yellow-500', value: '#EAB308' },
      { token: 'yellow-600', value: '#CA8A04' },
    ],
  },
];

const SEMANTIC_COLORS = [
  { token: '$color-cta-primary',      value: '#126DFF', usage: '기본 CTA' },
  { token: '$color-cta-primary-hover', value: '#488FFF', usage: 'Hover 상태' },
  { token: '$color-text-body',         value: '#333333', usage: '본문 텍스트' },
  { token: '$color-text-disabled',     value: '#AAAAAA', usage: 'Disabled' },
  { token: '$color-bg-subtle',         value: '#EEEEEE', usage: '배경' },
  { token: '$color-error',             value: '#EF4523', usage: '에러 상태' },
  { token: '$color-warning',           value: '#CB9B00', usage: '경고 상태' },
  { token: '$color-success',           value: '#31A552', usage: '성공 상태' },
];

type ColorSwatchPropsType = {
  token: string;
  value: string;
  label?: string;
};

const ColorSwatch = ({ token, value, label }: ColorSwatchPropsType) => {
  const isLight = isLightColor(value);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '120px' }}>
      <div
        style={{
          width: '100%',
          height: '56px',
          background: value,
          borderRadius: '8px',
          border: isLight ? '1px solid #E0E0E0' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {label && (
          <span style={{
            fontSize: '11px',
            fontWeight: 600,
            color: isLight ? '#333333' : '#FFFFFF',
            padding: '2px 6px',
            background: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.15)',
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

const isLightColor = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
};

const ColorPalette = () => (
  <div style={{ fontFamily: "'Pretendard', sans-serif", padding: '24px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
    <div>
      <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#333333', marginBottom: '16px' }}>Semantic Tokens</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
        {SEMANTIC_COLORS.map(({ token, value, usage }) => (
          <div key={token} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid #EEEEEE', borderRadius: '8px' }}>
            <div style={{ width: '40px', height: '40px', background: value, borderRadius: '8px', flexShrink: 0, border: isLightColor(value) ? '1px solid #E0E0E0' : 'none' }} />
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
