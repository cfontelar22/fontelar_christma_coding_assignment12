import React from 'react';
import { Story, Meta } from '@storybook/react';
import Card from './Card.tsx';
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' }, 

  },
} as Meta;

export const Default: Story<CardProps> = (args) => (
  <Card {...args} />
);

Default.args = {
  title: 'Project 1',
  subtitle: 'Point to Point Network Wireless Bridge',
  description: 'This project is all about implementing one hop to the other hop wireless bridge.',
  image: 'https://via.placeholder.com/300',
};

export const Disabled: Story<CardProps> = (args) => (
  <Card {...args} />
);

Disabled.args = {
  title: 'Project 1',
  subtitle: 'Point to Point Network Wireless Bridge',
  description: 'Point to Point Network Wireless Bridge.',
  image: 'https://via.placeholder.com/300',
  disabled: true,
};
