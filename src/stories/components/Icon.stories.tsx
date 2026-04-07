import type { Meta, StoryObj } from '@storybook/react';
import Icon from '../../components/icon';
import { iconMap } from '../../components/icon/icons';

const ICON_CATEGORIES = {
  'Navigation': [
    'chevron_left', 'chevron_right', 'chevron_up', 'chevron_down',
    'arrow_left', 'arrow_right', 'arrow_drop_down', 'arrow_drop_up', 'double_arrow',
  ],
  'Action': [
    'search', 'edit', 'trash', 'copy', 'save', 'upload', 'download', 'print',
    'plus_sign', 'plus_circle', 'remove', 'remove_circle',
    'close', 'close_small', 'change', 'eraser', 'pin', 'link', 'link_external',
    'show', 'hide',
  ],
  'Status': [
    'checked', 'checked_circle', 'cancled_circle', 'no_access_circle',
    'info_fill', 'info_circle', 'qustion_circle',
    'warning_report', 'cancled_report', 'info_report',
  ],
  'UI Controls': [
    'check_box', 'check_box_outline_blank', 'check_box_outline_fill',
    'radio_button_checked', 'radio_button_unchecked',
    'menu', 'more_vert', 'meatball', 'filter_list', 'tune_filter',
    'toggle', 'settings', 'notifications', 'fullscreen',
  ],
  'System': [
    'code', 'logout', 'pause', 'replay_left', 'replay_right',
    'rotate_right', 'swap_vert_default',
  ],
} as const;

type IconNameType = keyof typeof iconMap;

const meta: Meta<typeof Icon> = {
  title: 'Foundation/Icon',
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

export const Default: Story = {};

export const AllIcons: Story = {
  name: 'All Icons',
  render: () => (
    <div style={{ padding: '24px', fontFamily: 'Pretendard, sans-serif' }}>
      {Object.entries(ICON_CATEGORIES).map(([category, names]) => (
        <div key={category} style={{ marginBottom: '40px' }}>
          <h3 style={{
            fontSize: '13px',
            fontWeight: 600,
            color: '#888',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #eee',
          }}>
            {category}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {names.map(name => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 12px',
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  minWidth: '88px',
                  cursor: 'default',
                }}
              >
                <Icon name={name as IconNameType} size={24} color="#333" />
                <span style={{ fontSize: '11px', color: '#aaa', textAlign: 'center', wordBreak: 'break-all' }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px' }}>
      {[12, 16, 20, 24, 32].map(size => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon name="chevron_right" size={size} color="#333" />
          <span style={{ fontSize: '11px', color: '#888' }}>{size}px</span>
        </div>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px' }}>
      {[
        { color: '#126DFF', label: 'Primary' },
        { color: '#333333', label: 'Gray 900' },
        { color: '#AAAAAA', label: 'Gray 500' },
        { color: '#F04523', label: 'Error' },
        { color: '#31A552', label: 'Success' },
      ].map(({ color, label }) => (
        <div key={color} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon name="checked_circle" size={24} color={color} />
          <span style={{ fontSize: '11px', color: '#888' }}>{label}</span>
        </div>
      ))}
    </div>
  ),
};
