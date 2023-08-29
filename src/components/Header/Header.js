import styled from "styled-components";
import {FaUserCircle} from 'react-icons/fa';
import {BsArrowBarRight} from 'react-icons/bs';
import { mobile } from "../../assets/styles/Theme";
import { css } from "styled-components";


const SHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: white;
  color:  ${({theme}) => theme.colors.blue090};
  font-size: 1.1em;
  font-weight: 500;
  box-shadow: 0 2px 18px -2px rgba(0, 0, 0, 0.5);

  ${mobile(css`
  display: none;
`)}

`

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;


`

const SCompanyWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 45%;
  padding: 0px 30px;
  gap: 40px;
  font-size: 1.3em;
  font-weight: 800;

  ${mobile(css`
  font-size: 0.8em;
`)}

`

const SUserWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  padding: 0px 30px;
  gap: 20px;

  ${mobile(css`
  font-size: 0.7em;
`)}
`

const SUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  ${mobile(css`
  font-size: 0.8em;
`)}
`

const Header = () => {

  return (
    <SWrapper>
      <SHeader>
        <SCompanyWrapper>
          <div>Payroll Auto</div>
          <BsArrowBarRight size={25}/>
        </SCompanyWrapper>
        <SUserWrapper>
          <div>계약 만료일 : 2025-12-31</div>
          <SUserInfo>
            <FaUserCircle size={32}/>
            <div>Username</div>
          </SUserInfo>
          <div>로그아웃</div>
        </SUserWrapper>
      </SHeader>
    </SWrapper>
  )
}

export default Header;