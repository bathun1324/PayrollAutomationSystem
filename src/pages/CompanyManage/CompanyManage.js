import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import React, { useState, useContext, useEffect } from "react";
import { CompanyTable } from "../../components/Table/CompanyTable";
import { Link, useNavigate } from "react-router-dom";
import { Header, Footer } from "../../components";
import axios from "axios";
import { RiGroup2Fill, RiUserSettingsLine, } from "react-icons/ri";

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
  height: 100%;
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
  height: auto;
  margin: 10px;
  padding: 10px 20px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  font-size: 1em;

& > input {
  border: none;
  font-size: 1em;

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
  min-width: 40%;
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
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  margin: 10px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`
const CompanyManage = ({ userRole, menuItems, iconMapping }) => {

  const [searchtext, setSearchtext] = useState([]);

  const navigate = useNavigate();

  const handleNewEmployeeClick = () => {
    navigate('./companydetail');
  };


  const [companymanage, setCompanymanage] = useState([]); // departments 변수를 useState로 정의

  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_corporationinfo/")
      .then((response) => {
        setCompanymanage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSearchtext(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSearchClick = () => {
    let url

    if (searchtext.corp_nm || searchtext.start_date || searchtext.end_date) {
      url = `http://13.125.117.184:8000/search_corporationinfo/?start_date=${searchtext.start_date}&end_date=${searchtext.end_date}&corp_nm=${searchtext.corp_nm}`
    } else {
      url = "http://13.125.117.184:8000/get_corporationinfo/"
    }

    axios.get(url)
      .then((response) => {
        setCompanymanage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header breadcrumb={'회사관리 > 회사정보'} />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <h2 className="gap-2 mb-4">회사정보</h2>
            <CCard className="mb-4">
              <CCardBody>
                <CRow>
                  <CCol style={{ fontSize: '17px', alignItems: "center" }} className="col-9 d-flex justify-content-start">
                    <span>회사명:&nbsp;</span>
                    <input size={200} name="corp_nm" style={{ width: '110px' }} onChange={handleSelectChange} />
                    <span>&nbsp;&nbsp;등록일:&nbsp;</span>
                    <input size={200} type="date" name="start_date" style={{ width: '110px' }} onChange={handleSelectChange} />
                    <span>&nbsp;&nbsp;~&nbsp;&nbsp;</span>
                    <input size={200} type="date" name="end_date" style={{ width: '110px' }} onChange={handleSelectChange} />

                  </CCol>
                  <CCol className="gap-2 d-flex justify-content-end">
                    <CButton color="dark" variant="outline" onClick={handleSearchClick}>검색</CButton>
                    <CButton color="dark" variant="outline" onClick={() => handleNewEmployeeClick()}>신규</CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <CCard style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <CompanyTable companymanage={companymanage} />
            </CCard>
          </CContainer>
        </div>
      </div>
    </div >
  );
};

export default CompanyManage;