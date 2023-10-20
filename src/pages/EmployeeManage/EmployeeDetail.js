import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { EmployeeDetailFamilyTable, EmployeeDetailTable, Header, SideNav } from "../../components";

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
    background-color : ${({ theme }) => theme.colors.blue010};
  }
`



const EmployeeDetail = () => {
  const infos = JSON.parse(localStorage.getItem('user_info'));
  const login_no = infos.empl_no; // 로그인 id 사원번호
  const perm = infos.perm_id; // 권한 id (관리자:01, 운영자:11, 사용자:21)
  const corp_no = infos.corp_no; // 회사 id
  const navigate = useNavigate();

  const { id } = useParams();

  const [table, setTable] = useState([]); // HRM_EMPL 기본정보 ~ 부서정보
  const [tableattend, setTableAtend] = useState([]); // HRM_ATEND 근태정보
  const [tablesalary, setTableSalary] = useState([]); // HRM_SALARY 급여정보
  const [tablefrgnr, setTableFrgnr] = useState([]); // HRM_FRGNR 외국인정보
  const [tablefmly, setTablefmly] = useState([]); // 가족사항

  useEffect(() => {
    if (id) {
      axios.get(`http://13.125.117.184:8000/get_detailtable/?empl_id_detail=${id}&corp_no=${corp_no}`)
        .then((response) => {
          setTable(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (perm == "21") {
      axios.get(`http://13.125.117.184:8000/get_detailtable/?empl_id_detail=${login_no}&corp_no=${corp_no}`)
        .then((response) => {
          setTable(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    if (id) {
      axios.get(`http://13.125.117.184:8000/get_detailattend/?empl_id_detail=${id}&corp_no=${corp_no}`)
        .then((response) => {
          setTableAtend(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (perm == "21") {
      axios.get(`http://13.125.117.184:8000/get_detailattend/?empl_id_detail=${login_no}&corp_no=${corp_no}`)
        .then((response) => {
          setTableAtend(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    if (id) {
      axios.get(`http://13.125.117.184:8000/get_detailsalary/?empl_id_detail=${id}&corp_no=${corp_no}`)
        .then((response) => {
          setTableSalary(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (perm == "21") {
      axios.get(`http://13.125.117.184:8000/get_detailsalary/?empl_id_detail=${login_no}&corp_no=${corp_no}`)
        .then((response) => {
          setTableSalary(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    if (id) {
      axios.get(`http://13.125.117.184:8000/get_detailfrgnr/?empl_id_detail=${id}&corp_no=${corp_no}`)
        .then((response) => {
          setTableFrgnr(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (perm == "21") {
      axios.get(`http://13.125.117.184:8000/get_detailfrgnr/?empl_id_detail=${login_no}&corp_no=${corp_no}`)
        .then((response) => {
          setTableFrgnr(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    if (id) {
      axios.get(`http://13.125.117.184:8000/get_detailtablefmly/?empl_id_detail=${id}&corp_no=${corp_no}`)
        .then((response) => {
          setTablefmly(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (perm == "21") {
      axios.get(`http://13.125.117.184:8000/get_detailtablefmly/?empl_id_detail=${login_no}&corp_no=${corp_no}`)
        .then((response) => {
          setTablefmly(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);



  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header breadcrumb={'인사관리 > 사원정보 > 사원정보 상세'} />
        <div className="body flex-grow-1 px-5">
          <h2 className="gap-2 mb-4">사원정보 상세</h2>
          <CCard style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '4.5rem'
          }}>
            {(perm == "21") ? (<EmployeeDetailTable id={login_no} table={table} tableattend={tableattend} tablesalary={tablesalary} tablefrgnr={tablefrgnr} />)
              : (<EmployeeDetailTable id={id} table={table} tableattend={tableattend} tablesalary={tablesalary} tablefrgnr={tablefrgnr} />)}
            <EmployeeDetailFamilyTable tablefmly={tablefmly} />
          </CCard>
        </div>
      </div>
    </div>
  )

}

export default EmployeeDetail;