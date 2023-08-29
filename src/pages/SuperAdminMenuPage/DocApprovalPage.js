import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import { useState, useEffect } from "react";
import { DocApprovalPageTable } from "../../components";
import { Header } from "../../components";
import { RiUserSettingsLine, RiGroup2Fill, } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { MdLibraryBooks } from "react-icons/md";
import { mobile } from "../../assets/styles/Theme";
import { css } from "styled-components";
import { useNavigate } from 'react-router-dom'; // navigate import 추가
import { MobileNav } from "../../components/MobileNav/MobileNav";

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
${mobile(css`
  .mobilenav {
    position: fixed;
  }
`)}

`

const SideNavContainer = styled.div`


${mobile(css`
  position: absolute;
  top: 60px;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 300px;
  height: calc(100vh - 60px);
  background-color: none;
  transition: left 0.3s ease;
`)}

`;

const SContentWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #f8f9fa;

`

const SContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 60px);
  padding: 30px;
  width: 100%;

  ${mobile(css`
  font-size: 0.3em;
`)}

`

const SContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: auto;
  margin: 10px;
  padding: 10px 20px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  font-size: 1.2em;

& > input {
  border: none;
  font-size: 1em;
  width: 5%;

}

${mobile(css`
  justify-content: center;
    width: 100%;
    padding: 1em 0.5em;
    gap: 0;
`)}

`

const SInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;

  gap: 1em;

  input {
    width: 7em;
  }

  select {
    width: 7em;
  }

    
  ${mobile(css`
    gap: 5px;
    justify-content: flex-start;
    margin-right: 3px;

  input {
    width: 50%;
    height: 15px;
    font-size: 0.5em;
  }

  select {
    width: 4em;
    height: 15px;
    font-size: 10px;
  }

  div {
    font-size: 8px;
    width: 50px;
    line-height: 1.5;
  }

`)}


`

const SCategory = styled.div`
  width: 90%;

  padding: 10px 0px;
  font-size: 28px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.black110};

  ${mobile(css`
  font-size: 4.5em;
`)}

`

const SButtonContainer = styled.div`
  display: flex;
  min-width: 30%;
  justify-content: flex-end;
  gap: 10px;

  ${mobile(css`
  min-width: 5%;
  justify-content: center;
  gap: 3px;

  `)}
`

const SSerchButton = styled.button`
  flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({theme}) => theme.colors.blue090};
  border-radius: 3px;
  border: none;

  &:hover{  
    background-color : skyblue;
  }

  

  ${mobile(css`
  width: 80px;
  height: 20px;
  font-size: 0.3em;
`)}


`

const SDeleteButton = styled.button`
  flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({theme}) => theme.colors.black110};
  border-radius: 3px;
  border: none;

  &:hover{  
    background-color : skyblue;

  }

  ${mobile(css`
  width: 80px;
  height: 20px;
  font-size: 0.3em;
`)}


`

const SCompanyTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 10px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

${mobile(css`
  align-items: flex-start;
  width: 100%;
`)}
  
`
const DocApprovalPage = ({ userRole, menuItems, iconMapping }) => {

  const navigate = useNavigate();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

   // 윈도우 창 크기에 따라 isSideNavOpen 값을 변경하는 useEffect
  useEffect(() => {
    const handleResize = () => {
      setIsSideNavOpen(window.innerWidth > mobileBreakpoint); // 모바일 사이즈 기준 설정
    };
    
    const mobileBreakpoint = 768; // 모바일 사이즈 기준값
    handleResize(); // 초기 로드 시 크기 체크
    window.addEventListener("resize", handleResize); // 리사이즈 이벤트 핸들러 등록
    
    return () => {
      window.removeEventListener("resize", handleResize); // 컴포넌트 언마운트 시 이벤트 핸들러 해제
    };
  }, []);



  const toggleSideNav = () => {
    console.log('Toggling SideNav');
    setIsSideNavOpen(!isSideNavOpen);
    console.log('isSideNavOpen:', isSideNavOpen);
  };

  const navigateToVacationForm = () => {
    navigate('../user/vacation/vacationform');
  };



  const superadminMenuItems = [
    {
      title: "사원정보",
      content: ["사원정보조회", "가족정보조회"],
      innerLink: ["/user/employeeinfocheck", "/user/employeefamilycheck"],
    },
    {
      title: "근태조회",
      content: ["휴가사용현황", "출장사용현황", "근태기록조회", "급여명세서조회"],
      innerLink: ["/user/vacation", "/user/businesstrip", "/admin/attendance", ""],
    },
    {
      title: "신청서",
      content: ["휴가신청서", "출장신청서"],
      innerLink: ["/user/vacation/vacationform", "/user/businesstrip/businesstripform"],
    },
  ];

  return (
    <SWrapper>
      <MobileNav classname='mobilenav' onToggleSideNav={toggleSideNav} />
      <Header />
      <SContentWrapper>
        <SideNavContainer isOpen={isSideNavOpen}>
          {isSideNavOpen && (
            userRole === 'user' ? (
              <SideNav userRole={userRole} isOpen={isSideNavOpen} />
            ) : (
              <SideNav userRole="superadmin" isOpen={isSideNavOpen} menuItems={menuItems} iconMapping={iconMapping} />
            )
          )}
        </SideNavContainer>
        <SContentContainer>
          <SCategory>
            <div>신청서 결재</div>
          </SCategory>
          <SContentHeader>
            <SInputContainer>
              <div> 부서 선택 </div>
              <select size={1}>
                <option value={1}>전체</option>
              </select>
            </SInputContainer>
            <SInputContainer>
              <div> 사원명 </div>
              <input type="text" />
            </SInputContainer>
            <SInputContainer>
              <div> 신청서 종류 </div>
              <select size={1}>
                <option value={1}>전체</option>
                <option value={2}>휴가신청서</option>
                <option value={3}>출장신청서</option>
                <option value={4}>휴직신청서</option>
                <option value={5}>연장근로신청서</option>
              </select>
            </SInputContainer>
            <SButtonContainer>
              <SSerchButton>검색</SSerchButton>
              <SDeleteButton>삭제</SDeleteButton>
            </SButtonContainer>
          </SContentHeader>
          <SCompanyTable>
            <DocApprovalPageTable />
          </SCompanyTable>
        </SContentContainer>
      </SContentWrapper>
    </SWrapper>
  );
};

export default DocApprovalPage;