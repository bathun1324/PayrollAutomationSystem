import { useState } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


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
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = commutemanage.slice(indexOfFirstItem, indexOfLastItem);

  // const [tests, setTest] = useState( [] );
  // useEffect( () =>{
  //   fetch('http://127.0.0.1:8000/test/')
  //     .then( res => res.json())
  //     .then( data => console.log(data))
  // }, [])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableRows = () => {
    return currentItems.map((companydata) => (
      <tr key={companydata.empl_no}>
        <td>{companydata.empl_no}</td>
        <td>{companydata.empl_nm}</td>
        <td>{companydata.empl_gender}</td>
        <td>{companydata.empl_dept_nm}</td>
        <td>{companydata.empl_rspofc}</td>
        <td>{companydata.empl_telno}</td>
        <td>{companydata.empl_frgnr_yn}</td>
        <td>{companydata.empl_ssid}</td>
        <td>{companydata.empl_ssid_addr}</td>
        <td>{companydata.empl_tltsdnc_addr}</td>
        <td>{companydata.empl_emplym_form}</td>
        <td>{companydata.empl_salary_form}</td>
        <td>{companydata.empl_base_atendtime}</td>
        <td>{companydata.empl_base_lvofctime}</td>
        <td>{companydata.empl_encpnd}</td>
        <td>{companydata.empl_retire_date}</td>
      </tr>
    ));
  };

  const renderPaginationButtons = () => {
    const pageNumbers = Math.ceil(commutemanage.length / itemsPerPage);

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
            <th>사원번호</th>
            <th>사원명</th>
            <th>성별</th>
            <th>부서명</th>
            <th>직책</th>
            <th>휴대폰번호</th>
            <th>외국인여부</th>
            <th>주민등록번호</th>
            <th>주민등록주소</th>
            <th>실거주지주소</th>
            <th>고용형태</th>
            <th>급여형태</th>
            <th>기본출근시간</th>
            <th>기본퇴근시간</th>
            <th>입사일</th>
            <th>퇴사일</th>
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


export default EmployeeCommuteTable;

