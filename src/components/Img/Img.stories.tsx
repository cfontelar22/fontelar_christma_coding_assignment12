import React from 'react';
import { Story, Meta } from '@storybook/react';
import Img, { ImgProps } from './Img.tsx';

// Define ImgPropsWithDisabled interface extending ImgProps
interface ImgPropsWithDisabled extends ImgProps {
  disabled?: boolean;
}

export default {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' }, 
    backgroundColor: { control: 'color' },
  },
} as Meta;

// Define Default story
export const Default: Story<ImgProps> = (args) => (
  <Img {...args} />
);

// Set Default story args
Default.args = {
  src: 'https://via.placeholder.com/100',
  alt: 'Logo Sample',
  className: 'image',
};

// Define Disabled story
export const Disabled: Story<ImgPropsWithDisabled> = (args) => (
  <Img {...args} />
);


Disabled.args = {
  src: 'https://via.placeholder.com/100',
  alt: 'Logo Sample',
  className: 'image',
  disabled: true, 
};

