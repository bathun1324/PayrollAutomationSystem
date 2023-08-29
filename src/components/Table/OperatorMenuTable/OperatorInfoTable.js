import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyDummy } from "../../../pages/CompanyManage/CompanyDummy";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { BsFillCalculatorFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

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

  margin: 2em 10px;


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
  
  const SCalcContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: ;
  width: 100%;
  height: 100%;

  gap: 4em;
  padding-top: 2em;
  
  span {
    padding-right: 10px;
  }

  `

const SButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 1em;

`

const SCalcButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: auto;
  height: 40px;
  gap: 2px;
  
  color: white;
  font-size: 0.7em;
  background-color: ${({theme}) => theme.colors.blue090};
  border-radius: 3px;
  border: none;

  
  &:hover{  
    background-color : skyblue;
  }

`

const SSaveButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
width: 80px;
height: 40px;
gap: 2px;

color: white;
font-size: 0.7em;
background-color: ${({theme}) => theme.colors.blue090};
border-radius: 3px;
border: none;


&:hover{  
  background-color : skyblue;
}

`

const SPrintButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
width: 80px;
height: 40px;
gap: 2px;

color: white;
font-size: 0.7em;
background-color: ${({theme}) => theme.colors.blue090};
border-radius: 3px;
border: none;


&:hover{  
  background-color : skyblue;
}

`

const SBasicInfo = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: flex-start;
  width: 100%;

  margin: 2em 0;
  gap: 0.5em;
`
  


const SDotContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0 0.5em 0;

  line-height : 0;

  gap: 0.2em;
  font-weight: 600;
  
  > div {
    line-height : 1em;
  }

`

const SBasicInfoTable= styled.div`
  width: 90%;
  padding: 20px 0px;
  border-top: 3px solid #ccc;

  input {
    width: 90%;
    font-size: 1em;
  }


  table {
    width: 100%;
    border: 2px solid #ccc;
    vertical-align: middle;
  }

  th {
    text-align: right;
    padding: 0.2em 0.6em;
    font-weight: 400;
    font-size: 1em;
    height: 3em;
    background-color: ${({ theme }) => theme.colors.blue010};
    border: 2px solid #ccc;
    vertical-align: middle;
  }
  
  td {
    vertical-align: middle;
  }

  td:nth-child(odd) { 
    background-color: ${({ theme }) => theme.colors.blue010};
    width: 15%;
    text-align: right;
    padding: 0.2em 0.6em;
    
  }

  td:nth-child(even) { 
    background-color: white;
  
  }

tr {
  border: 2px solid #ccc;
}

input {
  border: none;

}
`

const OperatorInfoTable = () => {
  const navigate = useNavigate();

  // 선택한 운영자 데이터를 운영자 상세에 보여주는 코드
  const [selectedOperatorData, setSelectedOperatorData] = useState(null);
  const handleOperatorClick = (companyData) => {
    setSelectedOperatorData(companyData);
  };

  
  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = CompanyDummy.slice(indexOfFirstItem, indexOfLastItem);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  // api통신 예시
  // const [tests, setTest] = useState( [] );
  // useEffect( () =>{
    //   fetch('http://127.0.0.1:8000/test/')
    //     .then( res => res.json())
  //     .then( data => console.log(data))
  // }, [])
  
  const [companyData, setOperatorData] = useState(CompanyDummy); // 초기 회사 데이터

  const handleSave = () => {
    // 수정된 데이터를 상위 테이블 데이터에 반영
    const updatedOperatorData = companyData.map((company) => {
      if (company.company.companyId === selectedOperatorData.company.companyId) {
        return selectedOperatorData;
      }
      return company;
    });
    setOperatorData(updatedOperatorData);
    setSelectedOperatorData(null); // 선택된 데이터 초기화
  };


  const renderTableRows = () => {
    const currentItems = companyData.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems.map((companydata) => (
      <tr key={companydata.company.companyId}>
        <td>{companydata.company.companyId}</td>
        <td onClick={() => handleOperatorClick(companydata)}>{companydata.company.manager}</td>
        <td>{"남자"}</td>
        <td>{"관리부"}</td>
        <td>{""}</td>
        <td>{"010-1234-1234"}</td>
        <td>{"내국인"}</td>
      </tr>
    ));
  };

  const renderPaginationButtons = () => {
    const pageNumbers = Math.ceil(companyData.length / itemsPerPage);

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
            <th>번호</th>
            <th>운영자명</th>
            <th>직책</th>
            <th>운영자ID</th>
            <th>상태</th>
            <th>등록일시</th>
            <th>변경일시</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            renderTableRows()
          ) : (
            <tr>
              <SNoDataMsg colSpan="5">조회할 항목이 없습니다.</SNoDataMsg>
            </tr>
                      )}
                      </tbody>
                    </table>
                    <PaginationContainer>
                      {renderPaginationButtons()}
                    </PaginationContainer>
                    {selectedOperatorData && (
                        <SBasicInfo>
                          <SDotContainer>
                            <GoPrimitiveDot color = "#548AFF" />
                            <div>운영자 상세</div>
                          </SDotContainer>
                          <SBasicInfoTable>
                            <SButtonContainer>
                              <SSaveButton onClick={handleSave}>저장</SSaveButton>
                            </SButtonContainer>
                            <table>
                            <tbody>
                              <tr>
                                <td>운영자명</td>
                                <td>                   
                                <input
                                  type="text"
                                  value={selectedOperatorData?.company.manager || ""}
                                  onChange={(e) =>
                                    setSelectedOperatorData((prevData) => ({
                                      ...prevData,
                                      company: {
                                        ...prevData.company,
                                        manager: e.target.value,
                                      },
                                    }))
                                  }
                                />
                                </td>
                                <td>직책</td>
                                <td><input type="text"/></td>
                              </tr>
                              <tr>
                                <td>운영자ID</td>
                                <td><input type="date"/></td>
                                <td>상태</td>
                                <td><input type="text"/></td>
                              </tr>
                              <tr>
                                <td>등록일시</td>
                                <td><input type="text"/></td>
                                <td>변경일시</td>
                                <td><input type="text"/></td>
                              </tr>
                              </tbody>
                            </table>
                          </SBasicInfoTable>
                        </SBasicInfo>
                        )}
                  </TableContainer>
                );
              };


export default OperatorInfoTable;

