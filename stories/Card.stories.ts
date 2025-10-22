import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from './Button';

const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Mobile-first card component for organizing content. Perfect for mobile app layouts with different elevation levels and padding options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: { type: 'select' },
      options: ['flat', 'elevated', 'high'],
      description: 'Card elevation style',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
      description: 'Card padding size',
    },
    bordered: {
      control: { type: 'boolean' },
      description: 'Show border',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'This is a subtitle',
    children: 'This is the card content. It can contain any React elements.',
  },
};

export const WithoutTitle: Story = {
  args: {
    children: 'Card without title or subtitle.',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Card with Actions',
    subtitle: 'This card includes action buttons',
    children: (
      <div className="space-y-4">
        <p>This card contains action buttons and other content.</p>
        <div className="flex space-x-2">
          <Button size="small" variant="primary" label="Action" />
          <Button size="small" variant="outline" label="Cancel" />
        </div>
      </div>
    ),
  },
};

export const Flat: Story = {
  args: {
    title: 'Flat Card',
    elevation: 'flat',
    children: 'This card has no shadow.',
  },
};

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    elevation: 'elevated',
    children: 'This card has medium elevation.',
  },
};

export const High: Story = {
  args: {
    title: 'High Elevation Card',
    elevation: 'high',
    children: 'This card has high elevation with strong shadow.',
  },
};

export const NoBorder: Story = {
  args: {
    title: 'No Border Card',
    bordered: false,
    children: 'This card has no border.',
  },
};

export const SmallPadding: Story = {
  args: {
    title: 'Small Padding',
    padding: 'small',
    children: 'This card has small padding.',
  },
};

export const LargePadding: Story = {
  args: {
    title: 'Large Padding',
    padding: 'large',
    children: 'This card has large padding.',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    subtitle: 'Tap to interact',
    children: 'This card can be clicked.',
    onClick: () => alert('Card clicked!'),
  },
};

export const AllElevations: Story = {
  render: () => (
    <div className="space-y-4">
      <Card title="Flat Card" elevation="flat" children="No shadow" />
      <Card title="Elevated Card" elevation="elevated" children="Medium shadow" />
      <Card title="High Card" elevation="high" children="Strong shadow" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All card elevation levels displayed together for comparison.',
      },
    },
  },
};
