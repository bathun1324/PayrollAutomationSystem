import axios from "axios";
import React, { useCallback, useEffect, useRef, useState, useMemo } from "react";
import styled from "styled-components";
import { EmployeeListTable, Header } from "../../components";
import SideNav from "../../components/SideNav/SideNav";
import '../../print.css';
import AppSidebar from "../../components/SideNav/AppSidebar";
import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
//import '../../components/Table/styles.css'
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

const EmployeeListManage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchtext, setSearchtext] = useState([]); // 
  const [departments, setDepartments] = useState([]); // 부서
  const [role, setRole] = useState([]); // 직급
  const gridRef = useRef();

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSearchtext(prevState => ({ ...prevState, [name]: value }));
  };

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  useEffect(() => {
    // 시작할때 테이블 가져오기
    axios.get("http://13.125.117.184:8000/get_employeelist/")
      .then((response) => {
        setSearchResults(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  useEffect(() => {
    // 백엔드에서 직급 데이터 가져오기
    axios.get('http://13.125.117.184:8000/get_role/')
      .then((response) => {
        setRole(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  const handleSearchClick = () => {
    let url

    if (searchtext.encpnd || searchtext.deptno || searchtext.rspofc) {   // 입사일 부서번호 직급
      url = `http://13.125.117.184:8000/search_employeelist/?employee_encpnd=${searchtext.encpnd}&department_no=${searchtext.deptno}&employee_rspofc=${searchtext.rspofc}`
    } else {
      url = "http://13.125.117.184:8000/get_employeelist/"
    }

    axios.get(url)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // EmployeeListTable.js const
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
    { field: 'empl_ssid', headerName: '주민번호', initialWidth: 170 },
    { field: 'empl_dept_nm', headerName: '부서', initialWidth: 100 },
    { field: 'empl_rspofc', headerName: '직급', initialWidth: 100 },
    { field: 'empl_encpnd', headerName: '입사일자', initialWidth: 170 },
    { field: 'empl_retire_date', headerName: '재직기간', initialWidth: 170 },
    { field: 'empl_emplym_form', headerName: '고용형태', initialWidth: 140 },
    { field: 'empl_salary_form', headerName: '급여형태', initialWidth: 140 },
    { field: 'empl_bank', headerName: '은행', initialWidth: 120 },
    { field: 'empl_acc', headerName: '계좌번호', initialWidth: 170 },
    { field: 'empl_ssid_addr', headerName: '주소', initialWidth: 170 },
    { field: 'empl_telno', headerName: '연락처', initialWidth: 170 },
    { field: 'empl_email', headerName: '이메일', initialWidth: 170 },
  ]);
  // const onBtExport = useCallback(() => {
  //   // gridRef.current.api.exportDataAsExcel(); 상용버전 구매필요
  // }, []);

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



  const onSelectionChanged = (() => {
    //setSelectRowData(gridRef.current.api.getSelectedRows());
  });

  var autoGroupColumnDef = {
    headerName: 'Group',
    minWidth: 170,
    field: 'athlete',
    valueGetter: (params) => {
      if (params.node.group) {
        return params.node.key;
      } else {
        return params.data[params.colDef.field];
      }
    },
    headerCheckboxSelection: true,
    // headerCheckboxSelectionFilteredOnly: true,
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true,
    },
  };

  // 너비 맞추기
  const autoSizeAll = useCallback((skipHeader) => {
    const allColumnIds = [];
    gridRef.current.dragAndDropService.columnApi.getColumns().forEach((column) => {
      allColumnIds.push(column.getId());
    });
    gridRef.current.dragAndDropService.columnApi.autoSizeColumns(allColumnIds, skipHeader);
  }, []);


  const onFirstDataRendered = useCallback((params) => {
    gridRef.current.api.expandAll();
  }, []);

  // 출력(사용X)
  const onBtPrint = useCallback(() => {
    // 사이드바 접음
    if (sidebarShow) {
      dispatch({ type: 'set', sidebarShow: !sidebarShow })
    }
    const api = gridRef.current.api;
    setPrinterFriendly(api);
    setTimeout(function () {
      // 그리드 늘리기
      autoSizeAll(false);
      window.print();
      // 그리드 원상복구
      setNormal(api);
    }, 2000);
  }, [window.print]);

  const setPrinterFriendly = (api) => {
    const eGridDiv = document.querySelector('#myGrid');
    eGridDiv.style.width = '';
    eGridDiv.style.height = '';
    gridRef.current.setDomLayout('print');
  };

  const setNormal = (api) => {
    const eGridDiv = document.querySelector('#myGrid');
    eGridDiv.style.width = '100%';
    eGridDiv.style.height = '550px';
    gridRef.current.setDomLayout();
  };

  //선택한 행만 csv로 내보내기
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
        onlySelected: true,
        fileName: 'export.csv',
        columnSeparator: ',',
      };
      const list = gridRef.current.selectionService.selectedNodes
      console.log(list); // list의 data에 선택한 행 값들 들어가있음
      gridRef.current.exportDataAsCsv(params);
    }
  }, []);

  // 새 창 열어서 출력
  const handlePrint = () => {
    // 새 창 열기
    const printWindow = window.open('', '_blank');
    // 체크박스로 선택한 열데이터 가져오기
    const selectedRows = gridRef.current.getSelectedRows();
    printWindow.document.open();
    printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>표 예제</title>
        <style>
            /* 프린트 스타일 */
            @media print {
                /* 배경 그래픽 추가 (인쇄용) */
                body {
                    // background-image: url('your-background-image-print.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    
                }

                /* 테이블 스타일 (인쇄용) */
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px auto;
                }

                th {
                    background-color: #f2f2f2;
                    border: 1px solid #000;
                    text-align: center;
                    padding: 10px;
                    font-size: 7px;
                }

                td {
                    border: 1px solid #000;
                    padding: 10px;
                    text-align: center;
                    font-size: 8px;
                }

                tr:nth-child(even) {
                    background-color: #fff;
                }

                tr:nth-child(odd) {
                    background-color: #f2f2f2;
                }
            }
        </style>
    </head>
    <body>
        <h2 style="text-align: center;">직원명부조회</h2>
        <table>
            <tr>
                <th>번호</th>
                <th>사원번호</th>
                <th>사원명</th>
                <th>주민번호</th>
                <th>부서</th>
                <th>직급</th>
                <th>입사일자</th>
                <th>재직기간</th>
                <th>고용형태</th>
                <th>급여형태</th>
                <th>은행</th>
                <th>계좌번호</th>
                <th>주소</th>
                <th>연락처</th>
                <th>이메일</th>
            </tr>
            `);
    selectedRows.forEach((item, index) => {
      printWindow.document.write(`
                <tr>
                <td>${index}</td>
                  <td>${item.empl_no}</td>
                  <td>${item.empl_nm}</td>
                  <td>${item.empl_ssid.substring(0, 6)}*******</td>
                  <td>${item.empl_dept_nm}</td>
                  <td>${item.empl_rspofc}</td>
                  <td>${item.empl_encpnd}</td>
                  <td>${item.empl_retire_date}</td>
                  <td>${item.empl_emplym_form}</td>
                  <td>${item.empl_salary_form}</td>
                  <td>${item.empl_bank}</td>
                  <td>${item.empl_acc}</td>
                  <td>${item.empl_ssid_addr}</td>
                  <td>${item.empl_telno}</td>
                  <td>${item.empl_email}</td>
                </tr>
              `);
    });
    printWindow.document.write(`
        </table>
    </body>
    </html> 
    `);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  }


  const consoleLog = () => {
    const selectedRows = gridRef.current.getSelectedRows();
    selectedRows.forEach((row) => {
      console.log(row); // 선택한 행의 데이터 객체
    });
  };


  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header breadcrumb={'인사관리 > 직원명부 > 직원명부조회'} />
        <div className="body flex-grow-1 px-5">

          <h2 className="gap-2 mb-4">직원명부조회</h2>
          <CCard className="mb-4">
            <CCardBody>
              <CRow>
                <CCol style={{ fontSize: '17px', alignItems: "center" }} className="d-flex justify-content-start">
                  <span>부서명:&nbsp;</span>
                  <select size={1} name="deptno" onChange={handleSelectChange}>
                    <option value="">선택</option>
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                  <span>&nbsp;&nbsp;직급:&nbsp;</span>
                  <select size={1} name="rspofc" onChange={handleSelectChange} >
                    <option value="">선택</option>
                    {role.map((roles) => (
                      <option key={roles.lcode} value={roles.cd_val}>
                        {roles.cd_val}
                      </option>
                    ))}
                  </select>
                </CCol>
                <CCol className="gap-2 d-flex justify-content-end">
                  <CButton color="dark" variant="outline" onClick={handleSearchClick}>검색</CButton>
                  <CButton color="dark" variant="outline" onClick={onBtExport}><BsFileEarmarkExcel />내보내기</CButton>
                  <CButton color="dark" variant="outline" onClick={handlePrint}><BsPrinter />인쇄</CButton>
                  {/* <CButton color="dark" variant="outline" onClick={consoleLog}>데이터로그</CButton> */}
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
              <div>
                {/* <SNewButton onClick={onBtnExport}>Download CSV export file</SNewButton>
        <SNewButton onClick={onBtPrint}>print</SNewButton>
        <SNewButton onClick={() => autoSizeAll(false)}>autosize</SNewButton> */}
              </div>

              <div id="myGrid" className="ag-theme-alpine" style={{ height: 550, width: '100%' }}>
                <AgGridReact
                  onGridReady={onGridReady} // onGridReady 이벤트 핸들러 설정
                  defaultColDef={defaultColDef}
                  rowData={searchResults}
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
        </div>
      </div>
    </div>
  )

}

export default EmployeeListManage;