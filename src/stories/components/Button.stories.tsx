import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../components/button';
import '../../components/button/index.scss';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger', 'danger-light', 'light'],
    },
    variant: {
      control: 'radio',
      options: ['solid', 'outline'],
    },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    size: 'small',
    color: 'primary',
    variant: 'solid',
    disabled: false,
    fullWidth: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ---------------------------------------------------------------------------
// 기본
// ---------------------------------------------------------------------------
export const Default: Story = {
  args: {
    children: '버튼',
  },
};

// ---------------------------------------------------------------------------
// Size
// ---------------------------------------------------------------------------
export const Sizes: Story = {
  render: () => (
    <Button.Group gap="md" placement="start">
      <Button size="small" color="primary">Small</Button>
      <Button size="medium" color="primary">Medium</Button>
    </Button.Group>
  ),
};

// ---------------------------------------------------------------------------
// Color × Solid
// ---------------------------------------------------------------------------
export const SolidColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      <Button.Group gap="sm">
        <Button color="primary" variant="solid">Primary</Button>
        <Button color="secondary" variant="solid">Secondary</Button>
        <Button color="tertiary" variant="solid">Tertiary</Button>
        <Button color="light" variant="solid">Light</Button>
      </Button.Group>
      <Button.Group gap="sm">
        <Button color="danger" variant="solid">Danger</Button>
        <Button color="danger-light" variant="solid">Danger Light</Button>
      </Button.Group>
      <Button.Group gap="sm">
        <Button color="primary" variant="solid" disabled>Disabled</Button>
      </Button.Group>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Color × Outline
// ---------------------------------------------------------------------------
export const OutlineColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      <Button.Group gap="sm">
        <Button color="primary" variant="outline">Primary</Button>
        <Button color="secondary" variant="outline">Secondary</Button>
        <Button color="tertiary" variant="outline">Tertiary</Button>
        <Button color="light" variant="outline">Light</Button>
      </Button.Group>
      <Button.Group gap="sm">
        <Button color="danger" variant="outline">Danger</Button>
        <Button color="danger-light" variant="outline">Danger Light</Button>
      </Button.Group>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Medium Size
// ---------------------------------------------------------------------------
export const MediumSolidColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      <Button.Group gap="sm">
        <Button size="medium" color="primary" variant="solid">Primary</Button>
        <Button size="medium" color="secondary" variant="solid">Secondary</Button>
        <Button size="medium" color="tertiary" variant="solid">Tertiary</Button>
        <Button size="medium" color="light" variant="solid">Light</Button>
      </Button.Group>
      <Button.Group gap="sm">
        <Button size="medium" color="danger" variant="solid">Danger</Button>
        <Button size="medium" color="danger-light" variant="solid">Danger Light</Button>
      </Button.Group>
      <Button.Group gap="sm">
        <Button size="medium" color="primary" variant="solid" disabled>Disabled</Button>
      </Button.Group>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Full Width
// ---------------------------------------------------------------------------
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '320px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Button color="primary" fullWidth>Full Width Primary</Button>
      <Button color="secondary" variant="outline" fullWidth>Full Width Outline</Button>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Button Group
// ---------------------------------------------------------------------------
export const Groups: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <Button.Group gap="sm" placement="end">
        <Button color="secondary" variant="outline">취소</Button>
        <Button color="primary">확인</Button>
      </Button.Group>
      <Button.Group gap="sm" placement="between">
        <Button color="light" variant="solid">이전</Button>
        <Button color="primary">다음</Button>
      </Button.Group>
      <Button.Group direction="column" gap="sm">
        <Button color="primary" fullWidth>저장</Button>
        <Button color="secondary" variant="outline" fullWidth>취소</Button>
      </Button.Group>
    </div>
  ),
};
