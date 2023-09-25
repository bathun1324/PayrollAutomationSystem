import axios from "axios";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";
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

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 90%;
  height: 100%;

  font-size: 0.9em;
  text-align: left;
  line-height: 2.8;
  border-collapse: collaps;

  margin: 20px 10px;


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
    :hover {
      color: ${({ theme }) => (theme.colors.blue090)}
    }
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
    { field: 'empl_telno', headerName: '연락처', initialWidth: 170 },
    { field: 'empl_dept_nm', headerName: '부서', initialWidth: 100 },
    { field: 'empl_encpnd', headerName: '입사일자', initialWidth: 170 },
    { field: 'empl_retire_date', headerName: '재직기간', initialWidth: 170 },
    { field: 'empl_emplym_form', headerName: '고용형태', initialWidth: 140 },
    { field: 'empl_salary_form', headerName: '급여형태', initialWidth: 140 },
    { field: 'empl_rspofc', headerName: '직급', initialWidth: 100 },
    { field: 'empl_bank', headerName: '은행', initialWidth: 120 },
    { field: 'empl_acc', headerName: '계좌번호', initialWidth: 170 },
    { field: 'empl_ssid_addr', headerName: '주소', initialWidth: 170 },
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

  const onBtnExport = useCallback(() => {
    if (gridRef.current) {
      // api가 정의되어 있을 때만 exportDataAsCsv를 호출
      gridRef.current.exportDataAsCsv();
    }
  }, []);

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

  // 출력할 때 사이드 바 접고 출력
  const onBtPrint = useCallback(() => {
    if (sidebarShow) {
      dispatch({ type: 'set', sidebarShow: !sidebarShow })
    }
    const api = gridRef.current.api;
    setPrinterFriendly(api);
    setTimeout(function () {
      autoSizeAll(false);
      window.print();
      setNormal(api);
    }, 2000);
  }, [window.print]);

  // Set the grid to fit the screen when printing
  useEffect(() => {
    const onBeforePrint = () => {
      setPrinterFriendly(gridRef.current.api);
      autoSizeAll(false);
    };

    const onAfterPrint = () => {
      setNormal(gridRef.current.api);
    };

    window.addEventListener('beforeprint', onBeforePrint);
    window.addEventListener('afterprint', onAfterPrint);

    return () => {
      window.removeEventListener('beforeprint', onBeforePrint);
      window.removeEventListener('afterprint', onAfterPrint);
    };
  }, [autoSizeAll]);

  //'onBeforePrint' is not defined  no-undef
  const onBeforePrint = () => {
    setPrinterFriendly(gridRef.current.api);
    autoSizeAll(false);
  };





  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <h2 className="gap-2 mb-4">인사관리&nbsp;{'>'}&nbsp;직원명부&nbsp;{'>'}&nbsp;직원명부조회</h2>
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
                        <option key={roles.lcode} value={roles.lcode_nm}>
                          {roles.lcode_nm}
                        </option>
                      ))}
                    </select>
                  </CCol>
                  <CCol className="gap-2 d-flex justify-content-end">
                    <CButton color="dark" variant="outline" onClick={handleSearchClick}>검색</CButton>
                    <CButton color="dark" variant="outline" onClick={onBtnExport}>csv로 다운로드</CButton>
                    <CButton color="dark" variant="outline" onClick={onBeforePrint}>인쇄</CButton>
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
                    rowData={searchResults}
                    columnDefs={columnDefs}
                    onSelectionChanged={onSelectionChanged}
                    gridOptions={gridOptions}
                    style={{ textAlign: 'center' }}
                  // paginationPageSize={10}   // gridRef.current.paginationSetPageSize(10);
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

export default EmployeeListManage;