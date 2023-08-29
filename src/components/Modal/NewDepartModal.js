import styled from "styled-components";
import ModalTemplate from "./ModalTemplate";
import React, { useState } from 'react';
import axios from 'axios';  // axios를 임포트하여 API 호출에 사용


const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`

const SModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 40%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 50%;  
  left: 50%;   
  transform: translate(-50%, -50%);

  p {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.1em;
  }


`
const SModalTable = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
  
  table {    
    width: 90%;
    height: 80%;
    text-align: right;
  }
  
  
  tr > td {
    padding: 10px;
    font-weight: 500;
    border: 2px solid #ccc;
    vertical-align: middle;

    :nth-child(odd) {
      background-color: ${({theme}) => theme.colors.blue010};
    }


  input {
      border: none;
      width: 100%;
      height: 100%;
    }
  }


`
const SButtonCotainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8em;
  width: 80%;

`

const SCancleButton = styled.button`
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

const SSaveButton = styled.button`
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


const NewDepartModal = ({isOpen, closeModal}) => {
  const [departmentInfo, setDepartmentInfo] = useState({
    deptName: '',
    status: '',
    regDate: '',
    regId: '',
    modDate: '',
    modId: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDepartmentInfo({
      ...departmentInfo,
      [name]: value,
    });
  };

  const handleSave = () => {
    axios.post('http://127.0.0.1:8000/post_departments/', departmentInfo)  // 백엔드 API 엔드포인트에 맞게 수정
      .then(response => {
        console.log('부서 정보 저장 성공:', response.data);
        closeModal();
      })
      .catch(error => {
        console.error('API 호출 에러:', error);
      });
  };


  return (
    <SContainer style={{ display: isOpen ? "block" : "none" }}>
      <SModalBody>
        <p>부서 정보를 생성 및 수정합니다.</p>
        <SModalTable>
        <table>
          <tbody>
            <tr>
              <td>부서명</td>
              <td><input type="text" name="deptName" value={departmentInfo.deptName} onChange={handleInputChange}/></td>
              <td>상태</td>
              <td><input type="text" name="status" value={departmentInfo.status} onChange={handleInputChange}/></td>
            </tr>
            <tr>
              <td>등록일시</td>
              <td><input type="text" name="regDate" value={departmentInfo.regDate} onChange={handleInputChange}/></td>
              <td>등록자</td>
              <td><input type="text" name="regId" value={departmentInfo.regId} onChange={handleInputChange}/></td>
            </tr>
            <tr>
              <td>수정일시</td>
              <td><input type="text" name="modDate" value={departmentInfo.modDate} onChange={handleInputChange}/></td>
              <td>수정자</td>
              <td><input type="text" name="modId" value={departmentInfo.modId} onChange={handleInputChange}/></td>
            </tr>
          </tbody>
        </table>
        </SModalTable>
        <SButtonCotainer>
          <SCancleButton onClick={closeModal}>취소</SCancleButton>
          <SSaveButton onClick={handleSave}>저장</SSaveButton>
        </SButtonCotainer>
      </SModalBody>
    </SContainer>
  )
}


export default NewDepartModal;