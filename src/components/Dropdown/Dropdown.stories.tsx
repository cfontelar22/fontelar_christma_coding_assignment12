import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown.tsx';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' }, // Only include the 'disabled' boolean control
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
