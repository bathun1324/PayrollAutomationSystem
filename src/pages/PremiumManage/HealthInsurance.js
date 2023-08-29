import styled from "styled-components";
import { Link } from "react-router-dom";



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
  border-top: 1.5px solid ${({theme}) => theme.colors.black110};


`

const SSaveButtonContainer = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;

  button {
  flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  font-weight: 600;
  background-color: ${({theme}) => theme.colors.blue090};
  border-radius: 3px;
  border: none;

  &:hover{  
    background-color : skyblue;
    }
  }
`

const SContainer = styled.div`
  padding: 30px 0px 10px 0px;

`
const SInfoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1em;
  font-weight: 500;
  
  input {
    width: auto;
    height: 2em;
    border-radius: 3px;
    border: 2px solid ${({theme}) => theme.colors.black050}
  }

`


const HealthInsurance = () => {

  return (
    <SWrapper>
      <SContainer>
        <SInfoSection>
          <span>건강보험</span>
          <span> ※ 건강보험요율에서 근로자와 사업주가 각각 절반을 부담</span>
        </SInfoSection>
        <SInfoSection>
          <div>기준일자 : </div>
          <input type="date" />
        </SInfoSection>
        <SInfoSection>
          <span>적용일시 : </span>
          <span>2023-06-07 10:23:12</span>
        </SInfoSection>
        <SInfoSection>
          <span>보수월액</span>
          <span>x</span>
          <input/>
          <span>%</span>
          <span>(</span>
          <span>최저한도</span>
          <input type="text"/>
          <span>최고한도 </span>
          <input type="text"/>
          <span>)</span>
        </SInfoSection>
      </SContainer>
      <SSaveButtonContainer>
        <Link to={`https://www.nhis.or.kr/nhis/index.do`}>근로복지공단 건강보험 알아보기</Link>
        <button>저장</button>
      </SSaveButtonContainer>
    </SWrapper>

  )


}

export default HealthInsurance;