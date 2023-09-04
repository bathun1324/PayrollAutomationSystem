import { useState } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 90%;
  height: 90%;

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

const EmployeeListTable = ({ searchResults }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableRows = () => {
    return currentItems.map((companydata) => (
      <tr key={companydata.empl_no}>
        <td><input type="checkbox" /></td>
        <td>{companydata.no}</td>
        <td>{companydata.empl_no}</td>
        <td onClick={() => navigate(`./${companydata.empl_nm}`)}>{companydata.empl_nm}</td>
        <td>{companydata.empl_ssid}</td>
        <td>{companydata.empl_telno}</td>
        <td>{companydata.empl_dept_nm}</td>
        <td>{companydata.empl_encpnd}</td>
        <td>{companydata.empl_retire_date}</td>
        <td>{companydata.empl_emplym_form}</td>
        <td>{companydata.empl_salary_form}</td>
        <td>{companydata.empl_rspofc}</td>
        <td>{companydata.empl_bank}</td>
        <td>{companydata.empl_acc}</td>
        <td>{companydata.empl_ssid_addr}</td>
      </tr>
    ));
  };

  const renderPaginationButtons = () => {
    const pageNumbers = Math.ceil(searchResults.length / itemsPerPage);

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
            <th><input type="checkbox" /></th>
            <th>번호</th>
            <th>사원번호</th>
            <th>사원명</th>
            <th>주민번호</th>
            <th>연락처</th>
            <th>부서</th>
            <th>입사일자</th>
            <th>재직기간</th>
            <th>고용형태</th>
            <th>급여형태</th>
            <th>직급</th>
            <th>은행</th>
            <th>계좌번호</th>
            <th>주소</th>
            {/* <th>이메일</th> */}
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


export default EmployeeListTable;
