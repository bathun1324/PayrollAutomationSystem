import styled from "styled-components";
import { useState, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyDummy } from "../../pages/CompanyManage/CompanyDummy";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

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

const DeviceManageTable = () => {
  const infos = JSON.parse(localStorage.getItem('user_info'));
  const login_id = infos.login_id;
  const navigate = useNavigate();

  const gridRef = useRef();
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

  const [columnDefs] = useState([
    {
      field: 'index', headerName: '번호',
      comparator: (valueA, valueB, nodeA, nodeB, isInverted) => {
        // 숫자로 변환하여 정렬
        const numA = parseFloat(valueA);
        const numB = parseFloat(valueB);
        return numA - numB;
      },
      initialWidth: 100, // 열 너비
    },
    { field: 'device_no', headerName: '단말기번호', initialWidth: 150 },
    { field: 'device_nm', headerName: '단말기명', initialWidth: 150 },
    { field: 'place', headerName: '설치위치', initialWidth: 130 },
    { field: 'model_nm', headerName: '모델명', initialWidth: 100 },
    { field: 'no', headerName: '일련번호', initialWidth: 200 },
    { field: 'made', headerName: '제조사', initialWidth: 160 },
    { field: 'date', headerName: '설치일시', initialWidth: 160 },
    { field: 'state', headerName: '상태', initialWidth: 120 },
  ]);

  const RowClicked = (e) => {
    const selectedRowData = e.data;
    // let nav_url = '/' + login_id + '/device/devicedetail/' + selectedRowData.device_no;
    navigate('./devicedetail');
  }

  return (
    <TableContainer>
      <div>
        {/* <button onClick={onBtnExport}>Download CSV export file</button> */}
      </div>
      <div className="ag-theme-alpine" style={{ height: 500, width: '100%' }}>
        <AgGridReact
          onGridReady={onGridReady} // onGridReady 이벤트 핸들러 설정
          defaultColDef={defaultColDef}
          rowData={CompanyDummy}
          columnDefs={columnDefs}
          gridOptions={gridOptions}
          onRowClicked={RowClicked}
          style={{ textAlign: 'center' }}
        // gridRef.current.paginationSetPageSize(10);
        // domLayout="autoHeight"
        >
        </AgGridReact>
      </div>
    </TableContainer>
  );

};


export default DeviceManageTable;