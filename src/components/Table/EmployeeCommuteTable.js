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
  height: 100%;

  font-size: 0.9em;
  text-align: left;
  line-height: 2.8;
  border-collapse: collaps;
  overflow-x: auto;
  // overflow-y: hidden;

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
    padding: 0.3em;
  }

  tr > td {
    text-align: center;
    font-size: 1em;
    font-weight: 200;u
    color: rgb(40, 40, 40);
    cursor: pointer;
    text-align: center;
    overflow-x: auto;
    padding: 0.3em;
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
  color:  ${({ theme }) => theme.colors.blue090};
`;

const EmployeeCommuteTable = ({ commutemanage }) => {


  const gridRef = useRef();
  const [columnDefs] = useState([
    {
      field: 'empl_no', headerName: '사원번호',
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

  return (
    <TableContainer>
      <div className="ag-theme-alpine" style={{ height: 500, width: '100%' }}>
        <AgGridReact
          onGridReady={onGridReady} // onGridReady 이벤트 핸들러 설정
          defaultColDef={defaultColDef}
          rowData={commutemanage}
          columnDefs={columnDefs}
          onSelectionChanged={onSelectionChanged}
          gridOptions={gridOptions}
          style={{ textAlign: 'center' }}
          pagination={true}
          paginationPageSize={10}   // gridRef.current.paginationSetPageSize(10);
        // domLayout="autoHeight"
        >
        </AgGridReact>
      </div>
    </TableContainer>
                );
};


export default EmployeeCommuteTable;

