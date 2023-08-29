import styled from "styled-components";
import SideNav from "../../../components/SideNav/SideNav";
import { useState } from "react";
import { UserDocSubmitTable } from "../../../components";
import { Header } from "../../../components";
import { RiUserSettingsLine, RiGroup2Fill, } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { MdLibraryBooks } from "react-icons/md";


const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  height: calc(100vh - 60px);
  padding: 30px;
  width: 100%;

`

const SContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 6%;
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

`

const SInputContainer = styled.div`
  display: flex;
  width: 50%;
  min-width: 30%;
  gap: 1.1em;
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
  min-width: 30%;
  justify-content: flex-end;
  gap: 10px;
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
`

const SOutButton = styled.button`
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

`

const SCompanyTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  // height: 80%;
  margin: 10px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`

const UserAttendance = ({ userRole, menuItems, iconMapping }) => {

  
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
    <Header />
    <SContentWrapper>
      <SideNav userRole={"user"} menuItems={userMenuItems} iconMapping={userIconMapping}/>
      <SContentContainer>
        <SCategory>
          <div>내 신청서 조회</div>
        </SCategory>
        <SContentHeader>
          <SInputContainer>
            <div> 신청서 선택 </div>
            <select size={1}>
              <option value={1}>전체</option>
              <option value={2}>휴가신청서</option>
              <option value={3}>출장신청서</option>
            </select>
          </SInputContainer>
          <SButtonContainer>
            <SSerchButton>검색</SSerchButton>
            <SDeleteButton>삭제</SDeleteButton>
          </SButtonContainer>
        </SContentHeader>
        <SCompanyTable>
          <UserDocSubmitTable/>
        </SCompanyTable>
      </SContentContainer>
    </SContentWrapper>
  </SWrapper>
  )

}

export default UserAttendance;