import styled from "styled-components";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";



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

const SNote = styled.div`
display: flex;
flex-direction: column;

height: 30%;

h3 {
  margin-bottom: 2.5em;
}

input {
  height: 100px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);

}
`

const SReasonContainer = styled(SCompanyInfo)`

tr > td:first-child {
  width: 8.3%;
  vertical-align: middle;

}

tr > td {
  min-height: 5em;
}

input {
  width: 90%;
  margin: 0.5em;
}



`


const LeaveWorkFormTable = () => {

  return (
    <SWrapper>
      <SCompanyInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>휴직 신청자</h3>
        </SCategoryContainer>
        <table>
          <tbody>
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
          <tr>
            <td>신청자 전화번호</td>
            <td><input type="text"/></td>
            <td>신청자 이메일</td>
            <td><input type="text"/></td>
          </tr>
          </tbody>
        </table>
      </SCompanyInfo>
        <SManagerInfo>
          <SCategoryContainer>
            <GoPrimitiveDot color = "#548AFF" />
            <h3>휴직 기간</h3>
          </SCategoryContainer>
          <table>
          <tbody>
            <tr>
              <td>휴직 시작일</td>
              <td><input type="date"/></td>
              <td>복귀 예정일</td>
              <td><input type="date" /></td>
            </tr>
            <tr>
              <td>총 기간</td>
              <td><input type="text" placeholder="- 일간"/></td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </SManagerInfo>
        <SReasonContainer>
        <SCategoryContainer>
            <GoPrimitiveDot color = "#548AFF" />
            <h3>휴직 사유</h3>
          </SCategoryContainer>
          <table>
          <tbody>
            <tr>
                <td>휴직 사유</td>
                <td><input type="text" /></td>
            </tr>
            </tbody>
          </table>
        </SReasonContainer>
        <SContractInfo>
        <SNote>
            <GoPrimitiveDot color = "#548AFF" />
            <h3>비고</h3>
          </SNote>
            <input type="text" placeholder="비고"/>
        </SContractInfo>
    </SWrapper>
  )
}

export default LeaveWorkFormTable;