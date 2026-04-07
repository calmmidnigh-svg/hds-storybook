import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Input from '../../components/input';
import '../../components/input/index.scss';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['text', 'number'],
    },
    isClearable: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    type: 'text',
    isClearable: false,
    disabled: false,
    error: false,
    placeholder: '플레이스 홀더',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// ---------------------------------------------------------------------------
// 기본 (Controlled)
// ---------------------------------------------------------------------------
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ width: '240px' }}>
        <Input
          {...args}
          value={value}
          onValueChange={(raw) => setValue(raw)}
          onClear={() => setValue('')}
        />
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// 상태별 (States)
// ---------------------------------------------------------------------------
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '240px' }}>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>default</p>
        <Input value="" placeholder="플레이스 홀더" onValueChange={() => {}} />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>filled</p>
        <Input value="텍스트가 들어갑니다" placeholder="플레이스 홀더" onValueChange={() => {}} />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>error</p>
        <Input value="텍스트가 들어갑니다" placeholder="플레이스 홀더" error onValueChange={() => {}} />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>disabled</p>
        <Input value="텍스트가 들어갑니다" placeholder="플레이스 홀더" disabled onValueChange={() => {}} />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>disabled (empty)</p>
        <Input value="" placeholder="플레이스 홀더" disabled onValueChange={() => {}} />
      </div>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// 아이콘 (Clear button = style: icon)
// ---------------------------------------------------------------------------
export const WithClearButton: Story = {
  render: () => {
    const [value, setValue] = useState('텍스트가 들어갑니다');
    const [errorValue, setErrorValue] = useState('텍스트가 들어갑니다');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '240px' }}>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>default + clearable</p>
          <Input
            value={value}
            isClearable
            placeholder="플레이스 홀더"
            onValueChange={(raw) => setValue(raw)}
            onClear={() => setValue('')}
          />
        </div>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>error + clearable</p>
          <Input
            value={errorValue}
            isClearable
            error
            placeholder="플레이스 홀더"
            onValueChange={(raw) => setErrorValue(raw)}
            onClear={() => setErrorValue('')}
          />
        </div>
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// 타입별 (Types)
// ---------------------------------------------------------------------------
export const Types: Story = {
  render: () => {
    const [textValue, setTextValue] = useState('');
    const [numberValue, setNumberValue] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '240px' }}>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>type: text</p>
          <Input
            type="text"
            value={textValue}
            placeholder="텍스트 입력"
            onValueChange={(raw) => setTextValue(raw)}
          />
        </div>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>type: number</p>
          <Input
            type="number"
            value={numberValue}
            placeholder="숫자 입력"
            onValueChange={(raw) => setNumberValue(raw)}
          />
        </div>
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// 전체 변형 (All Variants)
// ---------------------------------------------------------------------------
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      {/* Default style */}
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888', fontWeight: 600 }}>style: default</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '240px' }}>
          <Input value="" placeholder="플레이스 홀더" onValueChange={() => {}} />
          <Input value="텍스트가 들어갑니다" placeholder="플레이스 홀더" onValueChange={() => {}} />
          <Input value="텍스트가 들어갑니다" placeholder="플레이스 홀더" error onValueChange={() => {}} />
          <Input value="텍스트가 들어갑니다" placeholder="플레이스 홀더" disabled onValueChange={() => {}} />
        </div>
      </div>
      {/* Icon style */}
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888', fontWeight: 600 }}>style: icon (clearable)</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '240px' }}>
          <Input value="텍스트가 들어갑니다" isClearable placeholder="플레이스 홀더" onValueChange={() => {}} />
          <Input value="텍스트가 들어갑니다" isClearable error placeholder="플레이스 홀더" onValueChange={() => {}} />
          <Input value="텍스트가 들어갑니다" isClearable disabled placeholder="플레이스 홀더" onValueChange={() => {}} />
        </div>
      </div>
    </div>
  ),
};
