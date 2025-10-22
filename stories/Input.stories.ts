import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Design System/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Mobile-first input component for forms. Optimized for touch interactions with proper sizing and validation states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Input type',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Input size',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the input',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Mark as required',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    helperText: 'Must be at least 8 characters long',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
    error: 'Please enter a valid email address',
  },
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'large',
  },
};

export const Number: Story = {
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    type: 'number',
  },
};

export const Phone: Story = {
  args: {
    label: 'Phone Number',
    placeholder: '+1 (555) 123-4567',
    type: 'tel',
  },
};

export const URL: Story = {
  args: {
    label: 'Website',
    placeholder: 'https://example.com',
    type: 'url',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Input label="Small" size="small" placeholder="Small input" />
      <Input label="Medium" size="medium" placeholder="Medium input" />
      <Input label="Large" size="large" placeholder="Large input" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All input sizes displayed together for comparison.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4">
      <Input label="Normal" placeholder="Normal state" />
      <Input label="With Helper" placeholder="With helper text" helperText="This is helper text" />
      <Input label="With Error" placeholder="With error" error="This is an error message" />
      <Input label="Required" placeholder="Required field" required />
      <Input label="Disabled" placeholder="Disabled input" disabled />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All input states displayed together for comparison.',
      },
    },
  },
};
