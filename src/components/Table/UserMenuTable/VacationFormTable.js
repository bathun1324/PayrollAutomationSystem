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
  
  // border-top: 2.5px solid ${({ theme }) => theme.colors.black050};

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
    border-bottom: 1px solid ${({ theme }) => theme.colors.black050};
 
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
  
  
}

`

const SContractInfo = styled.div`
display: flex;
flex-direction: column;


height: 100%;


table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  height: 50%;
}

tr > td:first-child {
  width: 8.3%;
  vertical-align: middle;

}

input {
  width: 100%;
  height: 90%;
  vertical-align: middle;

}

`

const SAttendanceInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


input {
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 15px;
}

table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  
  
}

`

const SNote = styled.div`
display: flex;
flex-direction: column;


height: 30%;

input {
  height: 100px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  padding: 15px;
}

`

const SFamilyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;


  height: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  
  height: 30%;
  
  
}


`

const SFileContainer = styled.div`
display: flex;

gap: 1.1em;

input {
  width: 20%;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
}

`

const SFileBtn = styled.button`
flex-wrap: wrap;
width: 80px;
height: 40px;
color: white;
font-size: 0.8em;
background-color: ${({ theme }) => theme.colors.blue090};
border-radius: 3px;
border: none;


&:hover{  
  background-color : skyblue;
}
`

const SLogoimgContainer = styled.div`
width: 100%;
height: 10em;

background-color: white;
border-radius: 3px;
box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
margin: 2em 0;
padding: 20px;
`

const SSalaryInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


input {
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 15px;
}

table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  
  
}
`

const SForeignerInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


input {
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 15px;
}

table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  
  
}
`

const SAddButton = styled.button`
flex-wrap: wrap;

width: 80px;
height: 30px;
color: white;
font-size: 0.8em;
background-color: ${({ theme }) => theme.colors.blue090};
border-radius: 3px;
border: none;

&:hover{  
  background-color : skyblue;
}


`

const SVacationApply = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  gap: 7em;
`



const VacationFormTable = () => {

  return (
    <SWrapper>
      <SCompanyInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>개인 정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>사원번호</td>
            <td><input type="text" /></td>
            <td>사원명</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>부서명</td>
            <td><input type="text" /></td>
            <td>직책</td>
            <td><input type="text" /></td>
          </tr>
        </table>
      </SCompanyInfo>
      <SVacationApply>
        <SManagerInfo>
          <SCategoryContainer>
            <GoPrimitiveDot color="#548AFF" />
            <h3>휴가신청</h3>
          </SCategoryContainer>
          <table>
            <tr>
              <td>휴가 신청일</td>
              <td><input type="date" /></td>
              <td>휴가구분</td>
              <td>
                <select size={1}>
                  <option value={1}>유급</option>
                  <option value={2}>무급</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>휴가 시작일</td>
              <td><input type="date" /></td>
              <td>휴가 종료일</td>
              <td><input type="date" /></td>
            </tr>
            <tr>
              <td>휴가일수</td>
              <td><input type="text" /></td>
              <td>전일/반일</td>
              <td>
                <select size={1}>
                  <option value={1}>전일</option>
                  <option value={2}>반일</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>실제사용여부</td>
              <td><input type="text" /></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </SManagerInfo>
        <SContractInfo>
          <table>
            <tr>
              <td>휴가사유</td>
              <td><input type="text" /></td>
            </tr>
          </table>
        </SContractInfo>
      </SVacationApply>
    </SWrapper>
  )
}

export default VacationFormTable;