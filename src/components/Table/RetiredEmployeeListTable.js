import { useState, useRef, useCallback, useMemo } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import '../../print.css';


const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 0.9em;
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
    :hover {
      color: ${({ theme }) => (theme.colors.blue090)}
    }
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

const RetiredEmployeeListTable = ({ retirelist }) => {

  // 그리드
  const gridRef = useRef();
  const [columnDefs] = useState([
    {
      field: 'empl_no', headerName: '사원번호', headerCheckboxSelection: true, checkboxSelection: true,
      comparator: (valueA, valueB, nodeA, nodeB, isInverted) => {
        // 숫자로 변환하여 정렬
        const numA = parseFloat(valueA);
        const numB = parseFloat(valueB);
        return numA - numB;
      },
      initialWidth: 160, // 열 너비
    },
    { field: 'empl_nm', headerName: '사원명', initialWidth: 100 },
    { field: 'empl_dept_nm', headerName: '부서', initialWidth: 130 },
    { field: 'empl_telno', headerName: '연락처', initialWidth: 160 },
    { field: 'empl_encpnd', headerName: '입사일자', initialWidth: 130 },
    { field: 'empl_retire_date', headerName: '퇴사일자', initialWidth: 130 },
    { field: 'empl_period', headerName: '재직기간', initialWidth: 130 },
    { field: 'empl_emplym_form', headerName: '고용형태', initialWidth: 130 },
    { field: 'empl_salary_form', headerName: '급여형태', initialWidth: 130 },
    { field: 'empl_bank', headerName: '은행', initialWidth: 160 },
    { field: 'empl_acc', headerName: '계좌번호', initialWidth: 160 },
    { field: 'empl_email', headerName: '이메일', initialWidth: 160 },
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


  return (
    <TableContainer id='printableArea'>
      <div>
        {/* <button onClick={onBtnExport}>Download CSV export file</button> */}
      </div>
      <div className="ag-theme-alpine" style={{ height: 550, width: '100%' }}>
        <AgGridReact

          onGridReady={onGridReady} // onGridReady 이벤트 핸들러 설정
          defaultColDef={defaultColDef}
          rowData={retirelist}
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


export default RetiredEmployeeListTable;
