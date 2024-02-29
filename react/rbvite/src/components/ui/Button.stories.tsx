import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import '../../index.css';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
};

export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: 'primary',
    children: 'Sign In',
  },
};

export const Danger: StoryObj<typeof Button> = {
  args: {
    variant: 'danger',
  },
  render: (args) => <Button {...args}>Remove</Button>,
};

export const Others: StoryObj<typeof Button> = {
  render: () => (
    <div className='border'>
      <Button variant='primary' className='p-5' style={{ color: 'yellow' }}>
        Primary
      </Button>
      <Button variant='default' className='p-5'>
        Default
      </Button>
      <Button variant='danger' onClick={() => alert('danger')} className='p-5'>
        Danger
      </Button>
    </div>
  ),
};

export default meta;
