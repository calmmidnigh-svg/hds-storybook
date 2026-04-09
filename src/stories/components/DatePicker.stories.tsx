import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DatePicker from '../../components/date-picker';
import '../../components/date-picker/index.scss';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    isOpen: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
  args: {
    disabled: false,
    error: false,
    isOpen: false,
    placeholder: 'yyyy-mm-dd',
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// ---------------------------------------------------------------------------
// 기본 (Controlled)
// ---------------------------------------------------------------------------
export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');

    return (
      <div style={{ width: '320px' }}>
        <DatePicker
          {...args}
          value={value}
          isOpen={isOpen}
          onOpen={() => {
            if (!args.disabled) {
              setIsOpen((prev) => !prev);
              if (!value) setValue('2025-07-16');
            }
          }}
        />
        {value && (
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#888' }}>
            선택된 날짜: <strong>{value}</strong>
            <button
              type="button"
              style={{ marginLeft: '8px', fontSize: '11px', cursor: 'pointer' }}
              onClick={() => { setValue(''); setIsOpen(false); }}
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
        <DatePicker placeholder="yyyy-mm-dd" />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>open</p>
        <DatePicker placeholder="yyyy-mm-dd" isOpen />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>filled</p>
        <DatePicker value="2025-07-16" />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>error</p>
        <DatePicker value="2025-07-16" error />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>disabled</p>
        <DatePicker placeholder="yyyy-mm-dd" disabled />
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
      <DatePicker placeholder="yyyy-mm-dd" />
      <DatePicker placeholder="yyyy-mm-dd" isOpen />
      <DatePicker value="2025-07-16" />
      <DatePicker value="2025-07-16" error />
      <DatePicker placeholder="yyyy-mm-dd" disabled />
    </div>
  ),
};
