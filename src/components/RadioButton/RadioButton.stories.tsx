import React from 'react';
import { Story, Meta } from '@storybook/react';
import RadioButton, { RadioProps } from './RadioButton.tsx';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' }, 
  },
} as Meta;

const Template: Story<RadioProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Visa',
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'MasterCard',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Avion',
  disabled: true,
};
