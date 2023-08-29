import styled from "styled-components";
import SideNav from "../../../components/SideNav/SideNav";
import { useState } from "react";
import { BusinessTripStatusTable } from "../../../components";
import { Header } from "../../../components";
import { GoPrimitiveDot } from "react-icons/go";
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
  height: calc(100% - 60px);
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
  align-items: center;
  width: auto;
  min-width: 30%;
  gap: 1.1em;

  div {
    width: 30%;
  }

  input {
    width: 30%;
  }

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
const SPrintButton = styled.button`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 80%;
  margin: 10px;
  padding: 2em 0;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`


const SCategoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  align-items: center;
  gap: 5px;
  font-size: 1.2em;

  h3 {
    width: 15%;
  }

  div {
    justify-content: space-evenly;
  }

  input {
    border: none;
    margin: 0.5em;
    padding: 1px;
    width: 40%;
  }

`
const SEmployeeSearchContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em;

`


const BusinessTripStatus = ({ userRole, menuItems, iconMapping }) => {



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
          <div>출장 사용 현황</div>
        </SCategory>
        <SContentHeader>
          <SInputContainer>
            <div>출장일자 : </div>
            <input type="date" />
            <span>~</span>
            <input type="date" />
          </SInputContainer>
          <SButtonContainer>
            <SSerchButton>검색</SSerchButton>
            <SOutButton>내보내기</SOutButton>
            <SPrintButton>인쇄</SPrintButton>
          </SButtonContainer>
        </SContentHeader>
        <SCompanyTable>
          <SCategoryContainer>
            <GoPrimitiveDot color = "#548AFF" />
              <h3>개인정보</h3>
              <SEmployeeSearchContainer>
                <div>
                  <span>사원번호:</span>
                  <input type="text"></input>
                </div>
                <div>
                  <span>사원명:</span>
                  <input type="text"></input>
                </div>
                <div>
                  <span>부서명:</span>
                  <input type="text"></input>
                </div>
                <div>
                  <span>직책:</span>
                  <input type="text"></input>
                </div>
              </SEmployeeSearchContainer>
            </SCategoryContainer>
            <BusinessTripStatusTable/>
          </SCompanyTable>
      </SContentContainer>
    </SContentWrapper>
  </SWrapper>
  )

}

export default BusinessTripStatus;