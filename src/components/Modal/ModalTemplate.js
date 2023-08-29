import styled from "styled-components";


const SContainer = styled.div`



`

const ModalTemplate = ({isOpen, children, closeModal}) => {

  return (
    <SContainer>
      <div style={{ display: isOpen ? "block" : "none" }}> Modal</div>
      <div>{children}</div>
      <button onClick={closeModal}>닫기</button>
    </SContainer>
  )
}


export default ModalTemplate;