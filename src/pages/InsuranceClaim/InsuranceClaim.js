import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import React, { useCallback, useEffect, useRef, useState, useMemo, Children } from "react";
import InsuranceClaimTable from "../../components/Table/InsuranceClaimTable";
import { Header } from "../../components";

import AppSidebar from "../../components/SideNav/AppSidebar";
import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton } from '@coreui/react'
import axios from "axios";
import { BsPrinter, BsFileEarmarkExcel } from "react-icons/bs";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import { CompanyDummy } from "../../pages/CompanyManage/CompanyDummy";


const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1.1em;
  text-align: left;
  line-height: 2.8;
  border-collapse: collaps;

  table {

  }

  table tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.blue010};

  }

  th {
    border-bottom: 2px solid #ccc;
    border-top: 2px solid #ccc;
    font-weight: 800;
    text-align: center;
  }

  tr > td {
    text-align: center;
    font-size: 1em;
    font-weight: 200;u
    color: rgb(40, 40, 40);
    cursor: pointer;
    hover:
  }

`

const InsuranceClaim = () => {
  const [searchtext, setSearchtext] = useState([]);

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSearchtext(prevState => ({ ...prevState, [name]: value }));
  };
  const infos = JSON.parse(localStorage.getItem('user_info'));
  const corp_no = infos.corp_no; // 회사 id'
  const [departments, setDepartments] = useState([]); // departments 변수를 useState로 정의
  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_departments/?corp_no=${corp_no}")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  const [selectedOptions, setSelectedOptions] = useState([]);

  // 옵션 목록
  const options = [
    '국민연금',
    '고용보험',
    '건강보험,장기요양보험',
    '정산항목',
    '소득세',
  ];

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        // 이미 선택된 경우 선택 해제
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        // 선택되지 않은 경우 선택
        return [...prevSelectedOptions, value];
      }
    });
  };


  // 그리드
  const gridRef = useRef();
  const [columnDefs] = useState([
    {
      field: 'empl_ssid', headerName: '', headerCheckboxSelection: true,
      checkboxSelection: true, initialWidth: 50
    },
    { field: 'empl_dept_nm', headerName: '사원번호', initialWidth: 120 },
    { field: 'empl_ssid', headerName: '직책', initialWidth: 120 },
    { field: 'empl_dept_nm', headerName: '성명', initialWidth: 120 },
    { field: 'empl_ssid', headerName: '입사일', initialWidth: 120 },
    {
      headerName: '합계',
      headerClass: 'center-align-header',
      children: [
        {
          field: 'empl_no',
          headerName: '지급액',
          initialWidth: 120,
        },
        {
          field: 'empl_nm',
          headerName: '과세기준',
          initialWidth: 120,
        },
        { field: 'empl_ssid', headerName: '국민연금', initialWidth: 120 },
        { field: 'empl_dept_nm', headerName: '고용보험', initialWidth: 120 },
        {
          headerName: '건강보험',
          headerClass: 'center-align-header',
          field: 'column1_1',
          children: [
            {
              headerName: '장기요양보험',
              field: 'column1_1_1',
              initialWidth: 130,
            },
          ],
        },
        {
          headerName: '건강보험정산',
          headerClass: 'center-align-header',
          field: 'column1_1',
          children: [
            {
              headerName: '장기요양보험정산',
              field: 'column1_1_1',
              initialWidth: 156,
            },
          ],
        },
        {
          headerName: '소득세', // 레벨 2
          headerClass: 'center-align-header', // 열 헤더의 클래스를 지정
          field: 'column1_1',
          children: [
            {
              headerName: '지방소득세', // 레벨 3
              field: 'column1_1_1',
              initialWidth: 120,
            },
          ],
        },
      ],
    },
    {
      headerName: '1월',
      headerClass: 'center-align-header',
      children: [
        {
          field: 'empl_no',
          headerName: '지급액',
          initialWidth: 120,
        },
        {
          field: 'empl_nm',
          headerName: '과세기준',
          initialWidth: 120,
        },
        { field: 'empl_ssid', headerName: '국민연금', initialWidth: 120 },
        { field: 'empl_dept_nm', headerName: '고용보험', initialWidth: 120 },
        {
          headerName: '건강보험',
          headerClass: 'center-align-header',
          field: 'column1_1',
          children: [
            {
              headerName: '장기요양보험',
              field: 'column1_1_1',
              initialWidth: 130,
            },
          ],
        },
        {
          headerName: '건강보험정산',
          headerClass: 'center-align-header',
          field: 'column1_1',
          children: [
            {
              headerName: '장기요양보험정산',
              field: 'column1_1_1',
              initialWidth: 156,
            },
          ],
        },
        {
          headerName: '소득세', // 레벨 2
          headerClass: 'center-align-header', // 열 헤더의 클래스를 지정
          field: 'column1_1',
          children: [
            {
              headerName: '지방소득세', // 레벨 3
              field: 'column1_1_1',
              initialWidth: 120,
            },
          ],
        },
      ],
    },
    {
      headerName: '2월',
      headerClass: 'center-align-header',
      children: [
        {
          field: 'empl_no',
          headerName: '지급액',
          initialWidth: 120,
        },
        {
          field: 'empl_nm',
          headerName: '과세기준',
          initialWidth: 120,
        },
        { field: 'empl_ssid', headerName: '국민연금', initialWidth: 120 },
        { field: 'empl_dept_nm', headerName: '고용보험', initialWidth: 120 },
        {
          headerName: '건강보험',
          headerClass: 'center-align-header',
          field: 'column1_1',
          children: [
            {
              headerName: '장기요양보험',
              field: 'column1_1_1',
              initialWidth: 130,
            },
          ],
        },
        {
          headerName: '건강보험정산',
          headerClass: 'center-align-header',
          field: 'column1_1',
          children: [
            {
              headerName: '장기요양보험정산',
              field: 'column1_1_1',
              initialWidth: 156,
            },
          ],
        },
        {
          headerName: '소득세', // 레벨 2
          headerClass: 'center-align-header', // 열 헤더의 클래스를 지정
          field: 'column1_1',
          children: [
            {
              headerName: '지방소득세', // 레벨 3
              field: 'column1_1_1',
              initialWidth: 120,
            },
          ],
        },
      ],
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      filter: true,
      resizable: true,
      rowSelection: 'multiple',
    };
  }, []);

  const gridOptions = {
    rowSelection: 'multiple',
    //paginationAutoPageSize: true,
    //pagination: true,
  };

  const onGridReady = (params) => {
    gridRef.current = params.api;
  };

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header breadcrumb={'급여관리 > 보험 및 세금 > 보험적취내역'} />
        <div className="body flex-grow-1 px-5">
          <h2 className="gap-2 mb-4">보험적취내역</h2>
          <CCard className="mb-4">
            <CCardBody>
              <CRow>
                <CCol style={{ fontSize: '17px', alignItems: "center" }} className="mb-3 col-9 d-flex justify-content-start">
                  <span>검색년도:&nbsp;</span>
                  <input size={200} type="date" name="st_date" style={{ width: '110px' }} onChange={handleSelectChange} />
                  <span>~</span>
                  <input size={200} type="date" name="end_date" style={{ width: '110px' }} onChange={handleSelectChange} />

                  <span>&nbsp;&nbsp;&nbsp;&nbsp;부서명:&nbsp;</span>
                  {/* name값주기 */}
                  <select size={1} onChange={handleSelectChange}>
                    <option value="">선택해주세요</option>
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;사원명:&nbsp;</span>
                  <input size={200} name="empl_nm" style={{ width: '110px' }} onChange={handleSelectChange} />

                </CCol>
                <CCol className="mb-3 gap-2 d-flex justify-content-end">
                  <CButton color="dark" variant="outline" >검색</CButton>
                  <CButton color="dark" variant="outline"><BsFileEarmarkExcel />내보내기</CButton>
                  <CButton color="dark" variant="outline"><BsPrinter />인쇄</CButton>
                </CCol>
                <CCol style={{ fontSize: '17px', alignItems: "center" }} className="gap-2 col-10 d-flex justify-content-start">
                  <span>보험적취항목(</span>
                  <input type="checkbox" value={"all"} />모두선택&nbsp;):
                  {options.map((option, index) => (
                    <label key={index}>
                      <input
                        type="checkbox"
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={handleCheckboxChange}
                      />
                      {option}&nbsp;&nbsp;
                    </label>))}
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
          <CCard style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '4.5rem'
          }}>
            <TableContainer id='printableArea'>
              <div id="myGrid" className="ag-theme-alpine" style={{ height: 550, width: '100%' }}>
                <AgGridReact
                  onGridReady={onGridReady} // onGridReady 이벤트 핸들러 설정
                  defaultColDef={defaultColDef}
                  rowData={CompanyDummy}
                  columnDefs={columnDefs}
                  gridOptions={gridOptions}
                  style={{ textAlign: 'center' }}
                  pagination={true}
                  paginationPageSize={10}   // gridRef.current.paginationSetPageSize(10);
                >
                </AgGridReact>
              </div>
            </TableContainer>
            {/* <InsuranceClaimTable /> */}
          </CCard>
        </div>
      </div>
    </div >
  )

}

export default InsuranceClaim;