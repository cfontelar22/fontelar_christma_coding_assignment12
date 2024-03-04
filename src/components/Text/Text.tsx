import React from 'react';
import styled from 'styled-components';

interface TextProps {
  text?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  disabled?: boolean; // Add disabled prop
}

const StyledText = styled.span<TextProps>`
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')}; 
`;

const Text: React.FC<TextProps> = ({ text, ...rest }) => {
  return <StyledText {...rest}>{text}</StyledText>;
};

(Text as React.FC<{ text: string }>).defaultProps = {
  text: 'Sample Text',
};

export default Text;
