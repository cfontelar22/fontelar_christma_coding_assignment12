import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button.tsx'; // Correct import path

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' }, // Control for modifying default text
    backgroundColor: { control: 'color' }, // Control for modifying background color
    disabled: { control: 'boolean' }, // Control for modifying disabled state
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Button',
  backgroundColor: '#008080', // Default background color
  disabled: false, // Default disabled state
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  backgroundColor: '#ccc', // Background color when disabled
  disabled: true,
};
