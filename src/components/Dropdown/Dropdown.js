import styled from 'styled-components';


const SContainer = styled.div`

`

const DropdownMenu = styled.ul`
  position: absolute;

  top: 30px;
  right: 0;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  width: 200px; /* 원하는 크기로 조절 */
  z-index: 1; /* 메뉴가 아이콘 위로 보이도록 */
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const DropdownItem = styled.li`
  list-style: none;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Dropdown = ({ menuItems, isOpen }) => {
  return (
    <SContainer>
      {/* 아이콘 버튼 제거 */}
      <DropdownMenu isOpen={isOpen}>
        {menuItems.map((item, index) => (
          <DropdownItem key={index}>{item}</DropdownItem>
        ))}
      </DropdownMenu>
    </SContainer>
  );
};

export default Dropdown;