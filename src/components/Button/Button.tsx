import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Define ButtonProps interface
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  hoverBackgroundColor?: string; // Add hoverBackgroundColor prop
}

// StyledButton component for styling the button
const StyledButton = styled.button<{ disabled?: boolean; backgroundColor?: string; hoverBackgroundColor?: string }>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled, backgroundColor }) => (disabled ? '#ccc' : backgroundColor || '#008080')};
  color: ${({ disabled }) => (disabled ? '#666' : 'white')}; 
  border-radius: 5px;
  transition: background-color 0.3s ease; /* Add transition for smoother hover effect */

  &:focus {
    outline: none;
    box-shadow: none; /* Remove the box-shadow */
  }

  &:hover:not(:disabled) {
    background-color: ${({ hoverBackgroundColor, backgroundColor }) => (hoverBackgroundColor ? hoverBackgroundColor : backgroundColor)}; /* Use hoverBackgroundColor if provided, otherwise use backgroundColor */
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Responsive styles */
  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;


// Button component definition
const Button: React.FC<ButtonProps> = ({ text, hoverBackgroundColor, ...props }) => {
  return (
    <div style={{ display: 'inline-block', marginRight: '10px' }}>
      <StyledButton {...props} hoverBackgroundColor={hoverBackgroundColor}>
        {text}
      </StyledButton>
    </div>
  );
};

// PropTypes for type-checking
Button.propTypes = {
  text: PropTypes.string.isRequired,
  hoverBackgroundColor: PropTypes.string, // Define hoverBackgroundColor prop type
};

export default Button;
