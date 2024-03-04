import React from 'react';
import { Story, Meta } from '@storybook/react';
import Table, { TableProps } from './Table.tsx';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: { type: 'color', disabled: ({ disabled }) => disabled } },
    disabled: { control: 'boolean' },
    onClickCategory: { action: 'clicked' },
    onMouseEnter: { action: 'hovered' },
  },
} as Meta;

const categories = ['Brand City', 'Design Avenue', 'Social Media District', 'UX Factory', 'Web Town'];

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories,
};

export const Disabled = Template.bind({});
Disabled.args = {
  categories,
  disabled: true,
};
