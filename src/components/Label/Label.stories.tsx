import React from 'react';
import { Story, Meta } from '@storybook/react';
import Label, { LabelProps } from './Label.tsx';

export default {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'hovered' },
  },
  decorators: [
    (Story) => (
      <div style={{ fontSize: '24px', fontWeight: 'bold', padding: '10px', margin: '10px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const defaultLabelProps: LabelProps = {
  text: 'Label Text',
};

export const AboutDefault: Story<LabelProps> = (args) => <Label {...args} />;
AboutDefault.args = { ...defaultLabelProps, text: 'About Us' };

export const AboutDisabled: Story<LabelProps> = (args) => <Label {...args} />;
AboutDisabled.args = { ...defaultLabelProps, text: 'About Us', disabled: true };

export const ProjectsDefault: Story<LabelProps> = (args) => <Label {...args} />;
ProjectsDefault.args = { ...defaultLabelProps, text: 'Our Projects' };

export const ProjectsDisabled: Story<LabelProps> = (args) => <Label {...args} />;
ProjectsDisabled.args = { ...defaultLabelProps, text: 'Our Projects', disabled: true };
