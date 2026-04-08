import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import TextArea from '../../components/text-area';
import '../../components/text-area/index.scss';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    placeholder: { control: 'text' },
    maxLength: { control: 'number' },
    rows: { control: 'number' },
  },
  args: {
    disabled: false,
    error: false,
    placeholder: '내용을 입력하세요',
    rows: 5,
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

// ---------------------------------------------------------------------------
// 기본 (Controlled)
// ---------------------------------------------------------------------------
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ width: '560px' }}>
        <TextArea
          {...args}
          value={value}
          onValueChange={setValue}
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '560px' }}>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>default</p>
        <TextArea value="" placeholder="내용을 입력하세요" onValueChange={() => {}} />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>filled</p>
        <TextArea value="입력된 텍스트가 이 영역에 표시됩니다." placeholder="내용을 입력하세요" onValueChange={() => {}} />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>error</p>
        <TextArea value="잘못된 형식의 내용입니다." placeholder="내용을 입력하세요" error onValueChange={() => {}} />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>disabled</p>
        <TextArea value="" placeholder="내용을 입력하세요" disabled onValueChange={() => {}} />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>disabled (filled)</p>
        <TextArea value="비활성 상태의 텍스트입니다." placeholder="내용을 입력하세요" disabled onValueChange={() => {}} />
      </div>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// 글자 수 제한 (Max Length)
// ---------------------------------------------------------------------------
export const WithMaxLength: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [errorValue, setErrorValue] = useState('에러 상태에서도 글자 수가 표시됩니다.');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '560px' }}>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>maxLength: 200</p>
          <TextArea
            value={value}
            placeholder="최대 200자까지 입력 가능합니다"
            maxLength={200}
            onValueChange={setValue}
          />
        </div>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>maxLength + error</p>
          <TextArea
            value={errorValue}
            placeholder="내용을 입력하세요"
            maxLength={200}
            error
            onValueChange={setErrorValue}
          />
        </div>
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// 행 수 (Rows)
// ---------------------------------------------------------------------------
export const Rows: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '560px' }}>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>rows: 3 (compact)</p>
        <TextArea value="" placeholder="내용을 입력하세요" rows={3} onValueChange={() => {}} />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>rows: 5 (default)</p>
        <TextArea value="" placeholder="내용을 입력하세요" rows={5} onValueChange={() => {}} />
      </div>
      <div>
        <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>rows: 8 (large)</p>
        <TextArea value="" placeholder="내용을 입력하세요" rows={8} onValueChange={() => {}} />
      </div>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// 전체 변형 (All Variants)
// ---------------------------------------------------------------------------
export const AllVariants: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', width: '560px' }}>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888', fontWeight: 600 }}>기본</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <TextArea value="" placeholder="내용을 입력하세요" onValueChange={() => {}} />
            <TextArea value="입력된 텍스트입니다." placeholder="내용을 입력하세요" onValueChange={() => {}} />
            <TextArea value="에러 상태 텍스트입니다." placeholder="내용을 입력하세요" error onValueChange={() => {}} />
            <TextArea value="" placeholder="내용을 입력하세요" disabled onValueChange={() => {}} />
          </div>
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888', fontWeight: 600 }}>글자 수 제한 포함</p>
          <TextArea
            value={value}
            placeholder="최대 300자까지 입력 가능합니다"
            maxLength={300}
            onValueChange={setValue}
          />
        </div>
      </div>
    );
  },
};
