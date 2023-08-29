import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyDummy } from "../../pages/CompanyManage/CompanyDummy";
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
  gap: 1em;

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

  margin: 1em 0;
  gap: 0.5em;
`
  



const SPaymentInfo = styled(SBasicInfo)`
  width: 100%;
`


const SDotContainer = styled.div`
  display: flex;
  width: 10%;
  border: 1px solid blue;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0 0.5em 0;

  line-height : 0;

  gap: 0.2em;
  font-weight: 600;
  
  > div {
    line-height : 1em;
    font-size: 0.9em;
  }

`


const SBasicInfoTable= styled.div`
  width: 90%;
  padding: 20px 0px;
  border-top: 3px solid #ccc;



  table {
    width: 100%;
    border: 2px solid #ccc;
    vertical-align: middle;
    font-size: 0.8em;
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
    text-align: right;
    padding: 0.2em 0.6em;
    
  }

  td:nth-child(even) { 
    background-color: white;
  
  }

tr {
  border: 2px solid #ccc;
  // height: 10%;
}

input {
  border: none;

}
`

const SPaymentInfoTable = styled(SBasicInfoTable)`
  width: 100%;
  border: 1px solid red;
  

td {
  border: 2px solid #ccc;
}

td:nth-child(odd) { 
  background-color: white;
  text-align: right;
  
}

`

const SSpecialAllowInfo = styled(SBasicInfo)`
`

const SSpecialAllowInfoTable = styled(SPaymentInfoTable)`
`

const SPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

const SSpecialAllowTotalTable = styled.div`
  display: flex;
  justify-content: center;
  border-top: none;

  input {
    border: none;
  }

  table {
    border: 2px solid #ccc;
    // width: 50%;
  }

  td:first-child {
    text-align: right;
    background-color: ${({theme}) => theme.colors.blue010};
  }
`


const SDeductionTotalTable = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: none;

  input {
    border: none;
  }

    th {
      text-align: center;
      width: 50%;
    } 
    td { 
      width: 50%;
      border: 2px solid #ccc;
    }

    tr:first-child > td {
      background-color: ${({theme}) => theme.colors.blue010};
    }

    tr:last-child > td {
      background-color: white;
    }
    `
    
const SDeductionContainer = styled(SPaymentContainer)`
`
const SDeductionInfo = styled(SPaymentInfo)`
`
const SDeductionInfoTable = styled(SPaymentInfoTable)`
`
const SAttendanceContainer = styled(SPaymentContainer)`
  justify-content: center;
  align-items:center;
  width: 100%;
  border: 1px solid green;
`
const SAttendanceInfo = styled(SPaymentInfo)`
  justify-content: flex-start;
  border: 1px solid orange;
  table {
      width: 90%;
  }
`
const SAttendanceInfoTable = styled(SPaymentInfoTable)`
  width: 80%;
  
  td {
  }
    


  td:nth-child(odd) { 
    width: 20%;
    text-align: right;
  }

`

const SAnnualInfo = styled(SPaymentInfo)``

const SAnnualInfoTable = styled(SPaymentInfoTable)`

width: 100%;

`


const SNoticeContainer = styled(SPaymentContainer)``

const SNoticeInfo = styled(SPaymentInfo)``

const SSalaryStandardContainer = styled.div`
`

const SNoticeInfoTable = styled(SPaymentInfoTable)`

input {
  border: 2px solid #ccc;
  border-radius: 3px;
  width: 100%;
  height: 8em;
  padding: 1em;
}

`


const PayrollManageTable = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = CompanyDummy.slice(indexOfFirstItem, indexOfLastItem);

  const [selectedEmployee, setSelectedEmployee] = useState(null); // State 추가
  const handleEmployeeClick = (companydata) => {
    setSelectedEmployee(companydata); // 클릭한 사원 데이터를 상태에 저장
  };

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
        <td onClick={() => handleEmployeeClick(companydata)}>{companydata.company.manager}</td>
        <td>{"남자"}</td>
        <td>{"관리부"}</td>
        <td>{""}</td>
        <td>{"010-1234-1234"}</td>
        <td>{"내국인"}</td>
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
            <th>번호</th>
            <th>부서명</th>
            <th>사원번호</th>
            <th>사원명</th>
            <th>직책</th>
            <th>입사일</th>
            <th>급여종류</th>
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
                    {selectedEmployee && ( // 선택된 데이터가 있을 때에만 아래 컴포넌트들을 활성화
                  <>
                    <PaginationContainer>
                      {renderPaginationButtons()}
                    </PaginationContainer>
                    <SCalcContainer>
                      <div>
                        <span>자동계산</span>
                        <span>
                          <select size={1}>
                            <option value={"false"}>false</option>
                            <option value={"true"}>true</option>
                          </select>
                        </span>
                        </div>
                        <SButtonContainer>
                          <SCalcButton>
                            <BsFillCalculatorFill />
                            <div>계산하기</div>
                          </SCalcButton>
                          <SSaveButton>저장하기</SSaveButton>
                          <SPrintButton>인쇄</SPrintButton>
                        </SButtonContainer>
                    </SCalcContainer>
                        <SBasicInfo>
                          <SDotContainer>
                            <GoPrimitiveDot color = "#548AFF" />
                            <div>기본정보</div>
                          </SDotContainer>
                          <SBasicInfoTable>
                            <table>
                              <tr>
                                <td>급여기준액</td>
                                {/* 아래와같이 value에 데이터 연결 필요 */}
                                <td><input type="text" value={selectedEmployee ? selectedEmployee.salary : ''} /></td>
                                <td>성명</td>
                                <td><input type="text"/></td>
                                <td>입사일자</td>
                                <td><input type="date"/></td>
                              </tr>
                              <tr>
                                <td>부서명</td>
                                <td><input type="text"/></td>
                                <td>직책</td>
                                <td><input type="text"/></td>
                                <td>계좌번호</td>
                                <td><input type="text"/></td>
                              </tr>
                            </table>
                          </SBasicInfoTable>
                        </SBasicInfo>
                        <SPaymentInfo>
                          <SDotContainer>
                            <GoPrimitiveDot color = "#548AFF" />
                            <div>지급내역</div>
                          </SDotContainer>
                          <SPaymentInfoTable>
                          <SDotContainer>
                            <div>공통항목</div>
                          </SDotContainer>
                            <table>
                              <tr>
                                <th>기본급</th>
                                <th>야간근로수당</th>
                                <th>연장근로수당</th>
                                <th>연차수당</th>
                                <th>인센티브(성과금)</th>
                                <th>휴일근로수당</th>
                                <th rowSpan={2}>공통항목 합계액</th>
                              </tr>
                              <tr>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                              </tr>
                              <tr>
                                <th>휴일연장수당</th>
                                <th>야간근로수당</th>
                                <th>연장근로수당</th>
                                <th>연차수당</th>
                                <th>인센티브(성과금)</th>
                                <th>휴일근로수당</th>
                                <th rowSpan={2}></th>
                              </tr>
                              <tr>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                              </tr>
                            </table>
                          </SPaymentInfoTable>
                        </SPaymentInfo>
                            <SSpecialAllowInfoTable>
                            <SDotContainer>
                              <div>특별수당</div>
                            </SDotContainer>
                              <table>
                                <tr>
                                  <th></th>
                                  <th></th>
                                  <th></th>
                                  <th></th>
                                  <th></th>
                                  <th></th>
                                  <th rowSpan={2}>특별수당 합계액</th>
                                </tr>
                                <tr>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <th></th>
                                  <th></th>
                                  <th></th>
                                  <th></th>
                                  <th></th>
                                  <th rowSpan={2}></th>
                                </tr>
                                <tr>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                </tr>
                              </table>
                            </SSpecialAllowInfoTable>

                          <SSpecialAllowTotalTable>
                            <SSalaryStandardContainer>
                            <table>
                              <tr>
                                <td>급여기준액</td>
                                <td><input type="text"/></td>
                              </tr>
                            </table>
                            </SSalaryStandardContainer>
                          </SSpecialAllowTotalTable>

                        {/* 공제내역시작 */}
                        <SDeductionContainer>
                        <SDeductionInfo>
                            <SDotContainer>
                              <GoPrimitiveDot color = "#548AFF" />
                              <div>공제내역</div>
                            </SDotContainer>
                            <SDeductionInfoTable>
                              <table>
                                <tr>
                                  <th>건강보험</th>
                                  <th>건강보험정산</th>
                                  <th>고용보험</th>
                                  <th>국민연금</th>
                                  <th>근로소득세(소득세)</th>
                                  <th>장기요양보험</th>
                                  <th rowSpan={2}>공제합계액(B)</th>
                                </tr>
                                <tr>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                </tr>
                                <tr>
                                  <th>장기요양보험정산</th>
                                  <th>지방소득세</th>
                                  <th></th>
                                  <th></th>
                                  <th></th>
                                  <th></th>
                                  <th rowSpan={2}></th>
                                </tr>
                                <tr>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                </tr>
                              </table>
                            </SDeductionInfoTable>
                          </SDeductionInfo>
                          <SDeductionTotalTable>
                            <div>
                            <table>
                              <tr>
                                <td>과세기준</td>
                                <td>차인지급액 (A - B)</td>
                              </tr>
                              <tr>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                              </tr>
                            </table>
                            </div>
                          </SDeductionTotalTable>
                        </SDeductionContainer>
                        {/* 근태내역 시작 */}
                        <SAttendanceContainer>
                          <SAttendanceInfo>
                              <SDotContainer>
                                <GoPrimitiveDot color = "#548AFF" />
                                <div>근태내역</div>
                              </SDotContainer>
                              <SAttendanceInfoTable>
                                <table className="근태내역">
                                  <tr>
                                    <th>건강보험</th>
                                    <th>건강보험정산</th>
                                    <th>고용보험</th>
                                    <th>국민연금</th>
                                    <th>근로소득세(소득세)</th>
                                    <th>장기요양보험</th>
                                    <th></th>
                                  </tr>
                                  <tr>
                                    <td><input type="text"/></td>
                                    <td><input type="text"/></td>
                                    <td><input type="text"/></td>
                                    <td><input type="text"/></td>
                                    <td><input type="text"/></td>
                                    <td><input type="text"/></td>
                                    <td><input type="text"/></td>
                                  </tr>
                                  <tr>
                                    <th>주휴시간</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                  </tr>
                                  <tr>
                                    <td><input type="text"/></td>
                                    <td><input type="text"/></td>
                                    <td><input type="text"/></td>
                                    <td><input type="text"/></td>
                                    <td><input type="text"/></td>
                                    <td><input type="text"/></td>
                                    <td><input type="text"/></td>
                                  </tr>
                                </table>
                              </SAttendanceInfoTable>
                            </SAttendanceInfo>
                          </SAttendanceContainer>
                          {/* 아래부터 컴포넌트명 변경필요 */}
                          <SAttendanceContainer>
                          <SAnnualInfo>
                              <SDotContainer>
                                <GoPrimitiveDot color = "#548AFF" />
                                <div>연차내역</div>
                              </SDotContainer>
                              <SAnnualInfoTable>
                                <table>
                                  <tr>
                                    <td>총발생</td>
                                    <td>15.5</td>
                                    <td>총사용</td>
                                    <td>6</td>
                                    <td>적치</td>
                                    <td>9.5</td>
                                  </tr>
                                </table>
                              </SAnnualInfoTable>
                            </SAnnualInfo>
                          </SAttendanceContainer>
                          <SNoticeContainer>
                          <SNoticeInfo>
                              <SDotContainer>
                                <GoPrimitiveDot color = "#548AFF" />
                                <div>공지사항</div>
                              </SDotContainer>
                              <SNoticeInfoTable>
                                {/* 사이즈 변경필요 */}
                                <input type="text" placeholder="내용을 입력해주세요"/>
                              </SNoticeInfoTable>
                            </SNoticeInfo>
                          </SNoticeContainer>
                          </>
                        )}
                  </TableContainer>
                );
              };


export default PayrollManageTable;

