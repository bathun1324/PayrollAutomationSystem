import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import { useState, useEffect } from "react";
import { AttendanceTable } from "../../components";
import { Header } from "../../components";
import axios from "axios";
import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton, CInputGroup, CFormInput } from '@coreui/react'
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

const SInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  min-width: 30%;
  gap: 1.1em;
  font-size:0.75em;
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

const SOutButton = styled.button`
  flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({ theme }) => theme.colors.black110};
  border-radius: 3px;
  border: none;

  &:hover{  
    background-color : skyblue;
  }

`
const SPrintButton = styled.button`
  flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({ theme }) => theme.colors.black110};
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

const AttendanceManage = () => {

  const [departments, setDepartments] = useState([]); // departments 변수를 useState로 정의

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

  const [attendancemanage, setAttendanceManage] = useState([]); // departments 변수를 useState로 정의
  const [searchtext, setSearchtext] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_attendace/")
      .then((response) => {
        setAttendanceManage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_attendace/")
      .then((response) => {
        setSearchResults(response.data);
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

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header breadcrumb={'근태관리 > 근태현황 > 일별 근태조회'} />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <h2 className="gap-2 mb-4">일별 근태조회</h2>
            <CCard className="mb-4">
              <CCardBody>
                <CRow>
                  <CCol style={{ fontSize: '17px', alignItems: "center" }} className="col-8 d-flex justify-content-start">
                    <span>검색기간:&nbsp;</span>
                    <input size={200} type="date" name="start_date" style={{ width: '110px' }} onChange={handleSelectChange} />
                    <span>&nbsp;&nbsp;~&nbsp;</span>
                    <input size={200} type="date" name="end_date" style={{ width: '110px' }} onChange={handleSelectChange} />
                    <span>&nbsp;&nbsp;부서명:&nbsp;</span>
                    <select size={1} onChange={handleSelectChange}>
                      <option value="">선택해주세요</option>
                      {departments.map((dept) => (
                        <option key={dept.id} value={dept.id}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </CCol>
                  <CCol className="gap-2 d-flex justify-content-end ">
                    <CButton color="dark" variant="outline" >검색</CButton>
                    <CButton color="dark" variant="outline" >내보내기</CButton>
                    <CButton color="dark" variant="outline" >인쇄</CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <CCard style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <AttendanceTable attendancemanage={attendancemanage} />
            </CCard>
          </CContainer>
        </div>
      </div>
    </div>
  )

}

export default AttendanceManage;