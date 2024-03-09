import React from 'react';
import { Story, Meta } from '@storybook/react';
import Text from './Text.tsx';
import { TextProps } from './Text.types.tsx'; 

export default {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  text: 'Hello World!',
  color: 'blue',
  fontSize: '20px',
  fontWeight: 'bold',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Text',
  color: 'gray',
  fontSize: '16px',
  fontWeight: 'normal',
  disabled: false 
};
            