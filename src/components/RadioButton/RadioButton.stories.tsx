import React from 'react';
import { Meta, Story } from '@storybook/react';
import RadioButton, { RadioProps } from './RadioButton.tsx';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<RadioProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Visa',
  checked: true, 
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Avion',
  disabled: true,
};
