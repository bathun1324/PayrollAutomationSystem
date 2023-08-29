import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import React, { useState, useContext, useEffect, useParams } from "react";
import EmployeeTable from "../../components/Table/EmployeeTable";
import { Header } from "../../components";
import { useNavigate } from "react-router-dom";
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

  font-size: 0.9em;

& > input {
  border: ${({theme}) => theme.colors.black110};
  font-size: 1em;
  width: 5%;

}

`

const SCategory = styled.div`
  width: 90%;

  padding: 10px 0px;
  font-size: 28px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.black110};

`

const SButtonContainer = styled.div`
  display: flex;
  min-width: 30%;
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

const SNewButton = styled.button`
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

const EmployeeManage = () => {
  const navigate = useNavigate();

  const handleNewEmployeeClick = () => {
    navigate('./employeedetail');
  };


  //const newEmployeePage = navigate(`./employeedetail`);
  const [departments, setDepartments] = useState([]); // departments 변수를 useState로 정의
  const [searchtext, setSearchtext] = useState([]);
  const [searchresult, setSearchResult] = useState([]);

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
    axios.get("http://127.0.0.1:8000/get_employees/")
      .then((response) => {
        setSearchResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  const handleSearchClick = () => {
    let url

    if (searchtext) {
      url = `http://127.0.0.1:8000/search_employees/?department=${searchtext.department}&employeeName=${searchtext.employeeName}&foreigner=${searchtext.foreigner}&employmentType=${searchtext.employmentType}&employmentStatus=${searchtext.employmentStatus}`
    }else{
      url = "http://127.0.0.1:8000/get_employees/"
    }
  
    axios.get(url)
      .then((response) => {
        console.log("여기");
        console.log(response.data);
        setSearchResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSearchtext(prevState => ({ ...prevState, [name]: value }));
  };
  
  return (
  <SWrapper>
    <Header />
    <SContentWrapper>
      <SideNav />
      <SContentContainer>
        <SCategory>
          <div>사원정보</div>
        </SCategory>
        <SContentHeader>
        <div>부서명 : </div>
          <select size={1} name="department" onChange={handleSelectChange}>
            <option value="">선택</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.nm}>
                {dept.name}
              </option>
            ))}
          </select>

          <div>사원명 : </div>
          <input type="text" placeholder="입력" name="employeeName" onChange={handleSelectChange} />

          <div>외국인여부 : </div>
          <select size={1} name="foreigner" onChange={handleSelectChange}>
            <option value="">선택</option>
            <option value="X">X</option>
            <option value="O">O</option>
          </select>

          <div>고용형태 : </div>
          <select size={1} name="employmentType" onChange={handleSelectChange}>
            <option value="">선택</option>
            <option value="상용">상용</option>
            <option value="계약">계약</option>
            <option value="일용">일용</option>
          </select>

          <div>재직여부 : </div>
          <select size={1} name="employmentStatus" onChange={handleSelectChange}>
            <option value="">선택</option>
            <option value="재직">재직</option>
            <option value="퇴사">퇴사</option>
            <option value="휴직">휴직</option>
          </select>
          <SButtonContainer>
            <SSerchButton onClick={handleSearchClick}>검색</SSerchButton>

            <SNewButton onClick={() => handleNewEmployeeClick()}>신규</SNewButton>

          </SButtonContainer>
        </SContentHeader>
        <SCompanyTable>
          <EmployeeTable employees={searchresult}/>
        </SCompanyTable>
      </SContentContainer>
    </SContentWrapper>
  </SWrapper>
  )

}

export default EmployeeManage;