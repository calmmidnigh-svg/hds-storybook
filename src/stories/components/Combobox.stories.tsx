import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Combobox from '../../components/combobox';
import '../../components/combobox/index.scss';

const SAMPLE_OPTIONS = [
  { value: 'seoul', label: '서울특별시' },
  { value: 'busan', label: '부산광역시' },
  { value: 'incheon', label: '인천광역시' },
  { value: 'daegu', label: '대구광역시' },
  { value: 'daejeon', label: '대전광역시' },
  { value: 'gwangju', label: '광주광역시' },
  { value: 'ulsan', label: '울산광역시' },
  { value: 'sejong', label: '세종특별자치시', disabled: true },
  { value: 'gyeonggi', label: '경기도' },
  { value: 'gangwon', label: '강원도' },
];

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    disabled: false,
    error: false,
    placeholder: '입력 또는 선택',
    options: SAMPLE_OPTIONS,
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

// ---------------------------------------------------------------------------
// 기본 (Controlled)
// ---------------------------------------------------------------------------
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ width: '280px', paddingBottom: '240px' }}>
        <Combobox
          {...args}
          value={value}
          onValueChange={setValue}
        />
        {value && (
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#888' }}>
            선택된 값: <strong>{value}</strong>
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
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '280px', paddingBottom: '240px' }}>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>default (미선택)</p>
          <Combobox options={SAMPLE_OPTIONS} value="" onValueChange={() => {}} />
        </div>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>filled (선택됨)</p>
          <Combobox options={SAMPLE_OPTIONS} value={value || 'seoul'} onValueChange={setValue} />
        </div>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>error</p>
          <Combobox options={SAMPLE_OPTIONS} value="" error onValueChange={() => {}} />
        </div>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>disabled</p>
          <Combobox options={SAMPLE_OPTIONS} value="" disabled onValueChange={() => {}} />
        </div>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>disabled (filled)</p>
          <Combobox options={SAMPLE_OPTIONS} value="busan" disabled onValueChange={() => {}} />
        </div>
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// 실시간 검색 필터링 (Search)
// ---------------------------------------------------------------------------
export const SearchFilter: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div style={{ width: '280px', paddingBottom: '240px' }}>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888' }}>
          입력창에 검색어를 입력하면 목록이 필터링됩니다
        </p>
        <Combobox
          options={SAMPLE_OPTIONS}
          value={value}
          placeholder="지역을 입력 또는 선택하세요"
          onValueChange={setValue}
        />
        <div style={{ marginTop: '12px', fontSize: '12px', color: '#888' }}>
          <p>선택된 값: <strong style={{ color: '#333' }}>{value || '없음'}</strong></p>
          <p style={{ marginTop: '4px' }}>TIP: "광" 입력 시 광역시 필터링, "경" 입력 시 경기도 표시</p>
        </div>
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// 키보드 내비게이션 (Keyboard)
// ---------------------------------------------------------------------------
export const KeyboardNavigation: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div style={{ width: '280px', paddingBottom: '240px' }}>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888' }}>
          키보드 단축키 안내
        </p>
        <Combobox
          options={SAMPLE_OPTIONS}
          value={value}
          onValueChange={setValue}
        />
        <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px', color: '#888' }}>
          <p>↑ / ↓ — 옵션 이동</p>
          <p>Enter — 선택 확정</p>
          <p>Escape — 목록 닫기</p>
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
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888', fontWeight: 600 }}>상태별</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '280px' }}>
            <Combobox options={SAMPLE_OPTIONS} value={value} placeholder="입력 또는 선택" onValueChange={setValue} />
            <Combobox options={SAMPLE_OPTIONS} value="seoul" onValueChange={() => {}} />
            <Combobox options={SAMPLE_OPTIONS} value="" error placeholder="입력 또는 선택" onValueChange={() => {}} />
            <Combobox options={SAMPLE_OPTIONS} value="" disabled placeholder="입력 또는 선택" onValueChange={() => {}} />
          </div>
        </div>
      </div>
    );
  },
};
