import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HeroImageProps } from './HeroImage.types.tsx';
import HeroImage from './HeroImage.tsx';


export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
} as Meta;

const Template: Story<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad',
  title: 'WELCOME TO MY PORTFOLIO',
  subtitle: 'I AM CHRISTMA FONTELAR',
  description: 'Explore my projects and experience.',
};
