import styled from "styled-components";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";
import EmployeeDetailFamilyTable from "../EmployeeDetailFamilyTable";
import NewFamilyModal from "../../Modal/NewFamilyModal";


const SWrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 90%;
  height: 90%;

  font-size: 1.1em;
  text-align: left;
  line-height: 2.8;
  border-collapse: collaps;

  margin: 20px 10px;
  padding-top: 40px;
  
  border-top: 2.5px solid ${({theme}) => theme.colors.black050};

  gap: 2em;



  input {
    border: none;
    border-radius: 5px;
    padding: 15px;
  }


  tr td:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.blue010};
    text-align: right;
  }


  td {
    width: 25%;
    padding: 0 15px;
    border-bottom: 1px solid ${({theme}) => theme.colors.black050};
 
    > select {
      width: 100%;
      height: 100%;
      padding: 0;
      border: none;
    }
  }
  

`

const SCategoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  vertical-align: middle;



& > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: 1em;

  }
`

const SCompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  

  height: 30%;

  table {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
    
  }

`

const SManagerInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  
  td {
    vertical-align: middle;
  
  }

  input {
    width: 100%;
    height: 100%;
  }


  tr:last-child {
    td:last-child{
      height: 10em;
    }
  }
  
}




`


const SBusinessTripApply = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  gap: 7em;
`



const BusinessTripFormTable = () => {

  return (
    <SWrapper>
      <SCompanyInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>개인 정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>사원번호</td>
            <td><input type="text"/></td>
            <td>사원명</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>부서명</td>
            <td><input type="text"/></td>
            <td>직책</td>
            <td><input type="text"/></td>
          </tr>
        </table>
      </SCompanyInfo>
      <SBusinessTripApply>
        <SManagerInfo>
          <SCategoryContainer>
            <GoPrimitiveDot color = "#548AFF" />
            <h3>출장신청</h3>
          </SCategoryContainer>
          <table>
            <tr>
              <td>신청일자</td>
              <td><input type="date"/></td>
              <td>출장인원</td>
              <td><input type="text"/></td>
            </tr>
            <tr>
              <td>출장 시작일</td>
              <td><input type="date"/></td>
              <td>출장 종료일</td>
              <td><input type="date"/></td>
            </tr>
            <tr>
              <td>출장비(예상)</td>
              <td><input type="text"/></td>
              <td>선지급 금액</td>
              <td><input type="text"/></td>
            </tr>
            <tr>
              <td>출장지</td>
              <td colSpan={3}><input type="text"/></td>
            </tr>
            <tr>
              <td>출장목적</td>
              <td colSpan={3}><input type="text"/></td>
            </tr>
            <tr>
              <td>출장 신청 내용</td>
              <td colSpan={3}><input type="text"/></td>
            </tr>
          </table>
        </SManagerInfo>
      </SBusinessTripApply>
    </SWrapper>
  )
}

export default BusinessTripFormTable;