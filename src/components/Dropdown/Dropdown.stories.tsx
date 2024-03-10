import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown.tsx';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'selected' }, 
    disabled: { control: 'boolean' }, 
    backgroundColor: { control: 'color' }, 
  },
} as Meta;

export const Default: Story<DropdownProps> = (args) => (
  <Dropdown 
    onClick={() => console.log('Dropdown clicked')} 
    {...args} // Pass all args including backgroundColor
  />
);

Default.args = {
  options: ['Brand City', 'Design Avenue', 'Social Media District', 'UX Factory', 'Web Town'],
};

export const Disabled: Story<DropdownProps> = (args) => (
  <Dropdown 
    disabled
    {...args} // Pass all args including backgroundColor
  />
);

Disabled.args = {
  options: ['Brand City', 'Design Avenue', 'Social Media District', 'UX Factory', 'Web Town'],
};
