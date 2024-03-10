import React from 'react';
import { Story, Meta } from '@storybook/react';
import Table, { TableProps } from './Table.tsx';

export default {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: { type: 'color', disabled: ({ disabled }) => disabled } },
    disabled: { control: 'boolean' },
    onClickCategory: { action: 'clicked' },
    onMouseEnter: { action: 'hovered' },
  },
} as Meta;

const categories = ['Brand City', 'Design Avenue', 'Social Media District', 'UX Factory', 'Web Town'];

const TableHeader = () => (
  <thead>
    <tr>
      <th>Category</th>
    </tr>
  </thead>
);

const TableFooter = () => (
  <tfoot>
    <tr>
      <td>Total categories: {categories.length}</td>
    </tr>
  </tfoot>
);

const TableCell = ({ category }: { category: string }) => (
  <tr>
    <td>{category}</td>
  </tr>
);

const Template: Story<TableProps> = (args) => (
  <Table {...args}>
    <TableHeader />
    <tbody>
      {args.categories.map((category: string, index: number) => (
        <TableCell key={index} category={category} />
      ))}
    </tbody>
    <TableFooter />
  </Table>
);

export const Default: Story<TableProps> = Template.bind({});
Default.args = {
  categories,
};

export const Disabled: Story<TableProps> = Template.bind({});
Disabled.args = {
  categories,
  disabled: true,
};
