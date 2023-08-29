import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import { useState } from "react";
import { EmployeeListTable } from "../../components";
import { Header } from "../../components";
import RetiredEmployeeListManageTable from "../../components/Table/RetiredEmployeeListManageTable";
import { managerMenuItems, managerIconMapping } from "../../utils/userRollMenuItems";

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
  justify-content: flex-start;
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
  width: 20%;
  min-width: 20%;
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

const SNewButton = styled.button`
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

const SPrintButton = styled(SNewButton)`

`

const SCompanyTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 80%;
  margin: 10px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`

const RetiredEmployeeListManage = ({ userRole, menuItems, iconMapping }) => {

  return (
  <SWrapper>
    <Header />
    <SContentWrapper>
      <SideNav userRole={"admin"} menuItems={managerMenuItems} iconMapping={managerIconMapping} />
      <SContentContainer>
        <SCategory>
          <div>퇴직자명부조회</div>
        </SCategory>
        <SContentHeader>
          <SInputContainer>
            <div>입사일 : </div>
            <input size={200} type="date" />
          </SInputContainer>
          <SInputContainer>
            <div>퇴직일 : </div>
            <input size={200} type="date" />
          </SInputContainer>
          <SInputContainer>
            <div>부서명 : </div>
            <select size={1}>
              <option value="1">전체</option>
              <option value="2">생산부</option>
              <option value="3">인사부</option>
              <option value="4">영업부</option>
              <option value="5">관리부</option>
            </select>
          </SInputContainer>
          <SButtonContainer>
            <SSerchButton>검색</SSerchButton>
            <SPrintButton>인쇄</SPrintButton>
          </SButtonContainer>
        </SContentHeader>
        <SCompanyTable>
          <RetiredEmployeeListManageTable/>
        </SCompanyTable>
      </SContentContainer>
    </SContentWrapper>
  </SWrapper>
  )

}

export default RetiredEmployeeListManage;