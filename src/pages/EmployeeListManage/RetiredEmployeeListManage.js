import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../../components";
import SideNav from "../../components/SideNav/SideNav";
import RetiredEmployeeListTable from "../../components/Table/RetiredEmployeeListTable";
import { managerIconMapping, managerMenuItems } from "../../utils/userRollMenuItems";

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
  justify-content: flex-start;
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
  width: 5%;

}

`

const SInputContainer = styled.div`
  display: flex;
  width: 20%;
  min-width: 20%;
  gap: 1.1em;
`

const SCategory = styled.div`
  width: 90%;

  padding: 10px 0px;
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black110};

`

const SButtonContainer = styled.div`
  display: flex;

  justify-content: flex-end;
  gap: 10px;
`

const SSerchButton = styled.button`
  flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({ theme }) => theme.colors.blue090};
  border-radius: 3px;
  border: none;

  
  &:hover{  
    background-color : skyblue;
  }
`

const SNewButton = styled.button`
  flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({ theme }) => theme.colors.blue090};
  border-radius: 3px;
  border: none;

  &:hover{  
    background-color : skyblue;
  }

`

const SPrintButton = styled(SNewButton)`

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

const RetiredEmployeeListManage = () => {
  const [departments, setDepartments] = useState([]);
  const [searchtext, setSearchtext] = useState([]);
  const [searchresult, setSearchResult] = useState([]);

  useEffect(() => {
    // 백엔드에서 퇴직자 데이터 가져오기
    axios.get("http://127.0.0.1:8000/get_retireemployeelist/")
      .then((response) => {
        setSearchResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

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

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSearchtext(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSearchClick = () => {
    let url

    if (searchtext.encpnd || searchtext.retire_date || searchtext.dept_id) {   // 입사일 부서번호 직급
      url = `http://127.0.0.1:8000/search_retireemployeelist/?encpnd=${searchtext.encpnd}&retire_date=${searchtext.retire_date}&dept_id=${searchtext.dept_id}`
    } else {
      url = "http://127.0.0.1:8000/get_retireemployeelist/"
    }

    axios.get(url)
      .then((response) => {
        setSearchResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SWrapper>
      <Header />
      <SContentWrapper>
        <SideNav userRole={"admin"} menuItems={managerMenuItems} iconMapping={managerIconMapping} />
        <SContentContainer>
          <SCategory>
            <div>퇴직자명부조회</div>
          </SCategory>
          <SContentHeader>
            <SInputContainer>
              <div>입사일 : </div>
              <input size={200} type="date" name="encpnd" onChange={handleSelectChange} />
            </SInputContainer>
            <SInputContainer>
              <div>퇴직일 : </div>
              <input size={200} type="date" name="retire_date" onChange={handleSelectChange} />
            </SInputContainer>
            <SInputContainer>
              <div>부서명 : </div>
              <select size={1} name="dept_id" onChange={handleSelectChange}>
                <option value="">선택</option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </SInputContainer>
            <SButtonContainer>
              <SSerchButton onClick={handleSearchClick}>검색</SSerchButton>
              <SPrintButton>인쇄</SPrintButton>
            </SButtonContainer>
          </SContentHeader>
          <SCompanyTable>
            <RetiredEmployeeListTable retirelist={searchresult} />
          </SCompanyTable>
        </SContentContainer>
      </SContentWrapper>
    </SWrapper>
  )

}

export default RetiredEmployeeListManage;