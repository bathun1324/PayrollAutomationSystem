import axios from "axios";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../components";
import SideNav from "../../components/SideNav/SideNav";
import EmployeeTable from "../../components/Table/EmployeeTable";

import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton, CInputGroup, CFormInput } from '@coreui/react'
import '../../components/Table/styles.css'
import AppSidebar from "../../components/SideNav/AppSidebar";


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
  width: 5%;

}

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
const SInputContainer = styled.div`
  display: flex;
  width: auto;
  // min-width: 30%;
  gap: 1.1em;
  font-size: 0.9em;
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
    axios.get("http://13.125.117.184:8000/get_employees/")
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
      url = `http://13.125.117.184:8000/search_employees/?department=${searchtext.department}&employeeName=${searchtext.employeeName}&foreigner=${searchtext.foreigner}&employmentType=${searchtext.employmentType}&employmentStatus=${searchtext.employmentStatus}`
    } else {
      url = "http://13.125.117.184:8000/get_employees/"
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
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header breadcrumb={'인사관리 > 사원정보'} />
        <div className="body flex-grow-1 px-5" >
          {/* style={{ backgroundColor: 'white' }} */}
          <h2 className="gap-2 mb-4">사원정보</h2>
          <CCard className="mb-4">
            <CCardBody>
              <CRow>
                <CCol style={{ fontSize: '17px', alignItems: "center" }} className="col-10 d-flex justify-content-start">
                  <span>부서명:&nbsp;</span>
                  <select size={1} name="department" onChange={handleSelectChange}>
                    <option value="">선택</option>
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.nm}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                  <span>&nbsp;&nbsp;사원명:&nbsp;</span>
                  <input size={200} name="employeeName" style={{ width: '110px' }} onChange={handleSelectChange} />
                  <span>&nbsp;&nbsp;외국인여부:&nbsp;</span>
                  <select size={1} name="foreigner" onChange={handleSelectChange}>
                    <option value="">선택</option>
                    <option value="N">내국인</option>
                    <option value="Y">외국인</option>
                  </select>
                  <span>&nbsp;&nbsp;고용형태:&nbsp;</span>
                  <select size={1} name="employmentType" onChange={handleSelectChange}>
                    <option value="">선택</option>
                    <option value="상용">상용</option>
                    <option value="계약">계약</option>
                    <option value="일용">일용</option>
                  </select>
                  <span>&nbsp;&nbsp;재직여부:&nbsp;</span>
                  <select size={1} name="employmentStatus" onChange={handleSelectChange}>
                    <option value="">선택</option>
                    <option value="재직">재직</option>
                    <option value="퇴사">퇴사</option>
                    <option value="휴직">휴직</option>
                  </select>
                </CCol>
                <CCol className="gap-2 d-flex justify-content-end ">
                  <CButton color="dark" variant="outline" onClick={handleSearchClick}>검색</CButton>
                  <CButton color="dark" variant="outline" onClick={() => handleNewEmployeeClick()}>신규</CButton>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
          <CCard style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <EmployeeTable employees={searchresult} />
          </CCard>
        </div>
      </div>
    </div>
  )

}

export default EmployeeManage;