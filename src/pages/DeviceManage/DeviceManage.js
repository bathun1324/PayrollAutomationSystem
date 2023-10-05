import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import React, { useState, useContext, useEffect } from "react";
import { Header } from "../../components";
import { DeviceManageTable } from "../../components";
import { useNavigate } from "react-router-dom";

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

  font-size: 1.2em;

input {
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 1em;
    width: 15%;
  
  }

  select {
    border: 1px solid #ccc;
    border-radius: 3px;

  }

`

const SInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 30%;
  gap: 1.1em;
  

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

const SOutButton = styled.button`
  flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({ theme }) => theme.colors.black110};
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

const DeviceManage = () => {
  const navigate = useNavigate();
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
        <Header breadcrumb={'기기관리 > 비콘단말기 관리'} />
        <div className="body flex-grow-1 px-5">

          <h2 className="gap-2 mb-4">비콘단말기 관리</h2>
          <CCard className="mb-4">
            <CCardBody>
              <CRow>
                <CCol style={{ fontSize: '17px', alignItems: "center" }} className="col-9 d-flex justify-content-start">
                  <span>설치위치:&nbsp;</span>
                  <input size={200} name="loc" style={{ width: '110px' }} onChange={handleSelectChange} />
                  <span>&nbsp;&nbsp;모델명:&nbsp;</span>
                  <input size={200} type="model_nm" name="start_reg_dtime" style={{ width: '110px' }} onChange={handleSelectChange} />
                  <span>&nbsp;&nbsp;상태:&nbsp;&nbsp;</span>
                  <select size={1} name="state">
                    <option value="">선택</option>
                    <option value="1">사용</option>
                    <option value="2">미사용</option>
                  </select>
                </CCol>
                <CCol className="gap-2 d-flex justify-content-end">
                  <CButton color="dark" variant="outline" >검색</CButton>
                  <CButton color="dark" variant="outline" onClick={() => navigate('./devicedetail')} >신규</CButton>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
          <CCard style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <DeviceManageTable />
          </CCard>
        </div>
      </div>
    </div >
  )

}

export default DeviceManage;