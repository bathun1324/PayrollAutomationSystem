import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyDummy } from "../../pages/CompanyManage/CompanyDummy";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { DepartureSumTable } from "..";

const STableWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: space-between;
width: 100%;
height: 90%;
overflow-x: auto;
`

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  width: 90%;
  max-width: 90%;
  height: 100%;

  font-size: 0.7em;
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

  tr {
  }
  
  th {
    vertical-align: middle;
    border-bottom: 2px solid #ccc;
    border: 2px solid #ccc;
    font-weight: 800;
    text-align: center;
    padding: 2px 3px;
  }

  tr > td {
    text-align: center;
    font-size: 1em;
    font-weight: 200;u
    color: rgb(40, 40, 40);
    cursor: pointer;
    border: 2px solid #ccc;
    vertical-align: middle;

    padding: 2px 3px;
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
  font-size: 1.7em;
  font-weight: 550;
  color:  ${({theme}) => theme.colors.blue090};
`;

const InsuranceClaimTable = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = CompanyDummy.slice(indexOfFirstItem, indexOfLastItem);

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
      <tr key={companydata.company.companyId}>
        <td><input type="checkbox"/></td>
        <td>{companydata.company.companyId}</td>
        <td>홍길동</td>
        <td></td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td></td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td></td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td></td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td></td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td></td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td></td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td></td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td></td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td></td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td></td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td></td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td></td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td>{""}</td>
        <td></td>
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
    <STableWrapper>
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th rowSpan={3}><input type="checkbox"/></th>
            <th rowSpan={3}>사원번호</th>
            <th rowSpan={3}>직책</th>
            <th rowSpan={3}>성명</th>
            <th rowSpan={3}>입사일</th>

            <th colSpan={6}>합계</th>

            <th colSpan={5}>1월</th>
            <th colSpan={6}>2월</th>
            <th colSpan={6}>3월</th>
            <th colSpan={6}>4월</th>
            <th colSpan={6}>5월</th>
            <th colSpan={6}>6월</th>
            <th colSpan={6}>7월</th>
            <th colSpan={6}>8월</th>
            <th colSpan={6}>9월</th>
            <th colSpan={6}>10월</th>
            <th colSpan={6}>11월</th>
            <th colSpan={6}>12월</th>

          </tr>
          <tr>
            <th rowSpan={2}>과세기준</th>
            <th rowSpan={2}>국민연금</th>
            <th rowSpan={2}>고용보험</th>
            <th>건강보험</th>
            <th>건강보험정산</th>
            <th>소득세</th>
            {/* 월별 헤더 시작 */}
            <th rowSpan={2}>과세기준</th>
            <th rowSpan={2}>국민연금</th>
            <th rowSpan={2}>고용보험</th>
            <th>건강보험정산</th>
            <th>소득세</th>
            {/* 1월끝 */}
            {}
            <th rowSpan={2}>과세기준</th>
            <th rowSpan={2}>국민연금</th>
            <th rowSpan={2}>고용보험</th>
            <th>건강보험</th>
            <th>건강보험정산</th>
            <th>소득세</th>
            <th rowSpan={2}>과세기준</th>
            <th rowSpan={2}>국민연금</th>
            <th rowSpan={2}>고용보험</th>
            <th>건강보험</th>
            <th>건강보험정산</th>
            <th>소득세</th>
            <th rowSpan={2}>과세기준</th>
            <th rowSpan={2}>국민연금</th>
            <th rowSpan={2}>고용보험</th>
            <th>건강보험</th>
            <th>건강보험정산</th>
            <th>소득세</th>
            <th rowSpan={2}>과세기준</th>
            <th rowSpan={2}>국민연금</th>
            <th rowSpan={2}>고용보험</th>
            <th>건강보험</th>
            <th>건강보험정산</th>
            <th>소득세</th>
            <th rowSpan={2}>과세기준</th>
            <th rowSpan={2}>국민연금</th>
            <th rowSpan={2}>고용보험</th>
            <th>건강보험</th>
            <th>건강보험정산</th>
            <th>소득세</th>
            <th rowSpan={2}>과세기준</th>
            <th rowSpan={2}>국민연금</th>
            <th rowSpan={2}>고용보험</th>
            <th>건강보험</th>
            <th>건강보험정산</th>
            <th>소득세</th>
            <th rowSpan={2}>과세기준</th>
            <th rowSpan={2}>국민연금</th>
            <th rowSpan={2}>고용보험</th>
            <th>건강보험</th>
            <th>건강보험정산</th>
            <th>소득세</th>
            <th rowSpan={2}>과세기준</th>
            <th rowSpan={2}>국민연금</th>
            <th rowSpan={2}>고용보험</th>
            <th>건강보험</th>
            <th>건강보험정산</th>
            <th>소득세</th>
            <th rowSpan={2}>과세기준</th>
            <th rowSpan={2}>국민연금</th>
            <th rowSpan={2}>고용보험</th>
            <th>건강보험</th>
            <th>건강보험정산</th>
            <th>소득세</th>
            <th rowSpan={2}>과세기준</th>
            <th rowSpan={2}>국민연금</th>
            <th rowSpan={2}>고용보험</th>
            <th>건강보험</th>
            <th>건강보험정산</th>
            <th>소득세</th>

            <th rowSpan={2}>과세기준</th>
            <th rowSpan={2}>국민연금</th>
            <th rowSpan={2}>고용보험</th>
            <th>건강보험</th>
            <th>건강보험정산</th>
            <th>소득세</th>


            {/* 월별 헤더 끝 */}

          </tr>
          <tr>
            <th>장기요양보험정산</th>
            <th>지방소득세</th>
            <th>장기요양보험</th>

            <th>장기요양보험정산</th>
            <th>지방소득세</th>
            <th>장기요양보험</th>
            <th>장기요양보험정산</th>
            <th>지방소득세</th>
            <th>장기요양보험</th>
            <th>장기요양보험정산</th>
            <th>지방소득세</th>
            <th>장기요양보험</th>
            <th>장기요양보험정산</th>
            <th>지방소득세</th>
            <th>장기요양보험</th>
            <th>장기요양보험정산</th>
            <th>지방소득세</th>
            <th>장기요양보험</th>
            <th>장기요양보험정산</th>
            <th>지방소득세</th>
            <th>장기요양보험</th>
            <th>장기요양보험정산</th>
            <th>지방소득세</th>
            <th>장기요양보험</th>
            <th>장기요양보험정산</th>
            <th>지방소득세</th>
            <th>장기요양보험</th>
            <th>장기요양보험정산</th>
            <th>지방소득세</th>
            <th>장기요양보험</th>
            <th>장기요양보험정산</th>
            <th>지방소득세</th>
            <th>장기요양보험</th>
            <th>장기요양보험정산</th>
            <th>지방소득세</th>
            <th>장기요양보험</th>
            <th>장기요양보험정산</th>
            <th>지방소득세</th>
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
                  </STableWrapper>
                );
              };


export default InsuranceClaimTable;
              
