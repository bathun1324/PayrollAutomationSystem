import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import React, { useState, useContext, useEffect } from "react";
import PayrollManageTable from "../../components/Table/PayrollManageTable";
import { Header } from "../../components";

import AppSidebar from "../../components/SideNav/AppSidebar";
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
  width: 80%;

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
  height: 80%;
  margin: 10px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`



const SInputContainer = styled.div`
  display: flex;
  width: 70%;
  min-width: 30%;
  gap: 1.1em;
`

const PayrollManage = () => {

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

  const [tabledata, setTabledata] = useState([]);
  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_payroll/")
      .then((response) => {
        setTabledata(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);



  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header breadcrumb={'급여관리 > 급여관리 > 급여관리'} />
        <div className="body flex-grow-1 px-5">
          <h2 className="gap-2 mb-4">급여관리</h2>
          <CCard className="mb-4">
            <CCardBody>
              <CRow>
                <CCol style={{ fontSize: '17px', alignItems: "center" }} className="col-9 d-flex justify-content-start">
                  <span>검색기간:&nbsp;</span>
                  <input size={200} type="date" name="date" style={{ width: '110px' }} onChange={handleSelectChange} />
                  <span>&nbsp;&nbsp;부서명:&nbsp;</span>
                  {/* name값주기 */}
                  <select size={1} onChange={handleSelectChange}>
                    <option value="">선택해주세요</option>
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                  <span>&nbsp;&nbsp;급여종류&nbsp;&nbsp;</span>
                  <select size={1} onChange={handleSelectChange}>
                    <option value="">선택해주세요</option>
                    <option value="1">월급여</option>
                    <option value="2">시급여</option>
                    <option value="3">일급여</option>
                  </select>
                </CCol>
                <CCol className="gap-2 d-flex justify-content-end">
                  <CButton color="dark" variant="outline" >검색</CButton>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
          <CCard style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <PayrollManageTable tabledata={tabledata} />
          </CCard>

        </div>
      </div>
    </div >
  )

}

export default PayrollManage;