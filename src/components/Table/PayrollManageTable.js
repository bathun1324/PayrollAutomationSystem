import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyDummy } from "../../pages/CompanyManage/CompanyDummy";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { BsFillCalculatorFill, BsPrinter } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton, CInputGroup, CFormInput } from '@coreui/react'
import '../../components/Table/styles.css'
import AppSidebar from "../../components/SideNav/AppSidebar";

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
  // 직원정보 테이블
  table tr:nth-child(even) {
    background-color: ${({ theme }) => `rgb(242, 242, 243)`};

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
  color:  ${({ theme }) => `rgb(79, 93, 115)`};
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
  background-color: ${({ theme }) => theme.colors.blue090};
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
background-color: ${({ theme }) => theme.colors.blue090};
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
background-color: ${({ theme }) => theme.colors.blue090};
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
  // padding-top: 20px;
  margin: 1em 0;
  gap: 0.5em;
`




const SPaymentInfo = styled(SBasicInfo)`
  width: 100%;
`


const SDotContainer = styled.div`
  display: flex;
  width: 10%;
  // border: 1px solid blue;
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
const SDotContainer2 = styled(SDotContainer)`
  padding: 1em 0 0.5em 0;
`


const SBasicInfoTable = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-right: 0px;
  border-top: 2px solid #ccc;

  table {
    width: 100%;
    border: 2px solid #ccc;
    font-size: 0.8em;
    
  }

  th {
    text-align: right;
    padding: 0.2em 0.6em;
    font-weight: 400;
    font-size: 1em;
    height: 3em;
    // 나머지 테이블
    background-color: ${({ theme }) => `rgb(234, 234, 234)`};
    border-right: 1px solid #ccc; /* 우측 테두리를 1px 두께의 실선으로 설정 */

  }
  
  td {
    width: 16%;
    border-right: 1px solid #ccc; /* 우측 테두리를 1px 두께의 실선으로 설정 */
  }


  td:nth-child(odd) {  //홀수번열
    // 기본정보의 테이블
    background-color: ${({ theme }) => `rgb(234, 234, 234)`};
    text-align: center;
    padding: 0.2em 0.6em;  // 상 우 하 좌
    
  }

  td:nth-child(even) {  // 짝수번열
    background-color: white;
    text-align: center;
  }

tr {
  border: 2px solid #ccc;
  // height: 10%;
}

input {
  border: none;
  width: 100%;
}
`
const SBasicInfoTable2 = styled.div`
width: 100%;
padding-top: 20px;
padding-right: 0px;
border-top: 2px solid #ccc;



table {
  width: 100%;
  border: 2px solid #ccc;
  font-size: 0.7em;
  text-align: center;
}

th {
  padding: 0.2em 0.6em;
  font-size: 1em;
  height: 3em;
  // 나머지 테이블
  background-color: ${({ theme }) => `rgb(234, 234, 234)`};
  border: 1px solid #ccc;
  vertical-align: middle;
}

td {
  width: 14%;
  border-right: 1px solid #ccc; /* 우측 테두리를 1px 두께의 실선으로 설정 */
  vertical-align: middle;
  background-color: white;
}

tr {
border: 2px solid #ccc;

}

input {
border: none;
width: 100%;
}
`
const SBasicInfoTable3 = styled.div`
width: 43%;
padding-top: 20px;
padding-right: 0px;

table {
  width: 100%;
  border: 2px solid #ccc;
  font-size: 0.8em;
  
}

th {
  text-align: center;
  padding: 0.2em 0.6em;
  font-weight: 400;
  font-size: 1em;
  height: 3em;
  // 나머지 테이블
  background-color: ${({ theme }) => `rgb(234, 234, 234)`};
  border-right: 1px solid #ccc; /* 우측 테두리를 1px 두께의 실선으로 설정 */

}

td {
  width: 50%;
  border-right: 1px solid #ccc; /* 우측 테두리를 1px 두께의 실선으로 설정 */
}

th:last-child, td:last-child {
  border-right: none; /* 우측 테두리 제거 */
}

td:nth-child(odd) {  //홀수번열
  // 기본정보의 테이블
  text-align: center;
  padding: 0.2em 0.6em;  // 상 우 하 좌
  
}

td:nth-child(even) {  // 짝수번열
  background-color: white;
  text-align: center;
}

tr {
border: 2px solid #ccc;
// height: 10%;
}

input {
border: none;
width: 100%;
}
`


const SBasicInfoTable4 = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-right: 0px;
  border-top: 2px solid #ccc;

  table {
    width: 100%;
    border: 2px solid #ccc;
    font-size: 0.8em;
    text-align: center;
  }

  th {
    padding: 0.2em 0.6em;
    font-weight: 400;
    height: 3em;
    // 나머지 테이블
    background-color: ${({ theme }) => `rgb(234, 234, 234)`};
    border-right: 1px solid #ccc; /* 우측 테두리를 1px 두께의 실선으로 설정 */

  }
  
  td {
    width: 16%;
    background-color: white;
    border-right: 1px solid #ccc; /* 우측 테두리를 1px 두께의 실선으로 설정 */
  }


tr {
  border: 2px solid #ccc;
  // height: 10%;
}

input {
  border: none;
  width: 100%;
}
`


const SPaymentInfoTable = styled(SBasicInfoTable)`
  width: 100%;
  // border: 1px solid red;
  display: flex;
flex-direction: column;
  height: 30%;
  
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
    background-color: ${({ theme }) => theme.colors.blue010};
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
      background-color: ${({ theme }) => theme.colors.blue010};
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
  // border: 1px solid green;
`
const SAttendanceInfo = styled(SPaymentInfo)`
  justify-content: flex-start;
  // border: 1px solid orange;
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


const PayrollManageTable = ({ tabledata }) => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tabledata.slice(indexOfFirstItem, indexOfLastItem);

  const [selectedEmployee, setSelectedEmployee] = useState(null); // State 추가
  const handleEmployeeClick = (companydata) => {
    setSelectedEmployee(companydata); // 클릭한 사원 데이터를 상태에 저장
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableRows = () => {
    return currentItems.map((companydata, index) => (
      <tr key={companydata.empl_no}>
        <td>{index + 1}</td>
        <td>{companydata.dept_nm}</td>
        <td onClick={() => handleEmployeeClick(companydata)}>{companydata.empl_no}</td>
        <td>{companydata.empl_nm}</td>
        <td>{companydata.empl_rspofc}</td>
        <td>{companydata.empl_encpnd}</td>
        <td>{companydata.empl_salary_form}</td>
      </tr>
    ));
  };

  const renderPaginationButtons = () => {
    const pageNumbers = Math.ceil(tabledata.length / itemsPerPage);

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
      <PaginationContainer>
        {renderPaginationButtons()}
      </PaginationContainer>
      {selectedEmployee && ( // 선택된 데이터가 있을 때에만 아래 컴포넌트들을 활성화
        <>
          <CCardBody>
            <CRow>
              <CCol className="gap-2 d-flex justify-content-end" style={{ height: "40px" }} >
                <span>자동계산</span>
                <span>
                  <select size={1}>
                    <option value={"false"}>false</option>
                    <option value={"true"}>true</option>
                  </select>
                </span>
                <CButton color="dark" variant="outline">
                  <BsFillCalculatorFill />계산하기
                </CButton>
                <CButton color="dark" variant="outline" >저장하기</CButton>
                <CButton color="dark" variant="outline" ><BsPrinter />인쇄</CButton>
              </CCol>
            </CRow>
          </CCardBody>
          {/* 기본정보시작 */}
          <SBasicInfo>
            <SDotContainer>
              <div>기본정보</div>
            </SDotContainer>
            <SBasicInfoTable>
              <table>
                <tr>
                  <td>급여기준액</td>
                  {/* 아래와같이 value에 데이터 연결 필요 */}
                  <td><input type="text" /></td>
                  <td>성명</td>
                  <td><input type="text" /></td>
                  <td>입사일자</td>
                  <td><input type="date" /></td>
                </tr>
                <tr>
                  <td>부서명</td>
                  <td><input type="text" /></td>
                  <td>직책</td>
                  <td><input type="text" /></td>
                  <td>계좌번호</td>
                  <td><input type="text" /></td>
                </tr>
              </table>
            </SBasicInfoTable>
          </SBasicInfo>
          {/* 지급내역 */}
          <SBasicInfo>
            <SDotContainer>
              <div>지급내역</div>
            </SDotContainer>
            <SBasicInfoTable2>
              <SDotContainer>
                <GoPrimitiveDot color="#548AFF" />
                <div>공통항목</div>
              </SDotContainer>
              <table style={{}}>
                <tr>
                  <th>기본급</th>
                  <th>야간근로수당</th>
                  <th>연장근로수당</th>
                  <th>연차수당</th>
                  <th>인센티브(성과금)</th>
                  <th>휴일근로수당</th>
                  <th rowSpan={2}>공통항목합계액</th>
                </tr>
                <tr>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <th>휴일연장수당</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <td rowSpan={2}><input type="text" /></td>
                </tr>
                <tr>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                </tr>
              </table>
              <SDotContainer2 >
                <GoPrimitiveDot color="#548AFF" />
                <div>특별수당</div>
              </SDotContainer2>
              <table>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th rowSpan={2}>특별수당합계액</th>
                </tr>
                <tr>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <td rowSpan={2}><input type="text" /></td>
                </tr>
                <tr>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                </tr>
              </table>
              <SBasicInfoTable3 className="float-end">
                <table>
                  <tr>
                    <th>지급합계액</th>
                    <td><input type="text" /></td>
                  </tr>
                </table>
              </SBasicInfoTable3>
            </SBasicInfoTable2>

          </SBasicInfo>

          {/* 공제내역시작 */}
          <SBasicInfo>
            <SDotContainer>
              <div>공제내역</div>
            </SDotContainer>
            <SBasicInfoTable2>
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
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <th>장기요양보험정산</th>
                  <th>지방소득세</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <td rowSpan={2}><input type="text" /></td>
                </tr>
                <tr>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                </tr>
              </table>
              <SBasicInfoTable3 className="float-end">
                <table>
                  <tr>
                    <th>과세기준(A)</th>
                    <th>차인지급액(A-B)</th>
                  </tr>
                  <tr>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                  </tr>
                </table>
              </SBasicInfoTable3>
            </SBasicInfoTable2>

          </SBasicInfo>

          {/* 근태내역 시작 */}
          <SBasicInfo>
            <SDotContainer>
              <div>근태내역</div>
            </SDotContainer>
            <SBasicInfoTable4>
              <table>
                <tr>
                  <th>기본근로</th>
                  <th>평일근로시간</th>
                  <th>휴일근로시간</th>
                  <th>야간근로시간</th>
                  <th>휴일연장시간</th>
                  <th>평일연장시간</th>
                </tr>
                <tr>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <th>주휴시간</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                </tr>
              </table>
            </SBasicInfoTable4>
          </SBasicInfo>
          {/* 연차내역 시작 */}
          <SBasicInfo>
            <SDotContainer>
              <div>연차내역</div>
            </SDotContainer>
            <SBasicInfoTable>
              <table>
                <tr>
                  <td>총발생</td>
                  {/* 아래와같이 value에 데이터 연결 필요 */}
                  <td><input type="text" /></td>
                  <td>총사용</td>
                  <td><input type="text" /></td>
                  <td>적치</td>
                  <td><input type="text" /></td>
                </tr>
              </table>
            </SBasicInfoTable>
          </SBasicInfo>
          <SNoticeContainer>
            <SNoticeInfo>
              <SDotContainer>
                <div>공지사항</div>
              </SDotContainer>
              <SNoticeInfoTable>
                {/* 사이즈 변경필요 */}
                <input type="text" placeholder="내용을 입력해주세요" />
              </SNoticeInfoTable>
            </SNoticeInfo>
          </SNoticeContainer>
        </>
      )}
    </TableContainer>
  );
};


export default PayrollManageTable;

