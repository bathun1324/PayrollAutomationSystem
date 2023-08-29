import styled from "styled-components";
import ModalTemplate from "./ModalTemplate";
import { mobile } from "../../assets/styles/Theme";
import { css } from "styled-components";



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
  justify-content: space-between;

  padding: 3em 0 2em 0;
  align-items: center;
  width: 28%;
  height: 25%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 50%;  
  left: 50%;   
  transform: translate(-50%, -50%);

  ${mobile(css`
  width: 50%;
  height: 15%;
  padding: 1.5em 0 1em 0;
  gap: 0.3em;
`)}

`
const SModalText = styled.div`

  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.1em;

  ${mobile(css`
    font-size: 0.5em;
    margin: 0.2em 0;
    justify-content: flex-start;
  `)}

`


const SButtonCotainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8em;
  width: 80%;

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

${mobile(css`
font-size: 0.5em;
margin: 0.2em 0;
justify-content: flex-start;
`)}

`


const NoAccountErrorModal = ({isOpen, closeModal}) => {

  return (
    <SContainer style={{ display: isOpen ? "block" : "none" }}>
      <SModalBody>
        <SModalText>계정이 존재하지 않습니다.</SModalText>
        <SModalText>계정생성은 관리자에게 문의하세요.</SModalText>
        <SButtonCotainer>
          <SSaveButton onClick={closeModal}>확인</SSaveButton>
        </SButtonCotainer>
      </SModalBody>
    </SContainer>
  )
}


export default NoAccountErrorModal;