import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyDummy } from "../../pages/CompanyManage/CompanyDummy";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import NewFamilyModal from "../Modal/NewFamilyModal";
import axios from 'axios';  // axios를 임포트하여 API 호출에 사용

import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton, CInputGroup, CFormInput } from '@coreui/react'
import '../../components/Table/styles.css'
import AppSidebar from "../../components/SideNav/AppSidebar";

const TableContainer = styled.div`
 
display: flex;
flex-direction: column;
justify-content: center;

width: 95%;

text-align: left;
line-height: 2;
border-collapse: collaps;

gap: 2em;


input {
  border: none;
  border-radius: 5px;
  // padding: 15px;
  text-align: center;
  width: 100%;
}
table {
  text-align: center;
}

th {
  background-color: rgb(234, 234, 234);
  border-bottom: 2px solid rgb(210, 210, 214);
}

tr td:nth-child(odd) {
  background-color: white;
}


td {
  width: 12%;
  padding: 5 15px;
  // border-bottom: 1px solid ${({ theme }) => theme.colors.black050};

  > select {
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
  }
}
  

`;

const SNoDataMsg = styled.td`
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
  color:  ${({ theme }) => theme.colors.blue090};
`;


const SButtonContainer = styled.div`
  display: flex;
  min-width: 90%;
  justify-content: flex-end;
  gap: 10px;
`




const EmployeeDetailFamilyTable = ({ tablefmly }) => {
  const navigate = useNavigate();

  //가족사항추가모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [familyData, setFamilyData] = useState([]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setFamilyData(tablefmly);
  }, [tablefmly]);

  const parentFunction = (x) => {
    setFamilyData([...familyData, x]);
    console.log('테이블에 출력되는 데이터 리스트->', familyData); // 배열에 추가된 상태를 확인할 수 있습니다.
  };


  const renderTableRows = () => {
    return familyData.map((familyData, index) => (
      <tr key={index + 1}>
        <td><input name="fmly_no" value={index + 1} readOnly /></td>
        <td><input name="reltn_val" value={familyData.reltn_val} readOnly /></td>
        <td><input name="constnt_nm" value={familyData.constnt_nm} readOnly /></td>
        <td><input name="brthdy" value={familyData.brthdy} readOnly /></td>
        <td><input name="livtgt_yn" value={familyData.livtgt_yn} readOnly /></td>
        <td><input name="dednhope_yn" value={familyData.dednhope_yn} readOnly /></td>
        <td><input name="dspsn_yn" value={familyData.dspsn_yn} readOnly /></td>
      </tr>
    ));
  };

  const currentItems = familyData.slice(indexOfFirstItem, indexOfLastItem);

  const renderPaginationButtons = () => {
    const pageNumbers = familyData.length === 0 ? 1 : Math.ceil(familyData.length / itemsPerPage);

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
  // 저장버튼 이벤트 처리
  const handlepost = () => {
    axios.post('http://13.125.117.184:8000/fmly_employees/', familyData)  // 백엔드 API 엔드포인트에 맞게 수정
      .then(response => {
        console.log('부서 정보 저장 성공:', response.data);
        navigate('/admin/employee');
      })
      .catch(error => {
        console.log('error');
        console.error('API 호출 에러:', error);
      });
  };
  const infos = JSON.parse(localStorage.getItem('user_info'));
  const login_id = infos.login_id;

  return (
    <TableContainer>
      {(login_id == "user") ? null : (
        <SButtonContainer className="gap-2 d-flex justify-content-end" >
          <CButton color="danger" variant="outline" onClick={openModal}>추가</CButton>
          <NewFamilyModal isOpen={isModalOpen} closeModal={closeModal} parentFunction={parentFunction} />
          {/* <CButton color="danger" variant="outline" onClick={handlepost}>저장</CButton> */}
        </SButtonContainer>

      )}
      <table style={{ border: '2px solid rgb(210, 210, 214)', marginBottom: '100px', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>관계</th>
            <th>성명</th>
            <th>생년월일</th>
            <th>동거여부</th>
            <th>공제희망여부</th>
            <th>장애인여부</th>
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


export default EmployeeDetailFamilyTable;

