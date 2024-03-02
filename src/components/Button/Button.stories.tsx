// Button.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button.tsx';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' }, 
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'hovered' }, // Add onMouseEnter action
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const SearchButton = Template.bind({});
SearchButton.args = {
  text: 'Search',
  backgroundColor: '#2E86C1',
  hoverBackgroundColor: '#4682B4', 
};

export const ViewButton = Template.bind({});
ViewButton.args = {
  text: 'View',
  backgroundColor: '#F39C12',
  hoverBackgroundColor: '#FFA500', 
};

export const ViewMoreProjectsButton = Template.bind({});
ViewMoreProjectsButton.args = {
  text: 'View More Projects',
  backgroundColor: '#27AE60',
  hoverBackgroundColor: '#32CD32', 
};

export const LeftArrowButton = Template.bind({});
LeftArrowButton.args = {
  text: '<',
  backgroundColor: '#2E86C1',
  hoverBackgroundColor: '#4682B4', 
};

export const RightArrowButton = Template.bind({});
RightArrowButton.args = {
  text: '>',
  backgroundColor: '#F39C12',
  hoverBackgroundColor: '#FFA500', 
};

export const AboutButton = Template.bind({});
AboutButton.args = {
  text: 'About',
  backgroundColor: '#6A5ACD',
  hoverBackgroundColor: '#9370DB', 
};

export const ProjectsButton = Template.bind({});
ProjectsButton.args = {
  text: 'Projects',
  backgroundColor: '#FF1493',
  hoverBackgroundColor: '#FF69B4', 
};
