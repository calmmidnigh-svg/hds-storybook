import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ComboboxMulti from '../../components/combobox-multi';
import '../../components/combobox-multi/index.scss';

const SAMPLE_OPTIONS = [
  { value: 'design', label: '디자인' },
  { value: 'develop', label: '개발' },
  { value: 'plan', label: '기획' },
  { value: 'marketing', label: '마케팅' },
  { value: 'sales', label: '영업' },
  { value: 'hr', label: '인사' },
  { value: 'finance', label: '재무' },
  { value: 'cs', label: '고객지원', disabled: true },
  { value: 'legal', label: '법무' },
  { value: 'qa', label: '품질관리' },
];

const meta: Meta<typeof ComboboxMulti> = {
  title: 'Components/ComboboxMulti',
  component: ComboboxMulti,
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
type Story = StoryObj<typeof ComboboxMulti>;

// ---------------------------------------------------------------------------
// 기본 (Controlled)
// ---------------------------------------------------------------------------
export const Default: Story = {
  render: (args) => {
    const [values, setValues] = useState<string[]>([]);

    return (
      <div style={{ width: '320px', paddingBottom: '320px' }}>
        <ComboboxMulti
          {...args}
          values={values}
          onValuesChange={setValues}
        />
        {values.length > 0 && (
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#888' }}>
            선택된 값: <strong>{values.join(', ')}</strong>
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
    const [values, setValues] = useState<string[]>([]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '320px', paddingBottom: '320px' }}>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>default (미선택)</p>
          <ComboboxMulti options={SAMPLE_OPTIONS} values={[]} onValuesChange={() => {}} />
        </div>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>filled (다중 선택됨)</p>
          <ComboboxMulti
            options={SAMPLE_OPTIONS}
            values={values.length > 0 ? values : ['design', 'develop', 'plan']}
            onValuesChange={setValues}
          />
        </div>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>error</p>
          <ComboboxMulti options={SAMPLE_OPTIONS} values={[]} error onValuesChange={() => {}} />
        </div>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>disabled</p>
          <ComboboxMulti options={SAMPLE_OPTIONS} values={[]} disabled onValuesChange={() => {}} />
        </div>
        <div>
          <p style={{ marginBottom: '6px', fontSize: '12px', color: '#888' }}>disabled (filled)</p>
          <ComboboxMulti options={SAMPLE_OPTIONS} values={['design', 'develop']} disabled onValuesChange={() => {}} />
        </div>
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// 검색 필터링 (Search)
// ---------------------------------------------------------------------------
export const SearchFilter: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([]);

    return (
      <div style={{ width: '320px', paddingBottom: '320px' }}>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888' }}>
          입력창에 검색어를 입력하면 옵션이 필터링됩니다
        </p>
        <ComboboxMulti
          options={SAMPLE_OPTIONS}
          values={values}
          placeholder="부서를 검색하세요"
          onValuesChange={setValues}
        />
        <div style={{ marginTop: '12px', fontSize: '12px', color: '#888' }}>
          <p>선택: <strong style={{ color: '#333' }}>{values.length > 0 ? values.join(', ') : '없음'}</strong></p>
          <p style={{ marginTop: '4px' }}>TIP: Backspace로 마지막 선택 제거 가능</p>
        </div>
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// 많은 선택 (Many Selections)
// ---------------------------------------------------------------------------
export const ManySelections: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([
      'design', 'develop', 'plan', 'marketing', 'sales', 'hr', 'finance',
    ]);

    return (
      <div style={{ width: '320px', paddingBottom: '320px' }}>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888' }}>
          7개 항목이 선택된 상태 — badge wrap 확인
        </p>
        <ComboboxMulti
          options={SAMPLE_OPTIONS}
          values={values}
          onValuesChange={setValues}
        />
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// 전체 변형 (AllVariants)
// ---------------------------------------------------------------------------
export const AllVariants: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', paddingBottom: '320px' }}>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#888', fontWeight: 600 }}>상태별</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '320px' }}>
            <ComboboxMulti options={SAMPLE_OPTIONS} values={values} placeholder="입력 또는 선택" onValuesChange={setValues} />
            <ComboboxMulti options={SAMPLE_OPTIONS} values={['design', 'develop', 'plan']} onValuesChange={() => {}} />
            <ComboboxMulti options={SAMPLE_OPTIONS} values={[]} error placeholder="입력 또는 선택" onValuesChange={() => {}} />
            <ComboboxMulti options={SAMPLE_OPTIONS} values={['design']} disabled onValuesChange={() => {}} />
          </div>
        </div>
      </div>
    );
  },
};
