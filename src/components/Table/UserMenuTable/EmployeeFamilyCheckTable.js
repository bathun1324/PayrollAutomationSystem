import styled from "styled-components";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";

import NewFamilyModal from "../../Modal/NewFamilyModal";
import EmployeeDetailFamilyTable from "../EmployeeDetailFamilyTable";


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
  
  border-top: 2.5px solid ${({ theme }) => theme.colors.black050};

  gap: 2em;



  input {
    border: none;
    border-radius: 5px;
    padding: 15px;
  }

  th {
    height: 10%;
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


h3 {
  margin-right: 1em;
}


& > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: 1em;

  }
`

const SBasicInfo = styled.div`
  display: flex;
  flex-direction: column;


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

const SBasicInfoTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`

const SFamilyContainer = styled.div`
`


const EmployeeFamilyCheckTable = () => {

  // user 경로인 경우 추가버튼 숨김
  const location = useLocation();
  const isUserPath = location.pathname.startsWith('/user');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <SWrapper>
        <SBasicInfo>
          <SCategoryContainer>
            <GoPrimitiveDot color="#548AFF" />
            <h3>기본 정보</h3>
          </SCategoryContainer>
          <SBasicInfoTable>
            <table>
              <tr>
                <td>사원번호</td>
                <td></td>
                <td>사원명</td>
                <td></td>
              </tr>
              <tr>
                <td>주민등록번호</td>
                <td></td>
                <td>성별</td>
                <td></td>
              </tr>
            </table>
          </SBasicInfoTable>
        </SBasicInfo>
        <SFamilyContainer>
          <SFamilyInfo>
            <SCategoryContainer>
              <GoPrimitiveDot color="#548AFF" />
              <h3>가족사항</h3>
              {/* user권한 페이지일경우 추가버튼 숨김 */}
              {isUserPath ? null : (
                <>
                  <SAddButton onClick={openModal}>추가</SAddButton>
                  <NewFamilyModal isOpen={isModalOpen} closeModal={closeModal} />
                </>
              )}
            </SCategoryContainer>
          </SFamilyInfo>
        </SFamilyContainer>
      </SWrapper>
    </>
  )
}

export default EmployeeFamilyCheckTable;