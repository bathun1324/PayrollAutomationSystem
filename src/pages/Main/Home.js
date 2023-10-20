import styled from "styled-components"
import { IconInput, Footer, NoAccountErrorModal } from "../../components"
import { useNavigate, useParams } from "react-router-dom"
import { FaShoppingBag, FaUser, FaLock } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { mobile } from "../../assets/styles/Theme";
import { css } from "styled-components";
import { cilLockLocked, cilUser } from '@coreui/icons'
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import '../../home.css'
import Cookies from 'js-cookie';

const SWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
height: 100vh;
`

const SCompanyName = styled.div`
  width: 100vw;
  justify-content: flex-start;
  padding: 30px;
  font-weight: 500;
  font-size: 1.5em;
  position: flxed;
`

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  min-height: calc(100% - 30%);

`

const SContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  min-height: calc(100vh - 30%);
  margin: 5% 0 10% 0;

  overflow: hidden;

`



const SHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 30%;
`

const SSubHeader = styled.div`
  font-size: 36px;
  padding: 3rem 1rem 1rem 1rem;
  color: ${({ theme }) => theme.colors.black110};
  
  ${mobile(css`
  font-size: 1.8em;
  color: ${({ theme }) => theme.colors.black110}
  `)}

`
const SHeader = styled.div`
  font-size: 8rem;
  font-weight: 900;
  padding: 1rem;

  ${mobile(css`
    font-size: 3em;
    padding: 2rem 1rem 1rem 1rem;
    margin-bottom: 1.5em;

  `)}
`

const SLoginContainer = styled.div`
  width: 30%;

  ${mobile(css`
    width: 70%;
  `)}
`

const SInputContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 5% 5% 1% 5%;
  margin-top: 15%;

  & > div {
    flex-direction: column;

  }
`
const SLoginButton = styled.button`
  flex-wrap: wrap;
  min-width: 80px;
  min-height: 80px;
  color: white;
  background-color: rgb(52, 152, 219);
  border-radius: 3px;
  margin: 8px 8px 0px 8px;
  border: none;
`

const SCheckboxContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 1em;

  flex-wrap: wrap;

  & > div {
    margin-right: 10px; /* 조정 */
    margin-top: 8px;
  }

  ${mobile(css`
  width:100%;
  justify-content: flex-end;
  flex-wrap: nowrap;
  padding: 0.5em 0 0 0;
  
  > div {
    margin: 0.8em 0 0.2em 1em;
  }

`)}

`

const SCheckbox = styled.div`
  display: flex;
`


const Home = ({ type }) => {
  // 회사별 url
  const { companyName } = useParams();
  // 모달
  const [isNoAccountModalOpen, setIsNoAccountModalOpen] = useState(false);

  const openNoAccountModal = () => setIsNoAccountModalOpen(true);
  const closeNoAccountModal = () => setIsNoAccountModalOpen(false);


  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://13.125.117.184:8000/login/', {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        // 쿠키저장
        Cookies.set('username', username, { expires: 7 });
        Cookies.set('checked', isChecked, { expires: 7 });

        const { user_info } = response.data;
        localStorage.setItem('user_info', JSON.stringify(user_info));
        const infos = JSON.parse(localStorage.getItem('user_info'));
        const login_id = infos.login_id;
        const perm = infos.perm_id; // 권한 id (관리자:01, 운영자:11, 사용자:21)
        if (perm == '11') {
          navigate('./admin/employeelist');
        } else if (perm == '01') {
          navigate('./superadmin/employeelist');
        } else if (perm == '21') {
          navigate('./user/employee');
        }

      } else {
        // 로그인 실패 처리
        openNoAccountModal(); //일치하는 계정이 없을경우 모달 열기
      }
    } catch (error) {
      console.log("에러입니다")
      console.log(error)
      // 에러 처리
      // 모달화면 테스트용
      openNoAccountModal(); //일치하는 계정이 없을경우 모달 열기

    }
  };
  // Enter 키를 눌렀을 때 로그인 함수 호출
  const handleKeyDown = (e) => {
    if (e.key == 'Enter') {
      handleLogin();
    }
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 쿠키
  const [isChecked, setIsChecked] = useState(true);  // 시작시 실행

  useEffect(() => {
    const checkedvalue = Cookies.get('checked');
    const usernamevalue = Cookies.get('username');
    setIsChecked(checkedvalue == "true" ? true : false);
    if (checkedvalue == "false" || checkedvalue == undefined) {
      document.querySelector('.username').value = '';
      setUsername('');
    }
    else {
      document.querySelector('.username').value = usernamevalue;
      setUsername(usernamevalue);
    }
  }, []);

  // 체크버튼 이벤트
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
  };

  return (
    <SWrapper>
      <SCompanyName>{companyName ? (companyName)
        : ('(주)케이이노텍')}</SCompanyName>
      <SContainer>
        <SContentWrapper>
          <SHeaderContainer>
            <SSubHeader>Payroll Automatic System</SSubHeader>
            <SHeader>급여자동화 시스템</SHeader>
          </SHeaderContainer>
          <SLoginContainer>
            <SInputContainer>
              <div>
                <CForm>
                  <CInputGroup className="mb-1">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      value={username}
                      className="username"
                      placeholder="username"
                      autoComplete="username"
                      onChange={handleUsernameChange}
                      onKeyDown={handleKeyDown} />
                  </CInputGroup>
                  <CInputGroup>
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="password"
                      onChange={handlePasswordChange}
                      onKeyDown={handleKeyDown}
                    />
                  </CInputGroup>
                </CForm>
              </div>
              <SLoginButton onClick={handleLogin}>로그인</SLoginButton>
              {/* <NoAccountErrorModal isOpen={isNoAccountModalOpen} closeModal={closeNoAccountModal} checked={rememberMe} /> */}
            </SInputContainer>
            <SCheckboxContainer>
              <SCheckbox>
                <input type="checkbox" onChange={handleCheckboxChange} checked={isChecked} className="checked" />
                <div>아이디 저장</div>
              </SCheckbox>
              <div onClick={() => navigate('')}>비밀번호 찾기</div>
            </SCheckboxContainer>
          </SLoginContainer>
        </SContentWrapper>
        <Footer />
      </SContainer>
    </SWrapper>
  )


}

export default Home;