import styled from "styled-components";
import ModalTemplate from "./ModalTemplate";


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
  width: 35%;
  height: 50%;
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
  width: 60%;
  height: 65%;
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

  select {
    width: 100%;
    border: none;
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


const NewRateModal = ({isOpen, closeModal}) => {



  return (
    <SContainer style={{ display: isOpen ? "block" : "none" }}>
      <SModalBody>
        <p>급여항목을 생성 및 수정합니다.</p>
        <SModalTable>
          <table>
            <tr>
              <td>구분</td>
              <td>
                <select size={1}>
                  <option value={1}>지급</option>
                  <option value={2}>공제</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>항목명</td>
              <td>                
                <select size={1}>
                  <option value={1}>기본급</option>
                  <option value={1}>야간근로수당</option>
                  <option value={1}>연장근로수당</option>
                  <option value={1}>연차수당</option>
                  <option value={1}>인센티브(성과금)</option>
                  <option value={1}>휴일근로수당</option>
                  <option value={1}>휴일연장수당</option>

                  <option value={2}>건강보험</option>
                  <option value={2}>건강보험정산</option>
                  <option value={2}>고용보험</option>
                  <option value={2}>국민연금</option>
                  <option value={2}>근로소득세(소득세)</option>
                  <option value={2}>장기요양보험</option>
                  <option value={2}>장기요양보험정산</option>
                  <option value={2}>지방소득세</option>
                </select>
                </td>
            </tr>
            <tr>
              <td>과세여부</td>
              <td>
                <select size={1}>
                  <option value={1}>과세</option>
                  <option value={2}>비과세</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>절사단위</td>
              <td>                
                <select size={1}>
                  <option value={1}>일단위</option>
                  <option value={2}>십단위</option>
                  <option value={3}>백단위</option>
                  <option value={3}>천단위</option>
                  <option value={3}>만단위</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>사용여부</td>
              <td>
                <select size={1}>
                  <option value={1}>예</option>
                  <option value={2}>아니오</option>
                </select>
              </td>
            </tr>
          </table>
        </SModalTable>
        <SButtonCotainer>
          <SCancleButton onClick={closeModal}>취소</SCancleButton>
          <SSaveButton onClick={closeModal}>저장</SSaveButton>
        </SButtonCotainer>
      </SModalBody>
    </SContainer>
  )
}


export default NewRateModal;