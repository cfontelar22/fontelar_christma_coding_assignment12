import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string; // Make text prop optional
  backgroundColor?: string;
  hoverBackgroundColor?: string;
}

const StyledButton = styled.button<{ disabled?: boolean; backgroundColor?: string; hoverBackgroundColor?: string }>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled, backgroundColor }) => (disabled ? '#ccc' : backgroundColor || '#008080')};
  color: ${({ disabled }) => (disabled ? '#666' : 'white')}; 
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:hover:not(:disabled) {
    background-color: ${({ hoverBackgroundColor, backgroundColor }) => (hoverBackgroundColor ? hoverBackgroundColor : backgroundColor)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const Button: React.FC<ButtonProps> = ({ text = 'Button', hoverBackgroundColor, ...props }) => {
  return (
    <div style={{ display: 'inline-block', marginRight: '10px' }}>
      <StyledButton {...props} hoverBackgroundColor={hoverBackgroundColor}>
        {text}
      </StyledButton>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
};

export default Button;
