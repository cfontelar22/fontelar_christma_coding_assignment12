import React from 'react';
import { Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button.tsx';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    hoverBackgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'hovered' },
  },
} as Meta;

// Regular components for each story
export const SearchButton: React.FC<ButtonProps> = ({ text = 'Search', backgroundColor = '#2E86C1', hoverBackgroundColor = '#4682B4', ...args }) => (
  <Button {...args} text={text} backgroundColor={backgroundColor} hoverBackgroundColor={hoverBackgroundColor} />
);

(SearchButton as any).storyName = 'Search';

export const ViewButton: React.FC<ButtonProps> = ({ text = 'View', backgroundColor = '#F39C12', hoverBackgroundColor = '#FFA500', ...args }) => (
  <Button {...args} text={text} backgroundColor={backgroundColor} hoverBackgroundColor={hoverBackgroundColor} />
);
 
(ViewButton as any).storyName = 'View';

export const ViewMoreProjectsButton: React.FC<ButtonProps> = ({ text = 'View More Projects', backgroundColor = '#27AE60', hoverBackgroundColor = '#2ECC71', ...args }) => (
  <Button {...args} text={text} backgroundColor={backgroundColor} hoverBackgroundColor={hoverBackgroundColor} />
);

(ViewMoreProjectsButton as any).storyName = 'View More Projects';

export const LeftArrowButton: React.FC<ButtonProps> = ({ text = 'Left Arrow', backgroundColor = '#8E44AD', hoverBackgroundColor = '#9B59B6', ...args }) => (
  <Button {...args} text={text} backgroundColor={backgroundColor} hoverBackgroundColor={hoverBackgroundColor} />
);

(LeftArrowButton as any).storyName = 'Left Arrow';

export const RightArrowButton: React.FC<ButtonProps> = ({ text = 'Right Arrow', backgroundColor = '#E74C3C', hoverBackgroundColor = '#C0392B', ...args }) => (
  <Button {...args} text={text} backgroundColor={backgroundColor} hoverBackgroundColor={hoverBackgroundColor} />
);

(RightArrowButton as any).storyName = 'Right Arrow';

export const AboutButton: React.FC<ButtonProps> = ({ text = 'About', backgroundColor = '#3498DB', hoverBackgroundColor = '#2980B9', ...args }) => (
  <Button {...args} text={text} backgroundColor={backgroundColor} hoverBackgroundColor={hoverBackgroundColor} />
);

(AboutButton as any).storyName = 'About';

export const ProjectsButton: React.FC<ButtonProps> = ({ text = 'Projects', backgroundColor = '#1ABC9C', hoverBackgroundColor = '#16A085', ...args }) => (
  <Button {...args} text={text} backgroundColor={backgroundColor} hoverBackgroundColor={hoverBackgroundColor} />
);

(ProjectsButton as any).storyName = 'Projects';

// Disabled buttons
export const DisabledSearchButton: React.FC<ButtonProps> = ({ text = 'Search', backgroundColor = '#2E86C1', hoverBackgroundColor = '#4682B4', disabled = true, ...args }) => (
  <Button {...args} text={text} backgroundColor={backgroundColor} hoverBackgroundColor={hoverBackgroundColor} disabled={disabled} />
);

(DisabledSearchButton as any).storyName = 'Search (Disabled)';

export const DisabledViewButton: React.FC<ButtonProps> = ({ text = 'View', backgroundColor = '#F39C12', hoverBackgroundColor = '#FFA500', disabled = true, ...args }) => (
  <Button {...args} text={text} backgroundColor={backgroundColor} hoverBackgroundColor={hoverBackgroundColor} disabled={disabled} />
);

(DisabledViewButton as any).storyName = 'View (Disabled)';

export const DisabledViewMoreProjectsButton: React.FC<ButtonProps> = ({ text = 'View More Projects', backgroundColor = '#27AE60', hoverBackgroundColor = '#2ECC71', disabled = true, ...args }) => (
  <Button {...args} text={text} backgroundColor={backgroundColor} hoverBackgroundColor={hoverBackgroundColor} disabled={disabled} />
);

(DisabledViewMoreProjectsButton as any).storyName = 'View More Projects (Disabled)';

export const DisabledLeftArrowButton: React.FC<ButtonProps> = ({ text = 'Left Arrow', backgroundColor = '#8E44AD', hoverBackgroundColor = '#9B59B6', disabled = true, ...args }) => (
  <Button {...args} text={text} backgroundColor={backgroundColor} hoverBackgroundColor={hoverBackgroundColor} disabled={disabled} />
);

(DisabledLeftArrowButton as any).storyName = 'Left Arrow (Disabled)';

export const DisabledRightArrowButton: React.FC<ButtonProps> = ({ text = 'Right Arrow', backgroundColor = '#E74C3C', hoverBackgroundColor = '#C0392B', disabled = true, ...args }) => (
  <Button {...args} text={text} backgroundColor={backgroundColor} hoverBackgroundColor={hoverBackgroundColor} disabled={disabled} />
);

(DisabledRightArrowButton as any).storyName = 'Right Arrow (Disabled)';

export const DisabledAboutButton: React.FC<ButtonProps> = ({ text = 'About', backgroundColor = '#3498DB', hoverBackgroundColor = '#2980B9', disabled = true, ...args }) => (
  <Button {...args} text={text} backgroundColor={backgroundColor} hoverBackgroundColor={hoverBackgroundColor} disabled={disabled} />
);

(DisabledAboutButton as any).storyName = 'About (Disabled)';

export const DisabledProjectsButton: React.FC<ButtonProps> = ({ text = 'Projects', backgroundColor = '#1ABC9C', hoverBackgroundColor = '#16A085', disabled = true, ...args }) => (
  <Button {...args} text={text} backgroundColor={backgroundColor} hoverBackgroundColor={hoverBackgroundColor} disabled={disabled} />
);

(DisabledProjectsButton as any).storyName = 'Projects (Disabled)';
