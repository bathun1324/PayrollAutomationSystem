import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyDummy } from "../../pages/CompanyManage/CompanyDummy";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { DepartureSumTable } from "..";


const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
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
    border: 2px solid #ccc;
    font-weight: 800;
    text-align: center;
  }

  tr > td {
    text-align: center;
    font-size: 1em;
    font-weight: 200;u
    color: rgb(40, 40, 40);
    cursor: pointer;
    border: 2px solid #ccc;
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

const RetirePensionTable = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = CompanyDummy.slice(indexOfFirstItem, indexOfLastItem);

  const [tests, setTest] = useState( [] );
  useEffect( () =>{
    fetch('http://13.125.117.184:8000/test/')
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
        <td>홍길동</td>
        <td></td>
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
            <th colSpan={4}></th>
            <th colSpan={4}>납입부담금</th>
          </tr>
          <tr>
            <th>번호</th>
            <th>성명</th>
            <th>주민번호</th>
            <th>입사일</th>
            <th>근속년수</th>
            <th>평균월급여</th>
            <th>납입금액</th>
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


export default RetirePensionTable;
              
