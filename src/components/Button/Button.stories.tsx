import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button.tsx';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' }, 
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'hovered' }, 
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

// Add disabled state for each button
export const DisabledSearchButton = Template.bind({});
DisabledSearchButton.args = {
  ...SearchButton.args,
  disabled: true,
};

export const DisabledViewButton = Template.bind({});
DisabledViewButton.args = {
  ...ViewButton.args,
  disabled: true,
};

export const DisabledViewMoreProjectsButton = Template.bind({});
DisabledViewMoreProjectsButton.args = {
  ...ViewMoreProjectsButton.args,
  disabled: true,
};

export const DisabledLeftArrowButton = Template.bind({});
DisabledLeftArrowButton.args = {
  ...LeftArrowButton.args,
  disabled: true,
};

export const DisabledRightArrowButton = Template.bind({});
DisabledRightArrowButton.args = {
  ...RightArrowButton.args,
  disabled: true,
};

export const DisabledAboutButton = Template.bind({});
DisabledAboutButton.args = {
  ...AboutButton.args,
  disabled: true,
};

export const DisabledProjectsButton = Template.bind({});
DisabledProjectsButton.args = {
  ...ProjectsButton.args,
  disabled: true,
};
