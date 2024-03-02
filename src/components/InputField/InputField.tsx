import React from 'react';
import styled from 'styled-components';

interface InputFieldProps {
  placeholder: string;
  onMouseEnter?: () => void;
  onClick?: () => void; 
}

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    border-color: #aaa;
  }
`;

const InputField: React.FC<InputFieldProps> = ({ placeholder, onMouseEnter, onClick }) => {
  return <Input type="text" placeholder={placeholder} onMouseEnter={onMouseEnter} onClick={onClick} />; // Pass onClick event handler to input element
};

export default InputField;
export type { InputFieldProps };
