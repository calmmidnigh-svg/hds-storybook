import type { Meta, StoryObj } from '@storybook/react';
import Typography from '../../components/typography';

const TYPOGRAPHY_SCALE = [
  { variant: 'd1' as const, label: 'Display 1', size: '40px', weight: '500' },
  { variant: 'd2' as const, label: 'Display 2', size: '36px', weight: '500' },
  { variant: 'd3' as const, label: 'Display 3', size: '32px', weight: '500' },
  { variant: 'h1' as const, label: 'Heading 1', size: '24px', weight: '600' },
  { variant: 'h2' as const, label: 'Heading 2', size: '20px', weight: '600' },
  { variant: 'h3' as const, label: 'Heading 3', size: '16px', weight: '600' },
  { variant: 'h4' as const, label: 'Heading 4', size: '14px', weight: '600' },
  { variant: 'b1' as const, label: 'Body 1',    size: '16px', weight: '500' },
  { variant: 'b2' as const, label: 'Body 2',    size: '14px', weight: '500' },
  { variant: 'detail1' as const, label: 'Detail 1', size: '13px', weight: '400' },
  { variant: 'detail2' as const, label: 'Detail 2', size: '12px', weight: '400' },
  { variant: 'detail3' as const, label: 'Detail 3', size: '12px', weight: '400' },
];

const TypographyScale = () => (
  <div style={{ fontFamily: "'Pretendard', sans-serif", padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '120px 80px 60px 1fr',
      gap: '8px',
      fontSize: '12px',
      fontWeight: 600,
      color: '#AAAAAA',
      padding: '0 0 8px',
      borderBottom: '1px solid #EEEEEE',
      marginBottom: '8px',
    }}>
      <span>Token</span>
      <span>Size</span>
      <span>Weight</span>
      <span>Sample</span>
    </div>

    {TYPOGRAPHY_SCALE.map(({ variant, label, size, weight }) => (
      <div key={variant} style={{
        display: 'grid',
        gridTemplateColumns: '120px 80px 60px 1fr',
        gap: '8px',
        alignItems: 'center',
        padding: '8px 0',
        borderBottom: '1px solid #F5F5F5',
      }}>
        <span style={{ fontSize: '12px', color: '#888888', fontFamily: 'monospace' }}>{label}</span>
        <span style={{ fontSize: '12px', color: '#666666' }}>{size}</span>
        <span style={{ fontSize: '12px', color: '#666666' }}>{weight}</span>
        <Typography variant={variant}>
          가나다라마바사 ABC 123
        </Typography>
      </div>
    ))}
  </div>
);

const meta: Meta = {
  title: 'Foundation/Typography',
  component: TypographyScale,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};

export const DisplayVariants: Story = {
  render: () => (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="d1">Display 1 — 40px / 500</Typography>
      <Typography variant="d2">Display 2 — 36px / 500</Typography>
      <Typography variant="d3">Display 3 — 32px / 500</Typography>
    </div>
  ),
};

export const HeadingVariants: Story = {
  render: () => (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="h1">Heading 1 — 24px / 600</Typography>
      <Typography variant="h2">Heading 2 — 20px / 600</Typography>
      <Typography variant="h3">Heading 3 — 16px / 600</Typography>
      <Typography variant="h4">Heading 4 — 14px / 600</Typography>
    </div>
  ),
};

export const BodyVariants: Story = {
  render: () => (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="b1">Body 1 — 16px / 500 — 헬로인사 디자인 시스템 본문 텍스트 샘플입니다.</Typography>
      <Typography variant="b2">Body 2 — 14px / 500 — 헬로인사 디자인 시스템 본문 텍스트 샘플입니다.</Typography>
    </div>
  ),
};
