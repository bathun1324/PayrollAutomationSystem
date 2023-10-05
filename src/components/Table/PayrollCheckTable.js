import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyDummy } from "../../pages/CompanyManage/CompanyDummy";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 90%;
  height: 90%;

  font-size: 0.7em;
  text-align: left;
  line-height: 2.8;
  border-collapse: collaps;
  overflow-x: scroll;
  overflow-y: hidden;

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
    font-size: 1em;
    text-align: center;
    border:  2px solid #ccc;
    padding: 0.2em 0.5em;
  }

  tr > td {
    text-align: center;
    font-size: 1em;
    font-weight: 200;u
    color: rgb(40, 40, 40);
    cursor: pointer;
    frame: border;
    border:  2px solid #ccc;
    padding: 0.2em;
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

const PayrollCheckTable = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = CompanyDummy.slice(indexOfFirstItem, indexOfLastItem);

  const [tests, setTest] = useState([]);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableRows = () => {
    return currentItems.map((companydata) => (
      <tr key={companydata.company.companyId}>
        <td>{companydata.company.companyId}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
      </tr>
    ));
  };

  const renderPaginationButtons = () => {
    const pageNumbers = Math.ceil(CompanyDummy.length / itemsPerPage);

    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    const handleNextPage = () => {
      if (currentPage < pageNumbers) {
        setCurrentPage(currentPage + 1);
      }
    };

    return (
      <>
        <PaginationButton onClick={handlePrevPage}><IoIosArrowDropleftCircle size={45} /></PaginationButton>
        {Array.from({ length: pageNumbers }, (_, index) => (
          <PaginationButton
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            active={index + 1 === currentPage}
          >
            {index + 1}
          </PaginationButton>
        ))}
        <PaginationButton onClick={handleNextPage}><IoIosArrowDroprightCircle size={45} /></PaginationButton>
      </>
    );
  };

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>{""}</th>
            <th>{""}</th>
            <th>직급</th>
            <th>평일근로</th>
            <th>휴일근로</th>
            <th>야간근로</th>
            <th>기본급</th>
            <th>야간근로수당</th>
            <th>연장근로수당</th>
            <th>연차수당</th>
            <th>인센티브(성과금)</th>
            <th>휴일근로수당</th>
            <th>휴일연장수당</th>
            <th>건강보험</th>
            <th>건강보험정산</th>
            <th>고용보험</th>
            <th>국민연금</th>
            <th>근로소득세(소득세)</th>
            <th>장기요양보험</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th rowSpan="2">순번</th>
            <th>사원번호</th>
            <th>성명</th>
            <th>휴일연장</th>
            <th>연장근로</th>
            <th>주휴시간</th>
            <th>{""}</th>
            <th>{""}</th>
            <th>{""}</th>
            <th>{""}</th>
            <th>{""}</th>
            <th>{""}</th>
            <th>{"기타수당"}</th>
            <th>{"장기요양보험"}</th>
            <th>{"지방소득세"}</th>
            <th>{"가불금"}</th>
            <th>{"기숙사"}</th>
            <th>{"기타"}</th>
            <th>{"기타공제"}</th>
            <th>{"지급합계"}</th>
            <th>{"공제합계"}</th>
            <th>{"차인지급액"}</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            renderTableRows()
          ) : (
            <tr>
              <SNoDataMsg colSpan="10">조회할 항목이 없습니다.</SNoDataMsg>
            </tr>
          )}
        </tbody>
      </table>
      <PaginationContainer>
        {renderPaginationButtons()}
      </PaginationContainer>
    </TableContainer>
  );
};


export default PayrollCheckTable;

