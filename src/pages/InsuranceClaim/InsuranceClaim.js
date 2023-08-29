import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import { useState } from "react";
import InsuranceClaimTable from "../../components/Table/InsuranceClaimTable";
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
  max-width: 80%;

`

const SContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 90%;
  height: auto;
  min-height: 6%;

  margin: 10px;
  padding: 10px 20px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  font-size: 1.em;

& > input {
  border: none;
  font-size: 1em;
  width: 5%;

}

`

const SInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 30%;
  gap: 0.3em;


  div {
    font-size: 0.9em;
    gap: 0.2em;
  }
`

const SInputInnerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-width: 30%;
  gap: 0.5em;
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
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  max-width: 90%;
  height: 80%;
  margin: 10px;
  padding: 30px 30px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  overflow-x: auto;
`

const InsuranceClaim = () => {

  return (
  <SWrapper>
    <Header />
    <SContentWrapper>
      <SideNav />
      <SContentContainer>
        <SCategory>
          <div>보험 및 세금 적취내역 조회</div>
        </SCategory>
        <SContentHeader>
          <SInputContainer>
            <SInputInnerContainer>            
              <div>검색년도 : </div>
              <input size={200} type="date" />
              <br></br>
              <div>부서 : </div>
              <select size={1}>
                <option value={1}>전체</option>
                <option value={2}>인사부</option>
                <option value={3}>생산부</option>
                <option value={3}>경영부</option>
              </select>
              <br></br>
              <div>분류기준</div>
              <select size={1}>
                <option value={1}></option>
                <option value={1}></option>
                <option value={1}></option>
              </select>
              <br></br>
              <div>퇴직연금 : </div>
              <input id="1" type="checkbox" />
              <div>국민연금</div>
              <input id="2" type="checkbox"/>
              <div>고용보험</div>
              <input id="3" type="checkbox"/>
              <div>건강보험,장기요양보험</div>
              <input id="4" type="checkbox"/>
              <div>정산항목</div>
              <input id="5" type="checkbox"/>
              <div>소득세</div>
            </SInputInnerContainer>
          </SInputContainer>
          <SButtonContainer>
            <SSerchButton>검색</SSerchButton>
            <SOutButton>내보내기</SOutButton>
            <SPrintButton>인쇄</SPrintButton>
          </SButtonContainer>
        </SContentHeader>
        <SCompanyTable>
          <InsuranceClaimTable/>
        </SCompanyTable>
      </SContentContainer>
    </SContentWrapper>
  </SWrapper>
  )

}

export default InsuranceClaim;