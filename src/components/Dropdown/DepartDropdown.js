import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import styled from 'styled-components';

const DropdownMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 30px;
  right: 0;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
`;

const DropdownItem = styled.li`
  list-style: none;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 3px;
`;

const Dropdown = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <DropdownButton  onClick={toggleDropdown}>
        <RiArrowDropDownLine size={20} />
      </DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        {menuItems.map((item, index) => (
          <DropdownItem key={index}>{item}</DropdownItem>
        ))}
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;