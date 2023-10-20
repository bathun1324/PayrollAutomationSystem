import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { CompanyDetailTable, Header, SideNav } from "../../components";

import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton, CInputGroup, CFormInput } from '@coreui/react'
import '../../components/Table/styles.css'
import AppSidebar from "../../components/SideNav/AppSidebar";


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



const CompanyDetail = () => {

  const { companyId } = useParams();
  const [table, setTable] = useState([]);

  console.log(companyId);

  useEffect(() => {
    if (companyId) {
      axios.get(`http://13.125.117.184:8000/get_detailtable/?cmpy_detail=${companyId}`)
        .then((response) => {
          setTable(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header breadcrumb={'회사정보 > 회사정보 > 회사정보 상세'} />
        <div className="body flex-grow-1 px-5">
          <h2 className="gap-2 mb-4">회사정보 상세</h2>
          <CCard style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '4.5rem',
          }}>
            <CompanyDetailTable companyId={companyId}/>
          </CCard>
        </div>
      </div>
    </div> 

  )

}

export default CompanyDetail;