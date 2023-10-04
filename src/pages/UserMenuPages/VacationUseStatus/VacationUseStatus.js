import styled from "styled-components";
import SideNav from "../../../components/SideNav/SideNav";
import React, { useState, useContext, useEffect } from "react";
import { UserRoleContext, MenuItemsContext } from "../../../App";
import { VacationUseStatusTable } from "../../../components";
import { Header } from "../../../components";
import { RiUserSettingsLine, RiGroup2Fill, } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { GoPrimitiveDot } from "react-icons/go";
import { MdLibraryBooks } from "react-icons/md";

import AppSidebar from "../../../components/SideNav/AppSidebar";
import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton } from '@coreui/react'
import axios from "axios";


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

& > input {
  border: none;
  font-size: 1em;
  width: 5%;

}

`

const SInputContainer = styled.div`
  display: flex;
  width: auto;
  min-width: 30%;
  gap: 1.1em;

  input {
    width: 40%;
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
const SPrintButton = styled.button`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 80%;
  margin: 10px;
  padding: 2em 0;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`


const SCategoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  align-items: center;
  gap: 5px;
  font-size: 1.2em;

  h3 {
    width: 15%;
  }

  div {
    justify-content: space-evenly;
  }

  input {
    border: none;
    margin: 0.5em;
    padding: 1px;
    width: 40%;
  }

`
const SEmployeeSearchContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em;

`


const VacationUseStatus = ({ userRole, menuItems, iconMapping }) => {

  const [searchtext, setSearchtext] = useState([]);

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSearchtext(prevState => ({ ...prevState, [name]: value }));
  };
  const [departments, setDepartments] = useState([]); // departments 변수를 useState로 정의
  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_departments/")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header breadcrumb={'전자결재 > 휴가 > 휴가신청 현황'} />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <h2 className="gap-2 mb-4">휴가신청 현황</h2>
            <CCard className="mb-4">
              <CCardBody>
                <CRow>
                  <CCol style={{ fontSize: '17px', alignItems: "center" }} className="col-5 d-flex justify-content-start">
                    <span>검색일자:&nbsp;</span>
                    <input size={200} type="date" name="date" style={{ width: '110px' }} onChange={handleSelectChange} />
                  </CCol>
                  <CCol className="gap-2 d-flex justify-content-end">
                    <CButton color="dark" variant="outline" >검색</CButton>
                    <CButton color="dark" variant="outline">내보내기</CButton>
                    <CButton color="dark" variant="outline">인쇄</CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <h3 className="mb-1">개인정보</h3>
            <CCard className="mb-4">
              <CCardBody>
                <CRow>
                  <CCol style={{ fontSize: '17px', alignItems: "center" }} className="col-13 d-flex justify-content-start">
                    <span>사원번호:&nbsp;</span>
                    <input size={200} name="empl_no" style={{ width: '110px' }} onChange={handleSelectChange} />
                    <span>&nbsp;사원명:&nbsp;</span>
                    <input size={200} name="empl_nm" style={{ width: '110px' }} onChange={handleSelectChange} />
                    <span>&nbsp;부서명:&nbsp;</span>
                    <select size={1} onChange={handleSelectChange}>
                      <option value="">선택해주세요</option>
                      {departments.map((dept) => (
                        <option key={dept.id} value={dept.id}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                    <span>&nbsp;직책:&nbsp;</span>
                    <input size={200} name="empl_rspofc" style={{ width: '110px' }} onChange={handleSelectChange} />
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <CCard style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <VacationUseStatusTable />
            </CCard>
          </CContainer>
        </div>
      </div>
    </div >
  )

}

export default VacationUseStatus;