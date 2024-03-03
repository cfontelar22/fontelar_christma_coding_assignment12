import React from 'react';
import styled from 'styled-components';

interface InputFieldProps {
  placeholder: string;
  disabled?: boolean;
  onMouseEnter?: () => void;
  onClick?: () => void; 
}

const Input = styled.input<{ disabled?: boolean }>`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : '#fff')};
  color: ${({ disabled }) => (disabled ? '#999' : '#333')};
`;

const InputField: React.FC<InputFieldProps> = ({ placeholder, disabled, onMouseEnter, onClick }) => {
  return <Input type="text" placeholder={placeholder} disabled={disabled} onMouseEnter={onMouseEnter} onClick={onClick} />;
};

export default InputField;
export type { InputFieldProps };
