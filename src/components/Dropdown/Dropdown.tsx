import React from 'react';
import styled from 'styled-components';

export interface DropdownProps {
  options: string[];
  defaultOption?: string;
  disabled?: boolean;
  onClick?: () => void; 
}

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const Select = styled.select<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 8px 24px 8px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor || (props.disabled ? '#f5f5f5' : '#fff')};
  color: ${(props) => (props.disabled ? '#999' : '#333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: 200px; /* Adjust width for responsiveness */
  max-width: 100%; /* Ensure dropdown doesn't overflow on smaller screens */
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled, onClick }) => {
  const handleOptionClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    console.log(`Option "${selectedOption}" clicked`);
    if (onClick) {
      onClick(); 
    }
  };

  return (
    <Container>
      <Select disabled={disabled} onChange={handleOptionClick} backgroundColor="#fff"> {/* Pass backgroundColor prop */}
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </Select>
    </Container>
  );
};

export default Dropdown;
