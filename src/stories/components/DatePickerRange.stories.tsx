import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DatePickerRange from '../../components/date-picker-range';
import '../../components/date-picker-range/index.scss';

const meta: Meta<typeof DatePickerRange> = {
  title: 'Components/DatePickerRange',
  component: DatePickerRange,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    isOpen: { control: 'boolean' },
    startValue: { control: 'text' },
    endValue: { control: 'text' },
    startPlaceholder: { control: 'text' },
    endPlaceholder: { control: 'text' },
  },
  args: {
    disabled: false,
    error: false,
    isOpen: false,
    startPlaceholder: '시작일',
    endPlaceholder: '종료일',
  },
};

export default meta;
type Story = StoryObj<typeof DatePickerRange>;

// ---------------------------------------------------------------------------
// 기본 (Controlled)
// ---------------------------------------------------------------------------
export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [startValue, setStartValue] = useState('');
    const [endValue, setEndValue] = useState('');

    return (
      <div style={{ width: '320px' }}>
        <DatePickerRange
          {...args}
          startValue={startValue}
          endValue={endValue}
          isOpen={isOpen}
          onOpen={() => {
            if (!args.disabled) {
              setIsOpen((prev) => !prev);
              if (!startValue) {
                setStartValue('2025-07-01');
                setEndValue('2025-07-16');
              }
            }
          }}
        />
        {(startValue || endValue) && (
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#888' }}>
            {startValue} ~ {endValue}
            <button
              type="button"
              style={{ marginLeft: '8px', fontSize: '11px', cursor: 'pointer' }}
              onClick={() => { setStartValue(''); setEndValue(''); setIsOpen(false); }}
            >
              초기화
            </button>
          </p>
        )}
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// 상태별 (States)
// ---------------------------------------------------------------------------
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '320px' }}>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>default</p>
        <DatePickerRange startPlaceholder="시작일" endPlaceholder="종료일" />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>open</p>
        <DatePickerRange startPlaceholder="시작일" endPlaceholder="종료일" isOpen />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>filled</p>
        <DatePickerRange startValue="2025-07-01" endValue="2025-07-16" />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>error</p>
        <DatePickerRange startValue="2025-07-01" endValue="2025-07-16" error />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>disabled</p>
        <DatePickerRange startPlaceholder="시작일" endPlaceholder="종료일" disabled />
      </div>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// 전체 변형 (AllVariants)
// ---------------------------------------------------------------------------
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '320px', padding: '24px' }}>
      <DatePickerRange startPlaceholder="시작일" endPlaceholder="종료일" />
      <DatePickerRange startPlaceholder="시작일" endPlaceholder="종료일" isOpen />
      <DatePickerRange startValue="2025-07-01" endValue="2025-07-16" />
      <DatePickerRange startValue="2025-07-01" endValue="2025-07-16" error />
      <DatePickerRange startPlaceholder="시작일" endPlaceholder="종료일" disabled />
    </div>
  ),
};
