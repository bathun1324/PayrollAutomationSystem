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
  height: 100%;

  font-size: 0.8em;
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
    border:  2px solid #ccc;
    padding: 0.2em;
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
  font-size: 1.7em;
  font-weight: 550;
  color:  ${({theme}) => theme.colors.blue090};
`;

const AnnualTable = () => {
  const navigate = useNavigate();

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
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>연초</th>
            {/* 월별 시작 */}
            <th colspan="2">1월</th>
            <th colspan="2">2월</th>
            <th colspan="2">3월</th>
            <th colspan="2">4월</th>
            <th colspan="2">5월</th>
            <th colspan="2">6월</th>
            <th colspan="2">7월</th>
            <th colspan="2">8월</th>
            <th colspan="2">9월</th>
            <th colspan="2">10월</th>
            <th colspan="2">11월</th>
            <th colspan="2">12월</th>
            <th colspan="3">합계</th>
            <th colspan="3">연초</th>
            <th colspan="2">올해</th>
            <th colspan="2">사용</th>
            <th colspan="3">미사용만료</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>사원번호</th>
            <th>직책</th>
            <th>성명</th>
            <th>입사일</th>
            <th>퇴사일</th>
            <th>발생</th>
            {/* 월별 시작 */}
            <th>발생</th>
            <th>사용</th>
            <th>발생</th>
            <th>사용</th>
            <th>발생</th>
            <th>사용</th>
            <th>발생</th>
            <th>사용</th>
            <th>발생</th>
            <th>사용</th>
            <th>발생</th>
            <th>사용</th>
            <th>발생</th>
            <th>사용</th>
            <th>발생</th>
            <th>사용</th>
            <th>발생</th>
            <th>사용</th>
            <th>발생</th>
            <th>사용</th>
            <th>발생</th>
            <th>사용</th>
            <th>발생</th>
            <th>사용</th>
            {/* 합계 */}
            <th>총발생</th>
            <th>총사용</th>
            <th>적치</th>
            {/* 연초 */}
            <th>이월연차</th>
            <th>이월월차</th>
            {/* 올해 */}
            <th>발생연차</th>
            <th>발생월차</th>
            {/* 사용 */}
            <th>전년분</th>
            <th>올해분</th>
            {/* 미사용만료 */}
            <th>연차</th>
            <th>월차</th>
            <th>총만료</th>
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


export default AnnualTable;
              
