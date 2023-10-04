import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header, SideNav, EmployeeDetailTable, EmployeeDetailFamilyTable } from "../../../components";
import { VacationFormTable } from "../../../components";
import { RiUserSettingsLine, RiGroup2Fill, } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { MdLibraryBooks } from "react-icons/md";
import React, { useState, useContext, useEffect } from "react";

import AppSidebar from "../../../components/SideNav/AppSidebar";
import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton } from '@coreui/react'

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
  color: ${({ theme }) => theme.colors.black110};

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
  background-color: ${({ theme }) => theme.colors.blue090};
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
  background-color: ${({ theme }) => theme.colors.blue090};
  border-radius: 3px;
  border: none;

  &:hover{  
    background-color : skyblue;
  }
`
const SPrintBtn = styled(SSaveBtn)`
  background-color: ${({ theme }) => theme.colors.black110};

`



const VacationForm = ({ userRole, menuItems, iconMapping }) => {
  const [searchtext, setSearchtext] = useState([]);

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSearchtext(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header breadcrumb={'전자결재 > 휴가 > 휴가신청서 작성'} />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <h2 className="gap-2 mb-4">휴가신청서 작성</h2>
            <CCard className="mb-4">
              <CCardBody>
                <CRow>
                  <CCol className="gap-2 d-flex justify-content-end">
                    <CButton color="dark" variant="outline" >취소</CButton>
                    <CButton color="dark" variant="outline">저장</CButton>
                    <CButton color="dark" variant="outline">인쇄</CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <CCard style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <VacationFormTable />
            </CCard>
          </CContainer>
        </div>
      </div>
    </div >
  )

}

export default VacationForm;