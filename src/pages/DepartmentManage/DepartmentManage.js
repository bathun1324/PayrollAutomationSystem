import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import React, { useState, useContext, useEffect } from "react";
import { UserRoleContext, MenuItemsContext } from "../../App";
import { Header } from "../../components";
import { DepartmentTable } from "../../components/Table/DepartmentTable";
import NewDepartModal from "../../components/Modal/NewDepartModal";
import DeleteModal from "../../components/Modal/DeleteModal";
import axios from "axios";

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  `
  
  const SContentWrapper = styled.div`
  display: flex;
  width: 100%;

  background-color: #f8f9fa;
`

const SContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100% - 60px);
  padding: 30px;
  width: 100%;

`

const SContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 6%;
  margin: 10px;
  padding: 10px 20px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  font-size: 1.2em;

& > input {
  border: none;
  font-size: 1em;
  width: 30%;

}

`

const SCategory = styled.div`
  width: 90%;
  height: auto;

  padding: 10px 0px;
  font-size: 28px;
  font-weight: 600;
  color: rgb(127, 127, 127);

`

const SCategoryWrapper = styled.div`
  display: flex;
  gap: 0.5em;
`

const SButtonContainer = styled.div`
  display: flex;
  min-width: 40%;
  justify-content: flex-end;
  gap: 10px;
`

const SSerchButton = styled.button`
  flex-wrap: wrap;
  width: 80px;
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

const SNewButton = styled(SSerchButton)`
`
const SDeleteButton = styled(SSerchButton)`
background-color: ${({theme}) => theme.colors.black110};
`


const SCompanyTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 80%;
  margin: 10px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`

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
    axios.get("http://127.0.0.1:8000/get_departments/")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    axios.get("http://127.0.0.1:8000/get_departments/")
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
      url = `http://127.0.0.1:8000/search_departments/?department_id=${searchtext}`
    }else{
      url = "http://127.0.0.1:8000/get_departments/"
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

  return (
  <SWrapper>
    <Header />
    <SContentWrapper>
      <SideNav menuItems={userMenuItems} />
      <SContentContainer>
        <SCategory>
          <div>부서관리</div>
        </SCategory>
        <SContentHeader>
          <SCategoryWrapper>
            <div>부서명 : </div>
            <select size={1} onChange={handleSelectChange}>
            <option value="">선택해주세요</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </SCategoryWrapper>
          <SButtonContainer>
            <SSerchButton onClick={handleSearchClick}>검색</SSerchButton>
            <SNewButton onClick={openModal}>신규</SNewButton>
            <SDeleteButton onClick={openDeleteModal}>삭제</SDeleteButton>
          </SButtonContainer>
        </SContentHeader>
        <SCompanyTable>
          <NewDepartModal  isOpen={isModalOpen} closeModal={closeModal}/>
          <DeleteModal  isOpen={isDeleteModalOpen} closeModal={closeDeleteModal} selectedDepartmentIds={selectedDepartmentIds}/>
          <DepartmentTable departments={searchResults} selectedDepartmentIds={selectedDepartmentIds} setSelectedDepartmentIds={setSelectedDepartmentIds}/>
        </SCompanyTable>
      </SContentContainer>
    </SContentWrapper>
  </SWrapper>
  )

}

export default DepartmentManage;