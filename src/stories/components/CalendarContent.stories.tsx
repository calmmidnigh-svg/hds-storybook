import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CalendarContent from '../../components/calendar-content';
import '../../components/calendar-content/index.scss';

const meta: Meta<typeof CalendarContent> = {
  title: 'Components/CalendarContent',
  component: CalendarContent,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['default', 'daypicker', 'range'],
    },
    value: { control: 'text' },
    startValue: { control: 'text' },
    endValue: { control: 'text' },
  },
  args: {
    mode: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof CalendarContent>;

// ---------------------------------------------------------------------------
// state=default — 단일 날짜 선택
// ---------------------------------------------------------------------------
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ padding: '24px' }}>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888' }}>
          state=default — 단일 날짜 선택
        </p>
        <CalendarContent
          {...args}
          mode="default"
          value={value}
          onChange={setValue}
        />
        {value && (
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#888' }}>
            선택: <strong>{value}</strong>
            <button
              type="button"
              style={{ marginLeft: '8px', fontSize: '11px', cursor: 'pointer' }}
              onClick={() => setValue('')}
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
// state=daypicker — 요일 선택 (단일 선택과 동일 레이아웃, 별도 mode)
// ---------------------------------------------------------------------------
export const Daypicker: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ padding: '24px' }}>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888' }}>
          state=daypicker — 요일/날짜 선택
        </p>
        <CalendarContent
          {...args}
          mode="daypicker"
          value={value}
          onChange={setValue}
        />
        {value && (
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#888' }}>
            선택: <strong>{value}</strong>
            <button
              type="button"
              style={{ marginLeft: '8px', fontSize: '11px', cursor: 'pointer' }}
              onClick={() => setValue('')}
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
// state=range — 날짜 범위 선택
// ---------------------------------------------------------------------------
export const Range: Story = {
  render: (args) => {
    const [startValue, setStartValue] = useState('');
    const [endValue, setEndValue] = useState('');

    return (
      <div style={{ padding: '24px' }}>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888' }}>
          state=range — 날짜 범위 선택 (첫 클릭 = 시작일, 두 번째 클릭 = 종료일)
        </p>
        <CalendarContent
          {...args}
          mode="range"
          startValue={startValue}
          endValue={endValue}
          onRangeChange={(start, end) => {
            setStartValue(start);
            setEndValue(end);
          }}
        />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#888' }}>
          <p>시작일: <strong>{startValue || '미선택'}</strong></p>
          <p>종료일: <strong>{endValue || '미선택'}</strong></p>
          {(startValue || endValue) && (
            <button
              type="button"
              style={{ marginTop: '4px', fontSize: '11px', cursor: 'pointer' }}
              onClick={() => { setStartValue(''); setEndValue(''); }}
            >
              초기화
            </button>
          )}
        </div>
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// AllVariants — 3가지 state 나란히
// ---------------------------------------------------------------------------
export const AllVariants: Story = {
  render: () => {
    const [defaultValue, setDefaultValue] = useState('2025-07-16');
    const [daypickerValue, setDaypickerValue] = useState('2025-07-09');
    const [startValue, setStartValue] = useState('2025-07-01');
    const [endValue, setEndValue] = useState('2025-07-16');

    return (
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: '24px' }}>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888', fontWeight: 600 }}>
            state=default
          </p>
          <CalendarContent
            mode="default"
            value={defaultValue}
            onChange={setDefaultValue}
          />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888', fontWeight: 600 }}>
            state=daypicker
          </p>
          <CalendarContent
            mode="daypicker"
            value={daypickerValue}
            onChange={setDaypickerValue}
          />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888', fontWeight: 600 }}>
            state=range
          </p>
          <CalendarContent
            mode="range"
            startValue={startValue}
            endValue={endValue}
            onRangeChange={(start, end) => {
              setStartValue(start);
              setEndValue(end);
            }}
          />
        </div>
      </div>
    );
  },
};
