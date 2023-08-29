import styled from "styled-components";


const SWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  position: ${(props)=> props.position};
  left: 0;
  bottom: 0;

  width: 100%;
  height: 6vh;
  padding: 10px;

  background-color: rgb(247, 247, 247);

`
const SContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: rgb(127, 127, 127);


& > div {
  margin-right: 30px;
}

`


const Footer = ()=> {

  return (
    <SWrapper position='fixed'>
      <SContainer>
        <div>고객센터 0000 - 0000</div>
        <div>자주하는 질문</div>
      </SContainer>
    </SWrapper>
  )
}

export default Footer;