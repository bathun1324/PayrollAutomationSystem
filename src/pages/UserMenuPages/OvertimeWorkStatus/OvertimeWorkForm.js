import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header, SideNav, OvertimeWorkFormTable } from "../../../components";
import { RiUserSettingsLine, RiGroup2Fill, } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { MdLibraryBooks } from "react-icons/md";


const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

`

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

  padding: 30px;
  width: 100%;

`

const SCategory = styled.div`
  width: 90%;

  padding: 10px 0px;
  font-size: 28px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.black110};

`
const SButtonContainer = styled.div`
  display: flex;
  min-width: 90%;
  justify-content: flex-end;
  gap: 10px;
`

const SCancleBtn = styled.button`
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
`

const SSaveBtn = styled.button`
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
`
const SPrintBtn = styled(SSaveBtn)`
  background-color: ${({theme}) => theme.colors.black110};

`



const VacationForm = ({ userRole, menuItems, iconMapping }) => {

  const navigate = useNavigate();

  const userIconMapping = {
    0: RiUserSettingsLine,
    1: RiGroup2Fill,
    2: ImProfile,
    3: MdLibraryBooks,
  };
  
  const userMenuItems = [
    {
      title: "사원정보",
      content: ["사원정보조회", "가족정보조회"],
      innerLink: ["/user/employeeinfocheck", "/user/employeefamilycheck"],
    },
    {
      title: "근태조회",
      content: ["휴가사용현황", "출장사용현황", "연차사용현황", "근태기록조회", "급여명세서조회"],
      innerLink: ["/user/vacation", "/user/businesstrip", "/user/annualusestatus", "/kinnotech/attendance", ""],
    },
    {
      title: "신청서",
      content: ["휴가신청서", "출장신청서"],
      innerLink: ["/user/vacation/vacationform", "/user/businesstrip/businesstripform"],
    },
  ];

  


  return (
    <SWrapper>
      <Header />
      <SContentWrapper>
        <SideNav userRole={"user"} menuItems={userMenuItems} iconMapping={userIconMapping}/>
        <SContentContainer>
          <SCategory>연장근로신청서</SCategory>
          <SButtonContainer>
            <SCancleBtn onClick={() => navigate(`/user/businesstripform`)}>취소</SCancleBtn>
            <SSaveBtn onClick={() => navigate(`/user/businesstripform`)}>저장</SSaveBtn>
            <SPrintBtn onClick={() => navigate(`/user/businesstripform`)}>인쇄</SPrintBtn>
          </SButtonContainer>
          <OvertimeWorkFormTable />
        </SContentContainer>
      </SContentWrapper>
    </SWrapper>

  )

}

export default VacationForm;