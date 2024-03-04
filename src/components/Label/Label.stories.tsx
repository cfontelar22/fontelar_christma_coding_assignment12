import React from 'react';
import { Story, Meta } from '@storybook/react';
import Label, { LabelProps } from './Label.tsx';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'hovered' },
  },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

const labelStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  padding: '10px',
  margin: '10px',
};

export const AboutDefault = Template.bind({});
AboutDefault.args = {
  text: 'About Us',
};
AboutDefault.decorators = [
  (Story) => (
    <div style={labelStyle}>
      <Story />
    </div>
  ),
];

export const AboutDisabled = Template.bind({});
AboutDisabled.args = {
  text: 'About Us',
  disabled: true,
};
AboutDisabled.decorators = [
  (Story) => (
    <div style={labelStyle}>
      <Story />
    </div>
  ),
];

export const ProjectsDefault = Template.bind({});
ProjectsDefault.args = {
  text: 'Our Projects',
};
ProjectsDefault.decorators = [
  (Story) => (
    <div style={labelStyle}>
      <Story />
    </div>
  ),
];

export const ProjectsDisabled = Template.bind({});
ProjectsDisabled.args = {
  text: 'Our Projects',
  disabled: true,
};
ProjectsDisabled.decorators = [
  (Story) => (
    <div style={labelStyle}>
      <Story />
    </div>
  ),
];
