import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DatePickerRange from '../../components/date-picker-range';
import '../../components/date-picker/index.scss';
import '../../components/date-picker-range/index.scss';

const meta: Meta<typeof DatePickerRange> = {
  title: 'Components/DatePickerRange',
  component: DatePickerRange,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    startValue: { control: 'text' },
    endValue: { control: 'text' },
    startPlaceholder: { control: 'text' },
    endPlaceholder: { control: 'text' },
  },
  args: {
    disabled: false,
    error: false,
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
    const [startValue, setStartValue] = useState('');
    const [endValue, setEndValue] = useState('');

    return (
      <div style={{ width: '320px', paddingBottom: '400px' }}>
        <DatePickerRange
          {...args}
          startValue={startValue}
          endValue={endValue}
          onChange={(start, end) => { setStartValue(start); setEndValue(end); }}
        />
        {(startValue || endValue) && (
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#888' }}>
            {startValue} ~ {endValue}
            <button
              type="button"
              style={{ marginLeft: '8px', fontSize: '11px', cursor: 'pointer' }}
              onClick={() => { setStartValue(''); setEndValue(''); }}
            >
              초기화
            </button>
          </p>
        )}
        <p style={{ marginTop: '4px', fontSize: '11px', color: '#aaa' }}>
          TIP: 첫 번째 클릭 = 시작일, 두 번째 클릭 = 종료일
        </p>
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// 상태별 (States)
// ---------------------------------------------------------------------------
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '320px', paddingBottom: '400px' }}>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>default</p>
        <DatePickerRange startPlaceholder="시작일" endPlaceholder="종료일" />
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '320px', padding: '24px', paddingBottom: '400px' }}>
      <DatePickerRange startPlaceholder="시작일" endPlaceholder="종료일" />
      <DatePickerRange startValue="2025-07-01" endValue="2025-07-16" />
      <DatePickerRange startValue="2025-07-01" endValue="2025-07-16" error />
      <DatePickerRange startPlaceholder="시작일" endPlaceholder="종료일" disabled />
    </div>
  ),
};
