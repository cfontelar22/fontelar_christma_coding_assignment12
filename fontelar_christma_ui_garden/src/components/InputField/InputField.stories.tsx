import React from 'react';
import { Meta, Story } from '@storybook/react';
import InputField, { InputFieldProps } from './InputField.tsx'; 

export default {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' }, 
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'hovered' },
  },
} as Meta;

// Story for the Default InputField
export const Default: Story<InputFieldProps> = (args) => <InputField {...args} />;

Default.args = {
  placeholder: 'Keyword Search',
};

// Story for the Disabled InputField
export const Disabled: Story<InputFieldProps> = (args) => <InputField {...args} />;

Disabled.args = {
  placeholder: 'Keyword Search',
  disabled: true,
  backgroundColor: '#f5f5f5', 
};

