import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import React, { useCallback, useEffect, useRef, useState, useMemo, Children } from "react";
import DepartureInsuranceTable from "../../components/Table/DepartureInsuranceTable";
import { DepartureSumTable, Header } from "../../components";
import '../../print.css';

import AppSidebar from "../../components/SideNav/AppSidebar";
import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton } from '@coreui/react'
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

`;
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
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`

const DepartureInsurance = () => {
  const [searchtext, setSearchtext] = useState([]);

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSearchtext(prevState => ({ ...prevState, [name]: value }));
  };

  // 그리드
  const gridRef = useRef();
  const [columnDefs] = useState([
    {
      headerName: '',
      children: [
        {
          field: 'empl_no', headerName: '번호', headerCheckboxSelection: true, checkboxSelection: true,
          comparator: (valueA, valueB, nodeA, nodeB, isInverted) => {
            // 숫자로 변환하여 정렬
            const numA = parseFloat(valueA);
            const numB = parseFloat(valueB);
            return numA - numB;
          },
          initialWidth: 150, // 열 너비
        },
        { field: 'empl_nm', headerName: '성명', initialWidth: 200, cellRenderer: 'centerAlignRenderer' },
        { field: 'empl_ssid', headerName: '주민번호', initialWidth: 170 },
        { field: 'empl_dept_nm', headerName: '입사일', initialWidth: 150 },
      ],
    },
    {
      headerName: '납입부담금',
      headerClass: 'center-align-header', // 열 헤더의 클래스를 지정
      children: [
        { field: 'empl_rspofc', headerName: '보험료', initialWidth: 170 },
        { field: 'empl_encpnd', headerName: '납입횟수', initialWidth: 170 },
        { field: 'empl_retire_date', headerName: '보험사', initialWidth: 170 },
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
        <Header breadcrumb={'급여관리 > 보험 및 세금 > 출국만기보험내역'} />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <h2 className="gap-2 mb-4">출국만기보험내역</h2>
            <CCard className="mb-4">
              <CCardBody>
                <CRow>
                  <CCol style={{ fontSize: '17px', alignItems: "center" }} className="col-5 d-flex justify-content-start">
                    <span>급여년월:&nbsp;</span>
                    <input size={200} type="date" name="date" style={{ width: '110px' }} onChange={handleSelectChange} />
                  </CCol>
                  <CCol className="gap-2 d-flex justify-content-end">
                    <CButton color="dark" variant="outline" >검색</CButton>
                    <CButton color="dark" variant="outline" ><BsFileEarmarkExcel />내보내기</CButton>
                    <CButton color="dark" variant="outline"><BsPrinter />인쇄</CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <CCard style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <TableContainer id='printableArea'>
                <div>
                  {/* <SNewButton onClick={onBtnExport}>Download CSV export file</SNewButton>
        <SNewButton onClick={onBtPrint}>print</SNewButton>
        <SNewButton onClick={() => autoSizeAll(false)}>autosize</SNewButton> */}
                </div>

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
            </CCard>
          </CContainer>
        </div>
      </div>
    </div >
  )

}

export default DepartureInsurance;