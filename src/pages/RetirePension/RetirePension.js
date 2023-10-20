import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import React, { useCallback, useEffect, useRef, useState, useMemo, Children } from "react";
import { Header, RetirePensionTable } from "../../components";

import AppSidebar from "../../components/SideNav/AppSidebar";
import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton } from '@coreui/react'
import { BsPrinter, BsFileEarmarkExcel } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import { CompanyDummy } from "../../pages/CompanyManage/CompanyDummy";
import '../../aggrid.css';

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const SDotContainer = styled.div`
  display: flex;
  width: 10%;
  // border: 1px solid blue;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0 0.5em 0;

  line-height : 0;

  gap: 0.2em;
  
  > div {
    line-height : 1em;
    font-size: 1.2em;
  }

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

const RetirePension = () => {
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
          field: 'empl_no',
          headerName: '번호',
          headerCheckboxSelection: true,
          checkboxSelection: true,
          comparator: (valueA, valueB, nodeA, nodeB, isInverted) => {
            // 숫자로 변환하여 정렬
            const numA = parseFloat(valueA);
            const numB = parseFloat(valueB);
            return numA - numB;
          },
          initialWidth: 150, // 열 너비
        },
        {
          field: 'empl_nm',
          headerName: '성명',
          initialWidth: 200,
        },
        { field: 'empl_ssid', headerName: '주민번호', initialWidth: 170 },
        { field: 'empl_dept_nm', headerName: '입사일', initialWidth: 130 },
      ],
    },
    {
      headerName: '납입부담금',
      headerClass: 'center-align-header', // 열 헤더의 클래스를 지정
      children: [
        { field: 'empl_rspofc', headerName: '근속년수', initialWidth: 130 },
        { field: 'empl_encpnd', headerName: '평균 월급여', initialWidth: 170 },
        { field: 'empl_retire_date', headerName: '납입금액', initialWidth: 170 },
        { field: 'empl_retire_date', headerName: '비고', initialWidth: 150 },
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
        <Header breadcrumb={'급여관리 > 보험 및 세금 > 퇴직연금내역'} />
        <div className="body flex-grow-1 px-3">
          <CContainer lg className="mb-4">
            <h2 className="gap-2 mb-4">퇴직연금내역</h2>
            <CCard className="mb-4">
              <CCardBody>
                <CRow>
                  <CCol style={{ fontSize: '17px', alignItems: "center" }} className="col-8 d-flex justify-content-start">
                    <span>급여년월:&nbsp;</span>
                    <input size={200} type="date" name="pay_month" style={{ width: '110px' }} onChange={handleSelectChange} />
                    <span>&nbsp;급여종류:&nbsp;</span>
                    <select size={1} onChange={handleSelectChange}>
                      <option value="">선택해주세요</option>
                      <option value="1">월급여</option>
                      <option value="2">일급여</option>
                      <option value="3">년급여</option>
                    </select>
                    <span>&nbsp;급여이체일:&nbsp;</span>
                    <input size={200} type="date" name="pay_date" style={{ width: '110px' }} onChange={handleSelectChange} />
                  </CCol>
                  <CCol className="gap-2 d-flex justify-content-end">
                    <CButton color="dark" variant="outline" >검색</CButton>
                    <CButton color="dark" variant="outline" ><BsFileEarmarkExcel />내보내기</CButton>
                    <CButton color="dark" variant="outline"><BsPrinter />인쇄</CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>

            <SDotContainer>
              <GoPrimitiveDot color="#548AFF" />
              <div>공통항목</div>
            </SDotContainer>

            <CCard className="mb-4">
              <CCardBody>
                <CRow>
                  <CCol style={{ fontSize: '17px', alignItems: "center" }} className="gap-2 col-8 d-flex justify-content-start">
                    <span>은행명:</span>
                    <select size={1} name="trn_bank" onChange={handleSelectChange}>
                      <option value="은행선택">은행선택</option>
                      <option value="국민은행">국민은행</option>
                      <option value="신한은행">신한은행</option>
                      <option value="하나은행">하나은행</option>
                      <option value="우리은행">우리은행</option>
                      <option value="IBK기업은행">IBK기업은행</option>
                      <option value="SC제일은행">SC제일은행</option>
                      <option value="우체국">우체국</option>
                      <option value="농협은행">농협은행</option>
                      <option value="신협은행">신협은행</option>
                      <option value="수협은행">수협은행</option>
                      <option value="새마을금고">새마을금고</option>
                      <option value="대구은행">대구은행</option>
                      <option value="부산은행">부산은행</option>
                      <option value="광주은행">광주은행</option>
                      <option value="경남은행">경남은행</option>
                      <option value="전북은행">전북은행</option>
                      <option value="제주은행">제주은행</option>
                      <option value="산업은행">산업은행</option>
                      <option value="씨티은행">씨티은행</option>
                      <option value="산림조합">산림조합</option>
                      <option value="저축은행">저축은행</option>
                    </select>
                    <span>&nbsp;&nbsp;계좌번호:</span>
                    <input size={200} name="pay_date" style={{ width: '180px' }} onChange={handleSelectChange} />
                    <span>&nbsp;&nbsp;계좌주명:</span>
                    <input size={200} name="pay_date" style={{ width: '150px' }} onChange={handleSelectChange} />
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <h4 className="mb-1">※급여년월 1일 기준으로 만 1년 미만 근속자는 조회되지 않습니다. 납입금액은 100원 단위로 절사됩니다.</h4>
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
              {/* <RetirePensionTable /> */}
            </CCard>
          </CContainer>
        </div>
      </div>
    </div >
  )

}

export default RetirePension;