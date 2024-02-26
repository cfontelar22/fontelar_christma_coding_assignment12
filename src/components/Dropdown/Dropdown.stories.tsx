import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dropdown from './Dropdown.tsx'; // Correct import path
import { DropdownProps } from './Dropdown.tsx'; // Import DropdownProps without default export

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: { control: 'boolean' },
    options: { control: 'array' }, // Add control for options
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Brand City', 'Design Avenue', 'Social Media District', 'UX Factory', 'Web Town'],
  onClick: () => console.log('Dropdown clicked'), 
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ['Brand City', 'Design Avenue', 'Social Media District', 'UX Factory', 'Web Town'],
  disabled: true,
};
