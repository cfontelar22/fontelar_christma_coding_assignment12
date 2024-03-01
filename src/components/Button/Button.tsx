import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished'; // Import darken function

// Define ButtonProps interface
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void; // Add onClick prop
}

// StyledButton component for styling the button
const StyledButton = styled.button<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background-color: ${({ disabled, backgroundColor }) => (disabled ? '#ccc' : backgroundColor || '#008080')};
  color: ${({ disabled }) => (disabled ? '#666' : 'white')}; 
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled, backgroundColor }) => (disabled ? '#ccc' : darken(0.1, backgroundColor || '#008080'))}; // Darken background color on hover
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5); 
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
const Button: React.FC<ButtonProps> = ({ text, onClick, ...props }) => {
  const handleClick = () => {
    console.log('Button clicked');
    if (onClick) {
      onClick(); // Invoke onClick event handler if provided
    }
  };

  return (
    <div style={{ display: 'inline-block', marginRight: '10px' }}>
      <StyledButton {...props} onClick={handleClick}>
        {text}
      </StyledButton>
    </div>
  );
};

// PropTypes for type-checking
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func, // Define onClick prop type
};

export default Button;
