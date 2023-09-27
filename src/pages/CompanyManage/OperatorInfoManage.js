import styled from "styled-components";
import { useState } from "react";
import OperatorInfoTable from "../../components/Table/OperatorMenuTable/OperatorInfoTable";
import { Header } from "../../components";
import { RiGroup2Fill, RiUserSettingsLine, } from "react-icons/ri";

// import AppSidebar from "../../components/SideNav/AppSidebar";
import AppSidebar from "../../components/SideNav/AppSidebar";
import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton } from '@coreui/react'


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
  height: calc(100vh - 60px);
  padding: 30px;
  width: 100%;

`

const SContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 8%;
  margin: 10px;
  padding: 10px 20px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  font-size: 1.2em;

& > input {
  border: none;
  height: 1em;
  font-size: 1em;
  width: 5%;

}

`

const SCategory = styled.div`
  width: 90%;

  padding: 10px 0px;
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black110};

`

const SButtonContainer = styled.div`
  display: flex;
  min-width: 30%;
  justify-content: flex-end;
  gap: 10px;
`

const SSerchButton = styled.button`
  flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({ theme }) => theme.colors.blue090};
  border-radius: 3px;
  border: none;

  
  &:hover{  
    background-color : skyblue;
  }
`

const SNewButton = styled.button`
  flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({ theme }) => theme.colors.blue090};
  border-radius: 3px;
  border: none;

  &:hover{  
    background-color : skyblue;
  }

`

const SCompanyTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  // height: 80%;
  margin: 10px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`



const SInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-width: 30%;
  gap: 1.1em;

  input {
    width: 8em;
    padding: 0.5em;
  }
`

const OperatorInfoManage = ({ userRole, menuItems, iconMapping }) => {

  const [searchtext, setSearchtext] = useState([]);

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSearchtext(prevState => ({ ...prevState, [name]: value }));
  };



  return (

    <div>
      {/* <SideNav userRole={"operator"} menuItems={operatorMenuItems} iconMapping={operatorIconMapping}/> */}
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <h2 className="gap-2 mb-4">회사관리&nbsp;{'>'}&nbsp;운영자정보</h2>
            <CCard className="mb-4">
              <CCardBody>
                <CRow>
                  <CCol style={{ fontSize: '17px', alignItems: "center" }} className="col-5 d-flex justify-content-start">
                    <span>운영자명:&nbsp;</span>
                    <input size={200} name="operator_nm" style={{ width: '110px' }} onChange={handleSelectChange} />
                  </CCol>
                  <CCol className="gap-2 d-flex justify-content-end">
                    <CButton color="dark" variant="outline" >검색</CButton>
                    <CButton color="dark" variant="outline">신규</CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <CCard style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <OperatorInfoTable />
            </CCard>
          </CContainer>
        </div>
      </div>
    </div >
  )

}

export default OperatorInfoManage;