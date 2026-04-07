import type { Meta, StoryObj } from '@storybook/react';
import TextButton from '../../components/text-button';
import '../../components/text-button/index.scss';

const meta: Meta<typeof TextButton> = {
  title: 'Components/TextButton',
  component: TextButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['medium', 'small', 'xsmall'],
    },
    color: {
      control: 'radio',
      options: ['default', 'primary', 'danger'],
    },
    hoverStyle: {
      control: 'radio',
      options: ['background', 'underline'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    size: 'medium',
    color: 'default',
    hoverStyle: 'background',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof TextButton>;

// ---------------------------------------------------------------------------
// 기본
// ---------------------------------------------------------------------------
export const Default: Story = {
  args: { children: '텍스트 버튼' },
};

// ---------------------------------------------------------------------------
// Size
// ---------------------------------------------------------------------------
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px' }}>
      <TextButton size="medium">Medium</TextButton>
      <TextButton size="small">Small</TextButton>
      <TextButton size="xsmall">Xsmall</TextButton>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Color
// ---------------------------------------------------------------------------
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <TextButton color="default">Default</TextButton>
        <TextButton color="primary">Primary</TextButton>
        <TextButton color="danger">Danger</TextButton>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <TextButton color="default" disabled>Disabled</TextButton>
        <TextButton color="primary" disabled>Disabled</TextButton>
        <TextButton color="danger" disabled>Disabled</TextButton>
      </div>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Hover Style
// ---------------------------------------------------------------------------
export const HoverStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888' }}>hover: background</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <TextButton hoverStyle="background" color="default">Default</TextButton>
          <TextButton hoverStyle="background" color="primary">Primary</TextButton>
          <TextButton hoverStyle="background" color="danger">Danger</TextButton>
        </div>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888' }}>hover: underline</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <TextButton hoverStyle="underline" color="default">Default</TextButton>
          <TextButton hoverStyle="underline" color="primary">Primary</TextButton>
          <TextButton hoverStyle="underline" color="danger">Danger</TextButton>
        </div>
      </div>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// All Variants
// ---------------------------------------------------------------------------
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      {(['medium', 'small', 'xsmall'] as const).map(size => (
        <div key={size}>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888', textTransform: 'capitalize' }}>
            {size}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TextButton size={size} color="default">Default</TextButton>
            <TextButton size={size} color="primary">Primary</TextButton>
            <TextButton size={size} color="danger">Danger</TextButton>
            <TextButton size={size} color="default" disabled>Disabled</TextButton>
          </div>
        </div>
      ))}
    </div>
  ),
};
