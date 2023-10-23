import { useState, useRef, useCallback, useMemo } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import '../../print.css';


const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 90%;
  height: 90%;
  overflow-x: auto;
  overflow-y: hidden;

  font-size: 1.1em;
  text-align: left;
  line-height: 2.8;
  border-collapse: collaps;

  margin: 20px 10px;


  table {
    white-space: nowrap; 
    word-break: keep-all;
    width: 100%;
    height: 100%;
    

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
    font-weight: 200;
    color: rgb(40, 40, 40);
    cursor: pointer;
    text-align: center;
    overflow-x: auto;
    
  }

  

`;

const SNoDataMsg = styled.td`
  height: 500px;
  padding: 150px;

  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 1.5em;
  height: 1.5em;

  border: 0;
  border-radius: 5px;
  background-color: transparent;
  font-size: 1.1em;
  font-weight: 550;
  color:  ${({theme}) => theme.colors.blue090};
`;

const CommuteTable = ( {attendance} ) => {
    // 그리드
    const gridRef = useRef();
    const [columnDefs] = useState([
      {
        field: 'empl_no', headerName: '번호',
        comparator: (valueA, valueB, nodeA, nodeB, isInverted) => {
          // 숫자로 변환하여 정렬
          const numA = parseFloat(valueA);
          const numB = parseFloat(valueB);
          return numA - numB;
        },
        initialWidth: 80, // 열 너비
      },
      { field: 'empl_work_date', headerName: '근무일자', initialWidth: 120 },
      { field: 'empl_work_sch', headerName: '근무스케줄', initialWidth: 150 },
      { field: 'empl_atend_time', headerName: '출근시각', initialWidth: 130 },
      { field: 'empl_lvofc_time', headerName: '퇴근시각', initialWidth: 130 },
      { field: 'empl_gnot', headerName: '외출', initialWidth: 130 },
      { field: 'empl_rtn', headerName: '복귀', initialWidth: 130 },
      { field: 'empl_atend_jdgmnt', headerName: '출근판정', initialWidth: 130 },
      { field: 'empl_lvofc_jdgmnt', headerName: '퇴근판정', initialWidth: 130 },
      { field: 'empl_laten_time', headerName: '지각시간', initialWidth: 160 },
      { field: 'empl_gnot_time', headerName: '외출시간', initialWidth: 160 },
      { field: 'empl_elpd_atend', headerName: '조기출근', initialWidth: 160 },
      { field: 'empl_extn_work', headerName: '연장근무', initialWidth: 160 },
      { field: 'empl_night_work', headerName: '야간근무', initialWidth: 160 },
      { field: 'empl_hday_work', headerName: '휴일근무', initialWidth: 160 },
      { field: 'empl_realwork_tume', headerName: '실제근무', initialWidth: 160 },
      { field: 'empl_remark', headerName: '비고', initialWidth: 160 },
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
  
    const onBtnExport = useCallback(() => {
      if (gridRef.current) {
        // api가 정의되어 있을 때만 exportDataAsCsv를 호출
        gridRef.current.exportDataAsCsv();
      }
    }, []);
  
  
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
  
    // 클릭시 상세페이지로 이동
    const infos = JSON.parse(localStorage.getItem('user_info'));
    const login_id = infos.login_id;
    const perm = infos.perm_id;
    let nav_url = ''
    const navigate = useNavigate();
    const RowClicked = (e) => {
      const selectedRowData = e.data;
      if (login_id == 'user') {
        alert('접근 권한이 없습니다.');
        return;
      }
      else {
        if(perm == "01") {
          nav_url = '/superadmin/commute/commutedetail/';
        }else if(perm == "11"){
          nav_url = '/admin/commute/commutedetail/';
        }else{
          nav_url = '/user/commute/commutedetail/';
        }
        // + selectedRowData.empl_no;
        navigate(nav_url)
      }
    }

  return (
    <TableContainer>
      <div className="ag-theme-alpine" style={{ height: 700, width: '100%' }}>
                <AgGridReact
                  onGridReady={onGridReady} // onGridReady 이벤트 핸들러 설정
                  defaultColDef={defaultColDef}
                  rowData={attendance}
                  columnDefs={columnDefs}
                  onSelectionChanged={onSelectionChanged}
                  gridOptions={gridOptions}
                  style={{ textAlign: 'center' }}
                  pagination={true}
                  paginationPageSize={10}   // gridRef.current.paginationSetPageSize(10);
                  onRowClicked={RowClicked}
                // domLayout="autoHeight"
                >
                </AgGridReact>
              </div>
                    <PaginationContainer>
                    </PaginationContainer>
                  </TableContainer>
                );
              };


export default CommuteTable;

