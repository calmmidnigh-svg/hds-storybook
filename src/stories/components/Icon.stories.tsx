import type { Meta, StoryObj } from '@storybook/react';
import Icon from '../../components/icon';
import { iconMap } from '../../components/icon/icons';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(iconMap),
    },
    size: { control: 'number' },
    color: { control: 'color' },
  },
  args: {
    name: 'chevron_right',
    size: 24,
    color: 'currentColor',
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// ---------------------------------------------------------------------------
// 기본
// ---------------------------------------------------------------------------
export const Default: Story = {};

// ---------------------------------------------------------------------------
// 전체 아이콘 목록
// ---------------------------------------------------------------------------
export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', padding: '24px' }}>
      {(Object.keys(iconMap) as Array<keyof typeof iconMap>).map(name => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            padding: '16px',
            border: '1px solid #eee',
            borderRadius: '8px',
            minWidth: '80px',
          }}
        >
          <Icon name={name} size={24} color="#333" />
          <span style={{ fontSize: '11px', color: '#888', textAlign: 'center' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

// ---------------------------------------------------------------------------
// 사이즈
// ---------------------------------------------------------------------------
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px' }}>
      {[12, 16, 20, 24, 32].map(size => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon name="chevron_right" size={size} color="#333" />
          <span style={{ fontSize: '11px', color: '#888' }}>{size}px</span>
        </div>
      ))}
    </div>
  ),
};
