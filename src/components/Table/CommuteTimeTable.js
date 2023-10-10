import { useState, useRef, useCallback, useMemo } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import '../../print.css';
import { cibJupyter } from "@coreui/icons";


const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  width: 90%;
  height: 90%;

  font-size: 1.1em;
  text-align: left;
  line-height: 2.8;
  border-collapse: collaps;

  margin: 10px 10px;
  padding: 1em 0;


  table {
    width: 90%;
    height: 80%;
    margin: 10px;
    border: 1px solid ${({theme}) => theme.colors.black050}
    border-radius: 3px;
  }

  table tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.blue010};

  }

  th {
    border-bottom: 2px solid #ccc;
    border-top: 2px solid #ccc;
    font-weight: 800;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.blue010};
    border: 1px solid ${({theme}) => theme.colors.black050}
  }

  tr > td {
    text-align: center;
    font-size: 1em;
    font-weight: 200;u
    color: rgb(40, 40, 40);
    cursor: pointer;
    text-align: center;
    overflow-x: auto;
    border: 1px solid ${({theme}) => theme.colors.black050}
    
  }

  

`;

const SNoDataMsg = styled.td`
  height: 500px;
  padding: 150px;

  align-items: center;
  justify-content: center;
  margin-top: 100px;
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

const SCalcContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 0.8em;

  input {
    width: 10em;
    height: 2em;
    border-radius: 3px;
    border: 1px solid ${({theme}) => theme.colors.black050}
  }

`

const SCalcButton = styled.button`
  flex-wrap: wrap;
  width: auto;
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

const SCalcHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // width: 90%;
  gap: 0.8em;
  vertical-align: top;
  font-weight: 600;
  `
  
  const SCalcInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 45px;
  align-items: flex-end;
  font-size: 0.9em;

  & > div {

    :not(:last-child){
      display: flex;
      align-items: center;
      font-weight: 600;
    }
  }
  `
  
const CommuteTimeTable = ( {departments} ) => {

    // 그리드
    const gridRef = useRef();
    const [columnDefs] = useState([
      { field: 'empl_nm', headerName: '연차', initialWidth: 80 },
      { field: 'empl_rspofc', headerName: '지각시간', initialWidth: 120 },
      { field: 'empl_frgnr_yn', headerName: '외출시간', initialWidth: 120 },
      { field: 'empl_gender', headerName: '주휴시간', initialWidth: 120 },
      { field: 'empl_dept_nm', headerName: '연장근무', initialWidth: 120 },
      { field: 'empl_emplym_form', headerName: '야간근무', initialWidth: 120 },
      { field: 'empl_encpnd', headerName: '휴일근무', initialWidth: 120 },
      { field: 'empl_hffc_state', headerName: '실제근무', initialWidth: 120 },
      { field: 'empl_retire_date', headerName: '유급처리', initialWidth: 115 },
    ]);

    const [columnDefs2] = useState([
      { field: 'empl_nm', headerName: '연차', initialWidth: 80 },
      { field: 'empl_rspofc', headerName: '지각시간', initialWidth: 120 },
      { field: 'empl_frgnr_yn', headerName: '외출시간', initialWidth: 120 },
      { field: 'empl_gender', headerName: '주휴시간', initialWidth: 120 },
      { field: 'empl_dept_nm', headerName: '연장근무', initialWidth: 120 },
      { field: 'empl_emplym_form', headerName: '야간근무', initialWidth: 120 },
      { field: 'empl_encpnd', headerName: '휴일근무', initialWidth: 120 },
      { field: 'empl_hffc_state', headerName: '실제근무', initialWidth: 120 },
      { field: 'empl_retire_date', headerName: '유급처리', initialWidth: 115 },
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
    const navigate = useNavigate();
    const RowClicked = (e) => {
      const selectedRowData = e.data;
      if (login_id == 'user') {
        alert('접근 권한이 없습니다.');
        return;
      }
      else {
        const nav_url = '/' + login_id + '/employee/employeedetail/' + selectedRowData.empl_no;
        navigate(nav_url)
      }
    }

  return (
    <TableContainer>
      <SCalcContainer>
        <SCalcHeader>
          <div>근무시간 최소단위 (분) :</div>
          <input type="text" placeholder=" 숫자를 입력해주세요."/>
          <SCalcButton>계산</SCalcButton>
        </SCalcHeader>
        <SCalcInfo>
          <div><GoPrimitiveDot color = "#548AFF" />근무시간</div>
          <div id="infoTitle">※ 기본근로시간에 포함된 유급처리시간을 표기합니다.</div>
        </SCalcInfo>
      </SCalcContainer>
      <div className="ag-theme-alpine" style={{ height: 93, width: '90%' }}>
        <AgGridReact
          onGridReady={onGridReady} // onGridReady 이벤트 핸들러 설정
          rowData={departments}
          columnDefs={columnDefs}
          onSelectionChanged={onSelectionChanged}
          style={{ textAlign: 'center'}}
          onRowClicked={RowClicked}
        // domLayout="autoHeight"
        >
        </AgGridReact>
      </div>
        <SCalcContainer>
        <SCalcInfo>
          <div id="infoTitle"><GoPrimitiveDot color = "#548AFF" />근로시간</div>
          <div>※ 시급제가 아닌경우는 209시간으로 고정됩니다. 등록을 한 경우에만 기본근로, 주휴시간이 계산됩니다.</div>
        </SCalcInfo>
        </SCalcContainer>
        <div className="ag-theme-alpine" style={{ height: 93, width: '90%' }}>
        <AgGridReact
          onGridReady={onGridReady} // onGridReady 이벤트 핸들러 설정
          rowData={departments}
          columnDefs={columnDefs2}
          onSelectionChanged={onSelectionChanged}
          style={{ textAlign: 'center' }}
          onRowClicked={RowClicked}
        // domLayout="autoHeight"
        >
        </AgGridReact>
      </div>
      </TableContainer>
                );
              };



export default CommuteTimeTable;