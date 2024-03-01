import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button.tsx';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' }, 
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Button',
  backgroundColor: '#008080',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  backgroundColor: '#ccc',
  disabled: true,
};
