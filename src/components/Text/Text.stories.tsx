import React from 'react';
import { Story, Meta } from '@storybook/react';
import Text, { TextProps } from './Text.tsx'; 

export default {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: { type: 'color', value: 'blue' } }, 
    disabled: { control: 'boolean' }, 
  },
} as Meta;

export const Default: Story<TextProps> = (args) => (
  <Text {...args} />
);
Default.args = {
  text: 'As a network engineer, I specialize in designing, implementing, and managing computer networks.',
  color: 'blue',
};

export const Disabled: Story<TextProps> = (args) => (
  <Text {...args} />
);
Disabled.args = {
  text: 'As a network engineer, I specialize in designing, implementing, and managing computer networks.',
  color: 'gray',
  disabled: true,
};
