import styled from "styled-components";
import { SideNav } from "../../components";
import { useState } from "react";
import {AnnualTable} from "../../components"
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
  width: 80%;

`

const SContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: auto;
  min-height: 6%;
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
  height: 100%;
  margin: 8px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`

const SInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  gap: 15%;
  padding-top: 5%;
  font-weight: 600;
  font-size: 0.9em;
  color: ${({theme}) => theme.colors.blue090}
`

const AnnualManage = () => {

  return (
  <SWrapper>
    <Header />
    <SContentWrapper>
      <SideNav />
      <SContentContainer>
        <SCategory>
          <div>연차사용내역</div>
        </SCategory>
        <SContentHeader>
          <SInputContainer>
            <div>기준일 : </div>
            <input size={200} type="date" />
          </SInputContainer>
          <SButtonContainer>
            <SSerchButton>검색</SSerchButton>
            <SOutButton>내보내기</SOutButton>
            <SPrintButton>인쇄</SPrintButton>
          </SButtonContainer>
        </SContentHeader>
        <SCompanyTable>
          <SInfoContainer>
            <div>※ 연차갯수는 1년차에 매월 발생한 연차를 2년차 말일까지 사용할 수 있다는 노사합의를 전제로 합니다.</div>
            <div>※ 입사월일기준 전후</div>
          </SInfoContainer>
          <AnnualTable/>
        </SCompanyTable>
      </SContentContainer>
    </SContentWrapper>
  </SWrapper>
  )

}

export default AnnualManage;