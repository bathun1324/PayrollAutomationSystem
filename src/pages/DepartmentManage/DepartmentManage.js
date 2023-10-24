import styled from "styled-components";
import AppSidebar from "../../components/SideNav/AppSidebar";
import { Header } from "../../components/Header";
import React, { useState, useContext, useEffect } from "react";
import { UserRoleContext, MenuItemsContext } from "../../App";
import { DepartmentTable } from "../../components/Table/DepartmentTable";
import NewDepartModal from "../../components/Modal/NewDepartModal";
import DeleteModal from "../../components/Modal/DeleteModal";
import axios from "axios";
import { Provider } from 'react-redux'
import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton } from '@coreui/react'

const DepartmentManage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const [selectedDepartmentIds, setSelectedDepartmentIds] = useState([]);

  const [departments, setDepartments] = useState([]); // departments 변수를 useState로 정의
  const [searchtext, setSearchtext] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const infos = JSON.parse(localStorage.getItem('user_info'));
  const corp_no = infos.corp_no; // 회사 id'


  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    let url = `http://13.125.117.184:8000/get_departments/?corp_no=${corp_no}`
    axios.get(url)
      .then((response) => {

        setDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_departments/?corp_no=${corp_no}")
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const handleSearchClick = () => {
    let url

    if (searchtext) {
      url = `http://13.125.117.184:8000/search_departments/?department_id=${searchtext}`
    } else {
      url = "http://13.125.117.184:8000/get_departments/?corp_no=${corp_no}"
    }

    axios.get(url)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSelectChange = (e) => {
    setSearchtext(e.target.value);
  };

  // // 출력, 사이드바를 닫고 출력
  // const timesleep = () => {
  //   if (sidebarShow) {
  //     dispatch({ type: 'set', sidebarShow: !sidebarShow })
  //   }
  //   const timer = setTimeout(() => {
  //     handlePrint();
  //   }, 500);
  //   return () => clearTimeout(timer);

  // }
  // const handlePrint = () => {
  //   const printableArea = document.getElementById('printableArea');
  //   if (printableArea) {
  //     window.print();
  //   }
  // };

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header breadcrumb={'기초정보관리 > 조직정보 > 부서정보'} />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <h2 className="gap-2 mb-4">부서정보</h2>
            <CCard className="mb-4">
              <CCardBody>
                <CRow>
                  <CCol style={{ fontSize: '17px', display: "flex", alignItems: "center" }} className="justify-content-start">
                    <span>부서명:&nbsp;</span>
                    <select size={1} onChange={handleSelectChange}>
                      <option value="">선택해주세요</option>
                      {departments.map((dept) => (
                        <option key={dept.id} value={dept.id}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </CCol>
                  <CCol className="gap-2 d-flex justify-content-end">
                    <CButton color="dark" variant="outline" onClick={handleSearchClick}>검색</CButton>
                    <CButton color="dark" variant="outline" onClick={openModal}>신규</CButton>
                    <CButton color="danger" variant="outline" onClick={openDeleteModal}>삭제</CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <CCard style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '4.5rem'
            }}>
              {/* 신규 삭제 */}
              <NewDepartModal isOpen={isModalOpen} closeModal={closeModal} />
              <DeleteModal isOpen={isDeleteModalOpen} closeModal={closeDeleteModal} selectedDepartmentIds={selectedDepartmentIds} />

              <DepartmentTable departments={searchResults} selectedDepartmentIds={selectedDepartmentIds} setSelectedDepartmentIds={setSelectedDepartmentIds} />
            </CCard>
          </CContainer>
        </div>
      </div>
    </div >
  )

}

export default DepartmentManage;