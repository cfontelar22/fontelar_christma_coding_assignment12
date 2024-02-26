import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export interface LabelProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const StyledLabel = styled.label<{ disabled?: boolean; clicked?: boolean }>`
  /* Define styles for the label */
  color: ${({ disabled, clicked }) => (disabled ? '#ccc' : clicked ? 'green' : 'black')}; /* Change color when clicked */
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-bottom: 16px; /* Add margin for spacing */
  padding: 10px 10px;
  text-decoration: ${({ clicked }) => (clicked ? 'underline' : 'none')}; /* Underline if clicked */
`;

const Label: React.FC<LabelProps> = ({ text, disabled, onClick }) => {
  const [clicked, setClicked] = useState(false); // State to track clicked state

  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
      setClicked(true); // Set clicked state to true when clicked
      console.log(`Label "${text}" clicked`); // Log message to console
    }
  };

  return (
    <StyledLabel
      disabled={disabled}
      clicked={clicked}
      onClick={handleClick}
    >
      {text}
    </StyledLabel>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Label;
