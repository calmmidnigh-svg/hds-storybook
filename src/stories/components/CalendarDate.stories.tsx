import type { Meta, StoryObj } from '@storybook/react';
import CalendarDate from '../../components/calendar-date';
import '../../components/calendar-date/index.scss';
import type { BadgeItemType } from '../../components/calendar-date/types';

const meta: Meta<typeof CalendarDate> = {
  title: 'Components/CalendarDate',
  component: CalendarDate,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['disabled', 'default', 'start', 'middle', 'end'],
    },
    date: { control: 'number' },
    isToday: { control: 'boolean' },
  },
  args: {
    state: 'default',
    date: 16,
    isToday: false,
  },
};

export default meta;
type Story = StoryObj<typeof CalendarDate>;

const sampleEvents: BadgeItemType[] = [
  { text: '팀 미팅', color: 'blue' },
  { text: '제품 리뷰', color: 'green' },
  { text: '스프린트 종료', color: 'orange' },
];

const manyEvents: BadgeItemType[] = [
  { text: '팀 미팅', color: 'blue' },
  { text: '제품 리뷰', color: 'green' },
  { text: '스프린트 종료', color: 'orange' },
  { text: '추가 일정', color: 'purple' },
];

// ---------------------------------------------------------------------------
// state=default
// ---------------------------------------------------------------------------
export const Default: Story = {
  args: {
    state: 'default',
    date: 16,
    events: sampleEvents,
  },
};

// ---------------------------------------------------------------------------
// state=disabled
// ---------------------------------------------------------------------------
export const Disabled: Story = {
  args: {
    state: 'disabled',
    date: 16,
    events: sampleEvents,
  },
};

// ---------------------------------------------------------------------------
// state=start
// ---------------------------------------------------------------------------
export const Start: Story = {
  args: {
    state: 'start',
    date: 14,
    events: sampleEvents,
  },
};

// ---------------------------------------------------------------------------
// state=middle
// ---------------------------------------------------------------------------
export const Middle: Story = {
  args: {
    state: 'middle',
    date: 15,
    events: sampleEvents,
  },
};

// ---------------------------------------------------------------------------
// state=end
// ---------------------------------------------------------------------------
export const End: Story = {
  args: {
    state: 'end',
    date: 16,
    events: sampleEvents,
  },
};

// ---------------------------------------------------------------------------
// Today 표시
// ---------------------------------------------------------------------------
export const Today: Story = {
  args: {
    state: 'default',
    date: 16,
    isToday: true,
    events: sampleEvents,
  },
};

// ---------------------------------------------------------------------------
// 이벤트 초과 (+N 표시)
// ---------------------------------------------------------------------------
export const Overflow: Story = {
  args: {
    state: 'default',
    date: 16,
    events: manyEvents,
  },
};

// ---------------------------------------------------------------------------
// AllVariants — 5가지 상태 나란히
// ---------------------------------------------------------------------------
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0', flexWrap: 'wrap', padding: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <p style={{ fontSize: '11px', color: '#888', margin: 0 }}>disabled</p>
        <CalendarDate state="disabled" date={14} events={sampleEvents} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <p style={{ fontSize: '11px', color: '#888', margin: 0 }}>default</p>
        <CalendarDate state="default" date={15} events={sampleEvents} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <p style={{ fontSize: '11px', color: '#888', margin: 0 }}>start</p>
        <CalendarDate state="start" date={16} events={sampleEvents} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <p style={{ fontSize: '11px', color: '#888', margin: 0 }}>middle</p>
        <CalendarDate state="middle" date={17} events={sampleEvents} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <p style={{ fontSize: '11px', color: '#888', margin: 0 }}>end</p>
        <CalendarDate state="end" date={18} events={sampleEvents} />
      </div>
    </div>
  ),
};
