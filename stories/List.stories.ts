import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from './List';
import { Button } from './Button';

const meta: Meta<typeof List> = {
  title: 'Design System/List',
  component: List,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Mobile-first list component for organizing content. Perfect for mobile app navigation, settings, and data display.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    dividers: {
      control: { type: 'boolean' },
      description: 'Show dividers between items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Settings',
    children: (
      <>
        <ListItem>General Settings</ListItem>
        <ListItem>Privacy & Security</ListItem>
        <ListItem>Notifications</ListItem>
        <ListItem>Account</ListItem>
      </>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    title: 'Team Members',
    children: (
      <>
        <ListItem
          leftContent={<span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-medium text-sm">JD</span>}
          rightContent={<span className="text-green-600 text-sm font-medium">Active</span>}
        >
          <div>
            <div className="font-medium">John Doe</div>
            <div className="text-sm text-gray-500">john@example.com</div>
          </div>
        </ListItem>
        <ListItem
          leftContent={<span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-medium text-sm">JS</span>}
          rightContent={<span className="text-yellow-600 text-sm font-medium">Away</span>}
        >
          <div>
            <div className="font-medium">Jane Smith</div>
            <div className="text-sm text-gray-500">jane@example.com</div>
          </div>
        </ListItem>
        <ListItem
          leftContent={<span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-medium text-sm">BJ</span>}
          rightContent={<span className="text-red-600 text-sm font-medium">Offline</span>}
        >
          <div>
            <div className="font-medium">Bob Johnson</div>
            <div className="text-sm text-gray-500">bob@example.com</div>
          </div>
        </ListItem>
      </>
    ),
  },
};

export const Clickable: Story = {
  args: {
    title: 'Navigation',
    children: (
      <>
        <ListItem clickable onClick={() => alert('Home clicked!')}>
          <div className="flex items-center">
            <span className="mr-3">🏠</span>
            <span>Home</span>
          </div>
        </ListItem>
        <ListItem clickable onClick={() => alert('Profile clicked!')}>
          <div className="flex items-center">
            <span className="mr-3">👤</span>
            <span>Profile</span>
          </div>
        </ListItem>
        <ListItem clickable onClick={() => alert('Settings clicked!')}>
          <div className="flex items-center">
            <span className="mr-3">⚙️</span>
            <span>Settings</span>
          </div>
        </ListItem>
      </>
    ),
  },
};

export const WithActions: Story = {
  args: {
    title: 'Recent Files',
    children: (
      <>
        <ListItem
          rightContent={
            <Button size="small" variant="ghost" label="View" />
          }
        >
          <div>
            <div className="font-medium">Document.pdf</div>
            <div className="text-sm text-gray-500">Modified 2 hours ago</div>
          </div>
        </ListItem>
        <ListItem
          rightContent={
            <Button size="small" variant="ghost" label="Download" />
          }
        >
          <div>
            <div className="font-medium">Presentation.pptx</div>
            <div className="text-sm text-gray-500">Modified 1 day ago</div>
          </div>
        </ListItem>
        <ListItem
          rightContent={
            <Button size="small" variant="ghost" label="Share" />
          }
        >
          <div>
            <div className="font-medium">Spreadsheet.xlsx</div>
            <div className="text-sm text-gray-500">Modified 3 days ago</div>
          </div>
        </ListItem>
      </>
    ),
  },
};

export const WithoutDividers: Story = {
  args: {
    title: 'Quick Actions',
    dividers: false,
    children: (
      <>
        <ListItem>Create New Project</ListItem>
        <ListItem>Import Data</ListItem>
        <ListItem>Export Report</ListItem>
        <ListItem>Share Dashboard</ListItem>
      </>
    ),
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Project Overview',
    subtitle: 'Manage your projects and track progress',
    children: (
      <>
        <ListItem>
          <div>
            <div className="font-medium">Website Redesign</div>
            <div className="text-sm text-gray-500">Due in 3 days</div>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <div className="font-medium">Mobile App</div>
            <div className="text-sm text-gray-500">In progress</div>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <div className="font-medium">API Integration</div>
            <div className="text-sm text-gray-500">Completed</div>
          </div>
        </ListItem>
      </>
    ),
  },
};

export const ActivityFeed: Story = {
  args: {
    title: 'Activity Feed',
    children: (
      <>
        <ListItem
          leftContent={<span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium text-sm">JD</span>}
          rightContent={<span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">New</span>}
        >
          <div>
            <div className="font-medium">John commented on your post</div>
            <div className="text-sm text-gray-500">5 minutes ago</div>
          </div>
        </ListItem>
        <ListItem
          leftContent={<span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-medium text-sm">JS</span>}
          rightContent={<span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">Online</span>}
        >
          <div>
            <div className="font-medium">Jane shared a file</div>
            <div className="text-sm text-gray-500">1 hour ago</div>
          </div>
        </ListItem>
        <ListItem
          leftContent={<span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-medium text-sm">BJ</span>}
          rightContent={<span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs font-medium">Pending</span>}
        >
          <div>
            <div className="font-medium">Bob requested access</div>
            <div className="text-sm text-gray-500">2 hours ago</div>
          </div>
        </ListItem>
      </>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <List title="With Dividers" dividers>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
      
      <List title="Without Dividers" dividers={false}>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'List with and without dividers displayed together for comparison.',
      },
    },
  },
};
