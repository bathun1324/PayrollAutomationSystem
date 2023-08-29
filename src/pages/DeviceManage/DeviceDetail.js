import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header, SideNav } from "../../components";
import DeviceDetailTable from "../../components/Table/DeviceDetailTable";



const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

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

  padding: 30px;
  width: 100%;

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
  min-width: 90%;
  justify-content: flex-end;
  gap: 10px;
`

const SCancleBtn = styled.button`
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

const SSaveBtn = styled.button`
  flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({theme}) => theme.colors.blue090};
  border-radius: 3px;
  border: none;

  &:hover{  
    background-color : ${({theme}) => theme.colors.blue010};
  }
`



const DeviceDetail = () => {

  const navigate = useNavigate();

  return (
    <SWrapper>
      <Header />
      <SContentWrapper>
        <SideNav />
        <SContentContainer>
          <SCategory>비콘단말기 상세</SCategory>
          <SButtonContainer>
            <SCancleBtn onClick={()=>navigate(`/admin/device`)}>취소</SCancleBtn>
            <SSaveBtn onClick={()=>navigate(`/admin/device`)}>저장</SSaveBtn>
          </SButtonContainer>
          <DeviceDetailTable />
        </SContentContainer>
      </SContentWrapper>
    </SWrapper>    

  )

}

export default DeviceDetail;