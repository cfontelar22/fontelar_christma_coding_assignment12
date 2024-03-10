import React from 'react';
import { Story, Meta } from '@storybook/react';
import HeroImage from './HeroImage.tsx'; 
import { HeroImageProps } from './HeroImage.types.tsx';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    description: { control: 'text' },
    onClick: { action: 'clicked' }, 
    disabled: { control: 'boolean' }, 
    backgroundColor: { control: 'color' }, 
  },
} as Meta;

export const Default: Story<HeroImageProps> = (args) => (
  <HeroImage
    onClick={() => console.log('HeroImage clicked')}
    {...args} 
  />
);

Default.args = {
  imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad',
  title: 'WELCOME TO MY PORTFOLIO',
  subtitle: 'I AM CHRISTMA FONTELAR',
  description: 'Explore my projects and experience.',
};

export const Disabled: Story<HeroImageProps> = (args) => (
  <HeroImage
    disabled
    {...args} 
  />
);

Disabled.args = {
  imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad',
  title: 'WELCOME TO MY PORTFOLIO',
  subtitle: 'I AM CHRISTMA FONTELAR',
  description: 'Explore my projects and experience.',
};
