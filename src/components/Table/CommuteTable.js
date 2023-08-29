import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyDummy } from "../../pages/CompanyManage/CompanyDummy";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


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

const CommuteTable = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = CompanyDummy.slice(indexOfFirstItem, indexOfLastItem);

  const [tests, setTest] = useState( [] );
  useEffect( () =>{
    fetch('http://127.0.0.1:8000/test/')
      .then( res => res.json())
      .then( data => console.log(data))
  }, [])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableRows = () => {
    return currentItems.map((companydata) => (
      <tr key={companydata.company.companyId}>
        <td>{companydata.company.companyId}</td>
        <td onClick={() => navigate(`./commutedetail`)}>{companydata.company.manager}</td>
        <td>{"남자"}</td>
        <td>{"관리부"}</td>
        <td>{""}</td>
        <td>{"010-1234-1234"}</td>
        <td>{"내국인"}</td>
        <td>{"871234-2345678"}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{"계약직"}</td>
        <td>{""}</td>
        <td>{"00:00:00AM"}</td>
        <td>{"00:00:00PM"}</td>
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
        <PaginationButton onClick={handlePrevPage}><IoIosArrowDropleftCircle size={45}/></PaginationButton>
        {Array.from({ length: pageNumbers }, (_, index) => (
          <PaginationButton
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            active={index + 1 === currentPage}
          >
            {index + 1}
          </PaginationButton>
        ))}
        <PaginationButton onClick={handleNextPage}><IoIosArrowDroprightCircle size={45}/></PaginationButton>
      </>
    );
  };

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>사원번호</th>
            <th>근무일자</th>
            <th>근무스케쥴</th>
            <th>출근시각</th>
            <th>퇴근시각</th>
            <th>외출</th>
            <th>복귀</th>
            <th>출근판정</th>
            <th>퇴근판정</th>
            <th>지각시간</th>
            <th>외출시간</th>
            <th>조기출근</th>
            <th>연장근무</th>
            <th>야간근무</th>
            <th>휴일근무</th>
            <th>실제근무</th>
            <th>비고</th>
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


export default CommuteTable;

