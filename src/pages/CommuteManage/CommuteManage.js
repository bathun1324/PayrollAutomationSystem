import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import { useState, useEffect } from "react";
import { CommuteTable } from "../../components";
import { Header } from "../../components";
import CommuteTimeTable from "../../components/Table/CommuteTimeTable";
import axios from "axios";

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
  width: 80%;

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

  font-size: 1.1em;
  // font-weight: 600;


`

const SInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  min-width: 30%;
  gap: 0.8em;
  margin: 10px;
`

const SInputSection = styled.div`
  display: flex;
  gap: 1em;
  padding: 0.3em 0 0.5em 0;
  justify-content: flex-start;

  input {
    border-radius: 3px;
    border: 1px solid ${({theme}) => theme.colors.black050}

  }

`

const SCategory = styled.div`
  width: 90%;
  height: 100%;
  padding: 10px 0px;
  font-size: 28px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.black110};

`

const SButtonContainer = styled.div`
  display: flex;
  min-width: 30%;
  height: 130px;
  justify-content: flex-end;
  align-items: flex-end;
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
    background-color : ${({theme})=> theme.colors.blue010};
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
    background-color : ${({theme})=> theme.colors.blue010};
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
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

`

const CommuteManage = () => {

  return (
  <SWrapper>
    <Header />
    <SContentWrapper>
      <SideNav />
      <SContentContainer>
        <SCategory>
          <div>출퇴근 관리</div>
        </SCategory>
        <SContentHeader>
          <SInputContainer>
            <SInputSection>
              <div>검색기간(월) : </div>
              <input size={10} type="month" />
              <div>부서명 : </div>
              <select size={1}>
                <option value="1">관리부</option>
                <option value="2">경영부</option>
                <option value="3">인사부</option>
                <option value="4">시설부</option>
                <option value="1">관리부</option>
                <option value="2">경영부</option>
                <option value="3">인사부</option>
                <option value="4">시설부</option>
                <option value="1">관리부</option>
                <option value="2">경영부</option>
                <option value="3">인사부</option>
                <option value="4">시설부</option>
                <option value="1">관리부</option>
                <option value="2">경영부</option>
                <option value="3">인사부</option>
                <option value="4">시설부</option>
                <option value="1">관리부</option>
                <option value="2">경영부</option>
                <option value="3">인사부</option>
                <option value="4">시설부</option>
                <option value="1">관리부</option>
                <option value="2">경영부</option>
                <option value="3">인사부</option>
                <option value="4">시설부</option>
                <option value="1">관리부</option>
                <option value="2">경영부</option>
                <option value="3">인사부</option>
                <option value="4">시설부</option>
                <option value="1">관리부</option>
                <option value="2">경영부</option>
                <option value="3">인사부</option>
                <option value="4">시설부</option>
                <option value="1">관리부</option>
                <option value="2">경영부</option>
                <option value="3">인사부</option>
                <option value="4">시설부</option>
              </select>
            </SInputSection>
            <SInputSection>
              <div>사원명 : </div>
              <input size={10} type="text" placeholder="성명"/>
              <div>사원번호</div>
              <input size={10} type="text" placeholder="번호"/>
              <div>직급</div>
              <input size={10} type="text" placeholder="직급"/>
            </SInputSection>
            <SInputSection>
              <input type="checkbox" />
              <div>기기근태</div>
              <input type="checkbox" />
              <div>종합근태</div>
              <input type="checkbox" />
              <div>자동계산</div>
            </SInputSection>
          </SInputContainer>
          <SButtonContainer>
            <SSerchButton>검색</SSerchButton>
          </SButtonContainer>
        </SContentHeader>
        <CommuteTimeTable/>
        <SCompanyTable>
          <CommuteTable/>
        </SCompanyTable>
      </SContentContainer>
    </SContentWrapper>
  </SWrapper>
  )

}

export default CommuteManage;