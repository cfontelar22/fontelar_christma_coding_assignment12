import React from 'react';
import { Story, Meta } from '@storybook/react';
import Img, { ImgProps } from './Img.tsx';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    onClick: { action: 'clicked' },
    
  },
} as Meta;

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/100',
  alt: 'Logo Sample',
  className: 'image',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
  onClick: undefined, 
};
