import styled from "styled-components";
import { useState, useEffect } from "react";
import { DepartmentDummy } from "../../pages/DepartmentManage/DepartmentDummy";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import axios from "axios";



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
  color:  ${({theme}) => theme.colors.blue090};
`;

export const DepartmentTable = ({ departments, selectedDepartmentIds, setSelectedDepartmentIds, searchtext }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = departments.slice(indexOfFirstItem, indexOfLastItem);

  const handleCheckboxChange = (departmentId) => {
    if (selectedDepartmentIds.includes(departmentId)) {
      setSelectedDepartmentIds(selectedDepartmentIds.filter(id => id !== departmentId));
    } else {
      setSelectedDepartmentIds([...selectedDepartmentIds, departmentId]);
    }
  };
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableRows = () => {
    return currentItems.map((department) => (
      <tr key={department.id}>
        <td>
          <input type="checkbox" onChange={() => handleCheckboxChange(department.id)}
            checked={selectedDepartmentIds.includes(department.id)}/>
        </td>
        <td>{department.id}</td>
        <td><a>{department.name}</a></td>
        <td>{department.state}</td>
        <td>{department.reg_dtime}</td>
        <td>{department.reg_id}</td>
        <td>{department.upt_dtime}</td>
        <td>{department.upt_id}</td>
      </tr>
    ));
  };

  const renderPaginationButtons = () => {
    const pageNumbers = Math.ceil(departments.length / itemsPerPage);

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
            <th>선택</th>
            <th>번호</th>
            <th>부서명</th>
            <th>상태</th>
            <th>등록일시</th>
            <th>등록자</th>
            <th>변경일시</th>
            <th>수정자</th>
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
              
