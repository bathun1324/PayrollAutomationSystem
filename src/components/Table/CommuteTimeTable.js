import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyDummy } from "../../pages/CompanyManage/CompanyDummy";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";


const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  width: 90%;
  height: 90%;

  font-size: 1.1em;
  text-align: left;
  line-height: 2.8;
  border-collapse: collaps;

  margin: 10px 10px;
  padding: 1em 0;


  table {
    width: 90%;
    height: 80%;
    margin: 10px;
    border: 1px solid ${({theme}) => theme.colors.black050}
    border-radius: 3px;
  }

  table tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.blue010};

  }

  th {
    border-bottom: 2px solid #ccc;
    border-top: 2px solid #ccc;
    font-weight: 800;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.blue010};
    border: 1px solid ${({theme}) => theme.colors.black050}
  }

  tr > td {
    text-align: center;
    font-size: 1em;
    font-weight: 200;u
    color: rgb(40, 40, 40);
    cursor: pointer;
    text-align: center;
    overflow-x: auto;
    border: 1px solid ${({theme}) => theme.colors.black050}
    
  }

  

`;

const SNoDataMsg = styled.td`
  height: 500px;
  padding: 150px;

  align-items: center;
  justify-content: center;
  margin-top: 100px;
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

const SCalcContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 0.8em;

  input {
    width: 10em;
    height: 2em;
    border-radius: 3px;
    border: 1px solid ${({theme}) => theme.colors.black050}
  }

`

const SCalcButton = styled.button`
  flex-wrap: wrap;
  width: auto;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({theme}) => theme.colors.blue090};
  border-radius: 3px;
  border: none;


  &:hover{  
    background-color : skyblue;
  }
`

const SCalcHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // width: 90%;
  gap: 0.8em;
  vertical-align: top;
  font-weight: 600;
  `
  
  const SCalcInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 45px;
  align-items: flex-end;
  font-size: 0.9em;

  & > div {

    :not(:last-child){
      display: flex;
      align-items: center;
      font-weight: 600;
    }
  }
  `
  
const CommuteTimeTable = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = CompanyDummy.slice(indexOfFirstItem, indexOfLastItem);

  // const [tests, setTest] = useState( [] );
  // useEffect( () =>{
  //   fetch('http://13.125.117.184:8000/test/')
  //     .then( res => res.json())
  //     .then( data => console.log(data))
  // }, [])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableRows = () => {
    return 
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
      <SCalcContainer>
        <SCalcHeader>
          <div>근무시간 최소단위 (분) :</div>
          <input type="text" placeholder=" 숫자를 입력해주세요."/>
          <SCalcButton>계산</SCalcButton>
        </SCalcHeader>
        <SCalcInfo>
          <div><GoPrimitiveDot color = "#548AFF" />근무시간</div>
          <div id="infoTitle">※ 기본근로시간에 포함된 유급처리시간을 표기합니다.</div>
        </SCalcInfo>
      </SCalcContainer>
      <table>
        <thead>
          <tr>
            <th>연차</th>
            <th>지각시간</th>
            <th>외출시간</th>
            <th>주휴시간</th>
            <th>연장근무</th>
            <th>야간근무</th>
            <th>휴일근무</th>
            <th>실제근무</th>
            <th>유급처리</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <td>0</td>
            <td>0시간 00분</td>
            <td>0시간 00분</td>
            <td>0시간 00분</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        </table>
        <SCalcContainer>
        <SCalcInfo>
          <div id="infoTitle"><GoPrimitiveDot color = "#548AFF" />근로시간</div>
          <div>※ 시급제가 아닌경우는 209시간으로 고정됩니다. 등록을 한 경우에만 기본근로, 주휴시간이 계산됩니다.</div>
        </SCalcInfo>
        </SCalcContainer>
        <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th colSpan={2}>연장근로</th>
            <th colSpan={2}>근로시간</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <thead>          
          <tr>
            <th>연차</th>
            <th>지각시간</th>
            <th>외출시간</th>
            <th>주휴시간</th>
            <th>연장근무</th>
            <th>야간근무</th>
            <th>휴일근무</th>
            <th>실제근무</th>
            <th>유급처리</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <td>0</td>
            <td>0시간 00분</td>
            <td>0시간 00분</td>
            <td>0시간 00분</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
                  </TableContainer>
                );
              };



export default CommuteTimeTable;