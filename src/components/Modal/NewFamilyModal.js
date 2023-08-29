import styled from "styled-components";
import ModalTemplate from "./ModalTemplate";
import { useState, useEffect } from "react";


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
  height: auto;
  min-height: 50%;
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
    height: 70%;
    text-align: right;
  }
  
  
  tr > td {
    padding: 7px;
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

  padding: 1.5em 0;

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


const NewFamilyModal = ({isOpen, closeModal, parentFunction} ) => {

  const [data, setdata] = useState({
    constnt_type: '',
    reltn: '',
    constnt_nm: '',
    brthdy: '',
    livtgt_yn: 'Y',
    dednhope_yn: 'Y',
    dspsn_yn: 'Y'
  });

  const fmlyChange = (event) => {
    const { name, value } = event.target;
    setdata({
      ...data,
      [name]: value,
    });
  };

  return (
    <SContainer style={{ display: isOpen ? "block" : "none" }}>
      <SModalBody>
        <p>가족 사항을 생성 및 수정합니다.</p>
        <SModalTable>
          <table>
            <tbody>
              <tr>
                <td>구성원구분</td>
                <td><input type="text" name="constnt_type" value={data.constnt_type} onChange={fmlyChange}/></td>
                <td>관계</td>
                <td><input type="text" name="reltn" value={data.reltn} onChange={fmlyChange}/></td>
              </tr>
              <tr>
                <td>이름</td>
                <td><input type="text" name="constnt_nm" value={data.constnt_nm} onChange={fmlyChange}/></td>
                <td>생년월일</td>
                <td><input type="date" name="brthdy" value={data.brthdy} onChange={fmlyChange}/></td>
              </tr>
              <tr>
                <td>동거여부</td>
                <td>
                  <select size={1} name="livtgt_yn" value={data.livtgt_yn} onChange={fmlyChange}>
                    <option value="O">O</option>
                    <option value="x">X</option>
                  </select>
                </td>
                <td>공제희망여부</td>
                <td>                
                  <select size={1} name="dednhope_yn" value={data.dednhope_yn} onChange={fmlyChange}> 
                    <option value="O">O</option>
                    <option value="X">X</option>
                  </select>
                </td>
                </tr>
                <tr>
                <td>장애인여부</td>
                <td>                
                  <select size={1} name="dspsn_yn" value={data.dspsn_yn} onChange={fmlyChange}>
                    <option value="O">O</option>
                    <option value="X">X</option>
                  </select>
                </td>
                <td></td>
                <td>                
                </td>
              </tr>
            </tbody>
          </table>
        </SModalTable>
        <SButtonCotainer>
          <SCancleButton onClick={closeModal}>취소</SCancleButton>
          <SSaveButton onClick={() => { closeModal(); parentFunction(data); }}>저장</SSaveButton>
        </SButtonCotainer>
      </SModalBody>
    </SContainer>
  )
}


export default NewFamilyModal;