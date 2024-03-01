import React from 'react';
import { Story, Meta } from '@storybook/react';
import Label, { LabelProps } from './Label.tsx';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' }, 
    onClick: { action: 'clicked' },

  },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Label',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Label',
  disabled: true,
};
