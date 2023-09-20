import styled from "styled-components";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { DepartmentDummy } from "../../pages/DepartmentManage/DepartmentDummy";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import axios from "axios";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import '../../print.css';
import { CTable } from "@coreui/react";

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 90%;
  height: 90%;

  font-size: 1.1em;
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
    font-weight: 200;
    color: rgb(40, 40, 40);
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

export const DepartmentTable = ({ departments, selectedDepartmentIds, setSelectedDepartmentIds, searchtext }) => {
  // 그리드
  const gridRef = useRef();
  const [columnDefs] = useState([
    {
      field: 'id', headerName: '번호', headerCheckboxSelection: true, checkboxSelection: true,
      comparator: (valueA, valueB, nodeA, nodeB, isInverted) => {
        // 숫자로 변환하여 정렬
        const numA = parseFloat(valueA);
        const numB = parseFloat(valueB);
        return numA - numB;
      },
      initialWidth: 130, // 열 너비
    },
    { field: 'name', headerName: '부서명', initialWidth: 100 },
    { field: 'state', headerName: '상태', initialWidth: 150 },
    { field: 'reg_dtime', headerName: '등록일시', initialWidth: 200 },
    { field: 'reg_id', headerName: '등록자', initialWidth: 100 },
    { field: 'upt_dtime', headerName: '변경일시', initialWidth: 200 },
    { field: 'upt_id', headerName: '수정자', initialWidth: 160 },
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
          rowData={departments}
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

