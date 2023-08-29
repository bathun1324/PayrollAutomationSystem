import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import {FaUserCircle} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import Dropdown from "../../components/Dropdown/Dropdown";
import { unmobile } from "../../assets/styles/Theme";
import { css } from "styled-components";




const SContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.blue090};

  // 모바일사이즈 이외에서는 안보이게
  ${unmobile(css`
  display: none;
  `)}
`

const SUserWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0px 3em;
  font-size: 0.5em;
  
`

const SUserInfo = styled.div`
  display: flex;
  align-items: center;

`

const SCompanyName = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  font-weight: 800;
  font-size: 0.8em;
  position: flxed;
  justify-content: flex-end;


  `

export const MobileNav = ({ onToggleSideNav }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigate = useNavigate();

  return (
    <SContainer>
      <SUserWrapper>
        <GiHamburgerMenu size={20} onClick={onToggleSideNav} />
      </SUserWrapper>
      <SCompanyName>
        <SUserInfo>
          <FaUserCircle size={20} onClick={toggleDropdown} />
          {isDropdownOpen && (
            <Dropdown menuItems={["개인정보", "비밀번호변경", "로그아웃"]} isOpen={isDropdownOpen} />
          )}
        </SUserInfo>
        <AiFillHome size={20} onClick={() => navigate('/')} />
      </SCompanyName>
    </SContainer>
  );
};