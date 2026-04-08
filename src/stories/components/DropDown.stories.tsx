import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DropDown from '../../components/drop-down';
import '../../components/drop-down/index.scss';

const SAMPLE_OPTIONS = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
  { value: 'option4', label: '옵션 4 (비활성)', disabled: true },
  { value: 'option5', label: '옵션 5' },
];

const meta: Meta<typeof DropDown> = {
  title: 'Components/DropDown',
  component: DropDown,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['medium', 'small'],
    },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    size: 'medium',
    disabled: false,
    error: false,
    placeholder: '선택',
    options: SAMPLE_OPTIONS,
  },
};

export default meta;
type Story = StoryObj<typeof DropDown>;

// ---------------------------------------------------------------------------
// 기본 (Controlled)
// ---------------------------------------------------------------------------
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ width: '240px', paddingBottom: '220px' }}>
        <DropDown
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
  render: () => {
    const [value, setValue] = useState('option1');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '240px', paddingBottom: '220px' }}>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>default (미선택)</p>
          <DropDown options={SAMPLE_OPTIONS} value="" placeholder="선택" onValueChange={() => {}} />
        </div>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>filled (선택됨)</p>
          <DropDown options={SAMPLE_OPTIONS} value={value} onValueChange={setValue} />
        </div>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>error</p>
          <DropDown options={SAMPLE_OPTIONS} value="" error onValueChange={() => {}} />
        </div>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>disabled</p>
          <DropDown options={SAMPLE_OPTIONS} value="" disabled onValueChange={() => {}} />
        </div>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>disabled (선택됨)</p>
          <DropDown options={SAMPLE_OPTIONS} value="option2" disabled onValueChange={() => {}} />
        </div>
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// 크기 (Sizes)
// ---------------------------------------------------------------------------
export const Sizes: Story = {
  render: () => {
    const [mediumValue, setMediumValue] = useState('');
    const [smallValue, setSmallValue] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '220px' }}>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>size: medium (height 44px)</p>
          <div style={{ width: '240px' }}>
            <DropDown
              options={SAMPLE_OPTIONS}
              value={mediumValue}
              size="medium"
              placeholder="선택"
              onValueChange={setMediumValue}
            />
          </div>
        </div>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>size: small (height 36px)</p>
          <div style={{ width: '160px' }}>
            <DropDown
              options={SAMPLE_OPTIONS}
              value={smallValue}
              size="small"
              placeholder="선택"
              onValueChange={setSmallValue}
            />
          </div>
        </div>
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// 전체 변형 (AllVariants)
// ---------------------------------------------------------------------------
export const AllVariants: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', paddingBottom: '240px' }}>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888', fontWeight: 600 }}>medium</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '240px' }}>
            <DropDown options={SAMPLE_OPTIONS} value={value} placeholder="선택" onValueChange={setValue} />
            <DropDown options={SAMPLE_OPTIONS} value="option1" onValueChange={() => {}} />
            <DropDown options={SAMPLE_OPTIONS} value="" error placeholder="선택" onValueChange={() => {}} />
            <DropDown options={SAMPLE_OPTIONS} value="" disabled placeholder="선택" onValueChange={() => {}} />
          </div>
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888', fontWeight: 600 }}>small</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '160px' }}>
            <DropDown options={SAMPLE_OPTIONS} value={value} size="small" placeholder="선택" onValueChange={setValue} />
            <DropDown options={SAMPLE_OPTIONS} value="option2" size="small" onValueChange={() => {}} />
            <DropDown options={SAMPLE_OPTIONS} value="" size="small" error placeholder="선택" onValueChange={() => {}} />
            <DropDown options={SAMPLE_OPTIONS} value="" size="small" disabled placeholder="선택" onValueChange={() => {}} />
          </div>
        </div>
      </div>
    );
  },
};
