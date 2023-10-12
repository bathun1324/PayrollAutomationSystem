import axios from "axios";
import styled from "styled-components";
import { Header } from "../../components";
import SideNav from "../../components/SideNav/SideNav";
import React, { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton, CInputGroup, CFormInput } from '@coreui/react'
import AppSidebar from "../../components/SideNav/AppSidebar";

import { useSelector, useDispatch } from 'react-redux'

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';

import { BsPrinter, BsFileEarmarkExcel } from "react-icons/bs";

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

const SInputContainer = styled.div`
  display: flex;
  width: auto;
  // min-width: 30%;
  gap: 1.1em;
  font-size: 0.9em;
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

const EmployeeCommuteManage = () => {

  const [commutemanage, setACommutemanage] = useState([]); // departments 변수를 useState로 정의
  const gridRef = useRef();
  const [searchtext, setSearchtext] = useState([]); // 

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSearchtext(prevState => ({ ...prevState, [name]: value }));
  };

  const [columnDefs] = useState([
    {
      field: 'empl_no', headerName: '사원번호', headerCheckboxSelection: true, checkboxSelection: true,
      comparator: (valueA, valueB, nodeA, nodeB, isInverted) => {
        // 숫자로 변환하여 정렬
        const numA = parseFloat(valueA);
        const numB = parseFloat(valueB);
        return numA - numB;
      },
      initialWidth: 150, // 열 너비
    },
    { field: 'empl_nm', headerName: '사원명', initialWidth: 100 },
    { field: 'empl_dept_nm', headerName: '부서명', initialWidth: 150 },
    { field: 'empl_atend_time', headerName: '출근시간', initialWidth: 130 },
    { field: 'empl_lvofc_time', headerName: '퇴근시간', initialWidth: 100 },
    { field: 'empl_atend_jdgmnt', headerName: '출근판정', initialWidth: 200 },
    { field: 'empl_lvofc_jdgmnt', headerName: '퇴근판정', initialWidth: 160 },
    { field: 'remark', headerName: '비고', initialWidth: 160 },
  ]);


  //        <td><Link to={`/admin/employee/employeedetail/${companydata.empl_no}`}>{companydata.empl_nm}</Link></td>
  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      filter: true,
      resizable: true,
      rowSelection: 'multiple',


    };
  }, []);

  const gridOptions = {
    rowSelection: 'multiple', // 채크박스 여러개선택
    paginationAutoPageSize: true,
    pagination: true,
  };

  const onGridReady = (params) => {
    gridRef.current = params.api;
  };

  const handleSearchClick = () => {
    let url

    if (searchtext.start_date || searchtext.end_date || searchtext.dept_nm || searchtext.action) {
      url = `http://13.125.117.184:8000/search_commutemanage/?start_date=${searchtext.start_date}&end_date=${searchtext.end_date}&department=${searchtext.dept_nm}&attendyn=${searchtext.action}`
    } else {
      url = "http://13.125.117.184:8000/get_commutemanage/"
    }

    axios.get(url)
      .then((response) => {
        setACommutemanage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_commutemanage/")
      .then((response) => {
        setACommutemanage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const onBtExport = useCallback(() => {
    // api가 정의되어 있을 때만 exportDataAsCsv를 호출
    if (gridRef.current) {
      const selectedNodes = gridRef.current.getSelectedNodes();
      const selectedData = selectedNodes.map((node) => node.data);
      const selectedDataString = selectedData.map((node) => node.make + ' ' + node.model).join('\n');
      const params = {
        skipHeader: false,
        columnGroups: true,
        skipFooters: true,
        skipGroups: true,
        skipPinnedTop: true,
        skipPinnedBottom: true,
        allColumns: false,
        onlySelected: false,
        fileName: 'export.csv',
        columnSeparator: ',',
      };
      const list = gridRef.current.selectionService.selectedNodes
      console.log(list); // list의 data에 선택한 행 값들 들어가있음
      gridRef.current.exportDataAsCsv(params);
    }
  }, []);


  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header breadcrumb={'근태관리 > 근태현황 > 출퇴근 조회'} />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <h2 className="gap-2 mb-4">출퇴근 조회</h2>
            <CCard className="mb-4">
              <CCardBody>
                <CRow>
                  <CCol style={{ fontSize: '17px', alignItems: "center" }} className="col-8 d-flex justify-content-start">
                    <span>검색기간:&nbsp;</span>
                    <input size={200} type="date" name="start_date" style={{ width: '110px' }} onChange={handleSelectChange} />
                    <span>&nbsp;&nbsp;~&nbsp;</span>
                    <input size={200} type="date" name="end_date" style={{ width: '110px' }} onChange={handleSelectChange} />
                    <span>&nbsp;&nbsp;부서명:&nbsp;</span>
                    <input size={200} name="dept_nm" style={{ width: '110px' }} onChange={handleSelectChange} />
                    <span>&nbsp;&nbsp;출/퇴근 여부:&nbsp;</span>
                    <input size={200} name="action" style={{ width: '110px' }} onChange={handleSelectChange} /></CCol>
                  <CCol className="gap-2 d-flex justify-content-end ">
                    <CButton color="dark" variant="outline" onClick={handleSearchClick}>검색</CButton>
                    <CButton color="dark" variant="outline" onClick={onBtExport}><BsFileEarmarkExcel />내보내기</CButton>
                    <CButton color="dark" variant="outline" ><BsPrinter />인쇄</CButton>
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
                  rowData={commutemanage}
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
    </div>
  )

}

export default EmployeeCommuteManage;