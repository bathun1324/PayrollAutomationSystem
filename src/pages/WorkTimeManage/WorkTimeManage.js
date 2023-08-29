import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import { useState } from "react";
import { WorkTimeTable } from "../../components";
import { Header } from "../../components";


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

  font-size: 1.1em;

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
  min-width: 100%;
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

const SCompanyTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 80%;
  margin: 10px;
  padding:  50px 0px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`

const WorkTimeManage = () => {

  const refreshPage = () => {
    window.location.reload();
  }

  return (
  <SWrapper>
    <Header />
    <SContentWrapper>
      <SideNav />
      <SContentContainer>
        <SCategory>
          <div>기본근로시간 관리</div>
        </SCategory>
        <SContentHeader>
          <SButtonContainer>
            <SSerchButton onClick={refreshPage}>새로고침</SSerchButton>
            <SNewButton>저장</SNewButton>
          </SButtonContainer>
        </SContentHeader>
        <SCompanyTable>
          <WorkTimeTable/>
        </SCompanyTable>
      </SContentContainer>
    </SContentWrapper>
  </SWrapper>
  )

}

export default WorkTimeManage;