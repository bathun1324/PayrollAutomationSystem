import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";
import EmployeeDetailFamilyTable from "./EmployeeDetailFamilyTable";


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

const SCommuteInfo = styled.div`
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


height: 30%;


table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  
  
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
  
}

`

const SWorkTimeSum = styled.div`
display: flex;
flex-direction: column;


height: 25%;
vertical-align: middle;


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

  height: 300px;


    >tr:first-child {
      height: 20%;
    }
  
    > tr>td:nth-child(odd) {
      width: 8%;

  }

  tr > td {
    vertical-align: middle;
  }

}
`


const CommuteDetailTable = () => {

  return (
    <SWrapper>
      <SCompanyInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>기본 정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>사원번호</td>
            <td><input type="text" readOnly/></td>
            <td>사원명</td>
            <td><input type="text" readOnly/></td>
          </tr>
          <tr>
            <td>부서명</td>
            <td><input type="text" readOnly/></td>
            <td>성별</td>
            <td><input type="text" readOnly/></td>
          </tr>
          <tr>
            <td>외국인여부</td>
            <td>
            <select size={1}>
              <option value="1">내국인</option>
              <option value="2">외국인</option>
            </select>
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </SCompanyInfo>
      <SCommuteInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>출퇴근정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>근무일자</td>
            <td><input type="text"/></td>
            <td>근무스케쥴</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>출근시각</td>
            <td><input type="text"/></td>
            <td>퇴근시각</td>
            <td><input type="text"/></td>
          </tr>
        </table>
      </SCommuteInfo>
      <SContractInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>근태 정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>외출</td>
            <td><input type="text"/></td>
            <td>복귀</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>출근판정</td>
            <td><input type="text"/></td>
            <td>퇴근판정</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>지각시간</td>
            <td><input type="text"/></td>
            <td>외출시간</td>
            <td><input type="text"/></td>
          </tr>
        </table>
      </SContractInfo>
      <SAttendanceInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>연장근무정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>조기출근</td>
            <td><input type="text"/></td>
            <td>연장근무</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>야간근무</td>
            <td><input type="text"/></td>
            <td>휴일근무</td>
            <td><input type="text"/></td>
          </tr>
        </table>
      </SAttendanceInfo>
      <SWorkTimeSum>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>근무시간 합계</h3>
        </SCategoryContainer>
        <table>
          <tr style={{ verticalAlign: 'middle' }}>
            <td>실제근무시간</td>
            <td><input type="text"/></td>
            </tr>
            <tr>
            <td>비고</td>
            <td></td>
          </tr>
          </table>
      </SWorkTimeSum>
    </SWrapper>
  )
}

export default CommuteDetailTable;