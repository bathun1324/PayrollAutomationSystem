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

  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_departments/")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_departments/")
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
      url = "http://13.125.117.184:8000/get_departments/"
    }

    axios.get(url)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 권한 컨텍스트와 메뉴 아이템 컨텍스트
  const userRole = useContext(UserRoleContext);
  const menuItems = useContext(MenuItemsContext);

  // 해당 권한에 맞는 메뉴 아이템 가져오기
  const userMenuItems = menuItems[userRole];

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
        <Header />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <h2 className="gap-2 mb-4">기초정보관리&nbsp;{'>'}&nbsp;조직정보&nbsp;{'>'}&nbsp;부서정보</h2>
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
                  <CCol className="gap-2 d-md-flex justify-content-end">
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