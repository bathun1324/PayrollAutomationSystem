import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import { useState } from "react";
import { Header } from "../../components";
import NatPension from "./NatPension";
import HealthInsurance from "./HealthInsurance";
import { EmploymentInsurance } from ".";
import { LongTermCareInsurance } from ".";
import DepartInsurance from "./DepartInsurance";


const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const SContentWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #f8f9fa;
`

const SContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100% - 60px);
  padding: 30px;
  width: 100%;

`

const SContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 6%;
  margin: 10px;
  padding: 10px 20px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  font-size: 1.1em;

& > input {
  border: none;
  font-size: 1em;
  width: 5%;

}

`

const SInputContainer = styled.div`
  display: flex;
  width: 50%;
  min-width: 30%;
  gap: 1.1em;
`

const SCategory = styled.div`
  width: 90%;

  padding: 10px 0px;
  font-size: 28px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.black110};

`

const SButtonContainer = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: flex-start;
  gap: 20px;
`

const SNatButton = styled.button`
  flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({theme}) => theme.colors.black110};
  border-radius: 3px;
  border: none;

  
  &:hover{  
    background-color : skyblue;
  }
`

const SHealthButton = styled.button`
  flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({theme}) => theme.colors.black110};
  border-radius: 3px;
  border: none;

  &:hover{  
    background-color : skyblue;
  }

`

const SLongTermCareButton = styled.button`
  flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({theme}) => theme.colors.black110};
  border-radius: 3px;
  border: none;

  &:hover{  
    background-color : skyblue;
  }

`

const SEmployButton = styled.button`
  flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({theme}) => theme.colors.black110};
  border-radius: 3px;
  border: none;

  &:hover{  
    background-color : skyblue;
  }

`

const SCompanyTable = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 90%;
height: 80%;
margin: 10px;
gap: 10px;
background-color: white;
box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
border-radius: 5px;
`

const PremiumManage = () => {

  const [defaultpage, setDefaultpage] = useState(<NatPension />);

  return (
  <SWrapper>
    <Header />
    <SContentWrapper>
      <SideNav />
      <SContentContainer>
        <SCategory>
          <div>보험료 관리</div>
        </SCategory>
        <SContentHeader>
          <SButtonContainer>
            <SNatButton onClick={() => {
              setDefaultpage(<NatPension/>);
            }}>국민연금</SNatButton>
            <SHealthButton onClick={() => {
              setDefaultpage(<HealthInsurance/>);
            }}>건강보험</SHealthButton>
            <SEmployButton onClick={() => {
              setDefaultpage(<EmploymentInsurance/>);
            }}>고용보험</SEmployButton>
            <SLongTermCareButton onClick={() => {
              setDefaultpage(<LongTermCareInsurance/>);
            }}>장기요양보험</SLongTermCareButton>
            <SLongTermCareButton onClick={() => {
              setDefaultpage(<DepartInsurance/>);
            }}>출국만기보험</SLongTermCareButton>
          </SButtonContainer>
        </SContentHeader>
        <SCompanyTable >
          {defaultpage}
        </SCompanyTable>
      </SContentContainer>
    </SContentWrapper>
  </SWrapper>
  )

}

export default PremiumManage;