import styled from "styled-components"


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
const SConfirmButton = styled.button`
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

export const CheckAttendance = ({isOpen, closeModal}) => {

return (
  <SContainer>
    <SModalBody>
      <p>
      출석했습니다.</p>
      <SButtonCotainer>
          <SConfirmButton onClick={closeModal}>확인</SConfirmButton>
        </SButtonCotainer>
    </SModalBody>
  </SContainer>
)

}











export default AttendanceModal;