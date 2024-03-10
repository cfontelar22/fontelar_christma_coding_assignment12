// InputField.tsx

import React from 'react';
import styled from 'styled-components';

interface InputFieldProps {
  placeholder: string;
  disabled?: boolean;
  onMouseEnter?: () => void;
  onClick?: () => void;
  backgroundColor?: string; 
}

const Input = styled.input<InputFieldProps>`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  background-color: ${({ disabled, backgroundColor }) => (disabled ? '#f5f5f5' : backgroundColor || '#fff')}; // Use backgroundColor prop
  color: ${({ disabled }) => (disabled ? '#999' : '#333')};
`;

const InputField: React.FC<InputFieldProps> = ({ placeholder, disabled, onMouseEnter, onClick, backgroundColor }) => {
  return <Input type="text" placeholder={placeholder} disabled={disabled} onMouseEnter={onMouseEnter} onClick={onClick} backgroundColor={backgroundColor} />;
};

export default InputField;
export type { InputFieldProps };
