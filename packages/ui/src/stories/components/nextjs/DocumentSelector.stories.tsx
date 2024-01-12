import { Meta, StoryObj } from '@storybook/react';
import DocumentSelector from 'nextjs-app/src/modules/global/document-selector';

const meta = {
  title: 'Nextjs/DocumentSelector',
  component: DocumentSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DocumentSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render() {
    return <DocumentSelector />;
  },
};
