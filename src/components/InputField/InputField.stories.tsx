import React from 'react';
import { Meta, Story } from '@storybook/react';
import InputField, { InputFieldProps } from './InputField.tsx'; 

export default {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'hovered' },
    disabled: { control: 'boolean' }, // Add control for the disabled prop
  },
} as Meta;

const Template: Story<InputFieldProps> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Keyword Search',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Keyword Search',
  disabled: true, // Set disabled prop to true
};
