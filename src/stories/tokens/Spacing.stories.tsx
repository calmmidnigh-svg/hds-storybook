import type { Meta, StoryObj } from '@storybook/react';

const SPACING_SCALE = [
  { token: '$space-0',  value: 0 },
  { token: '$space-2',  value: 2 },
  { token: '$space-4',  value: 4 },
  { token: '$space-8',  value: 8 },
  { token: '$space-12', value: 12 },
  { token: '$space-16', value: 16 },
  { token: '$space-20', value: 20 },
  { token: '$space-24', value: 24 },
  { token: '$space-28', value: 28 },
  { token: '$space-32', value: 32 },
  { token: '$space-36', value: 36 },
  { token: '$space-40', value: 40 },
  { token: '$space-48', value: 48 },
  { token: '$space-56', value: 56 },
  { token: '$space-64', value: 64 },
  { token: '$space-72', value: 72 },
  { token: '$space-80', value: 80 },
];

const GUTTER_SCALE = [
  { token: '$gutter-xs',  value: 0,  label: 'xs' },
  { token: '$gutter-s',   value: 12, label: 's' },
  { token: '$gutter-m',   value: 16, label: 'm' },
  { token: '$gutter-lg',  value: 24, label: 'lg' },
  { token: '$gutter-xlg', value: 40, label: 'xlg' },
];

const COMPONENT_GAP = [
  { size: 'xs', x: 4,  y: 8 },
  { size: 's',  x: 8,  y: 12 },
  { size: 'm',  x: 12, y: 16 },
  { size: 'lg', x: 16, y: 24 },
];

const RADIUS = [
  { token: '$radius-sm', value: 4 },
  { token: '$radius-md', value: 8 },
  { token: '$radius-lg', value: 12 },
];

const SpacingTokens = () => (
  <div style={{ fontFamily: "'Pretendard', sans-serif", padding: '24px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
    <div>
      <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#333333', marginBottom: '16px' }}>Spacing Scale</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {SPACING_SCALE.map(({ token, value }) => (
          <div key={token} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '12px', color: '#888888', fontFamily: 'monospace', width: '100px', flexShrink: 0 }}>{token}</span>
            <div style={{ width: value, height: '24px', background: '#126DFF', borderRadius: '2px', minWidth: value === 0 ? '1px' : undefined, opacity: value === 0 ? 0.2 : 1 }} />
            <span style={{ fontSize: '13px', color: '#333333', fontWeight: 500 }}>{value}px</span>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#333333', marginBottom: '16px' }}>Layout Gutter</h2>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {GUTTER_SCALE.map(({ token, value, label }) => (
          <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: Math.max(value, 4), height: '48px', background: '#488FFF', borderRadius: '4px', opacity: value === 0 ? 0.2 : 1 }} />
            <span style={{ fontSize: '12px', color: '#888888', fontFamily: 'monospace' }}>{label}</span>
            <span style={{ fontSize: '13px', color: '#333333', fontWeight: 600 }}>{value}px</span>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#333333', marginBottom: '16px' }}>Component Gap</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1fr', gap: '8px', fontWeight: 600, fontSize: '12px', color: '#888888', padding: '0 0 4px' }}>
          <span>Size</span><span>X (수평)</span><span>Y (수직)</span>
        </div>
        {COMPONENT_GAP.map(({ size, x, y }) => (
          <div key={size} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1fr', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#333333' }}>{size}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: x, height: '20px', background: '#126DFF', borderRadius: '2px' }} />
              <span style={{ fontSize: '13px', color: '#333333' }}>{x}px</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: y, height: '20px', background: '#5C7EFF', borderRadius: '2px' }} />
              <span style={{ fontSize: '13px', color: '#333333' }}>{y}px</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#333333', marginBottom: '16px' }}>Border Radius</h2>
      <div style={{ display: 'flex', gap: '24px' }}>
        {RADIUS.map(({ token, value }) => (
          <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '80px', height: '80px', background: '#EEEEEE', border: '2px solid #126DFF', borderRadius: value }} />
            <span style={{ fontSize: '12px', color: '#888888', fontFamily: 'monospace' }}>{token}</span>
            <span style={{ fontSize: '13px', color: '#333333', fontWeight: 600 }}>{value}px</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const meta: Meta = {
  title: 'Foundation/Spacing',
  component: SpacingTokens,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSpacing: Story = {};
