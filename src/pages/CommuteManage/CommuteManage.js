import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import React, { useState, useContext, useEffect } from "react";
import { CommuteTable } from "../../components";
import CommuteTimeTable from "../../components/Table/CommuteTimeTable";
import axios from "axios";

import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton } from '@coreui/react'
import AppSidebar from "../../components/SideNav/AppSidebar";
import { Header } from "../../components/Header";

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
  width: 80%;

`

const SContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: auto;
  margin: 10px;
  padding: 10px 20px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  font-size: 1.1em;
  // font-weight: 600;


`

const SInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  min-width: 30%;
  gap: 0.8em;
  margin: 10px;
`

const SInputSection = styled.div`
  display: flex;
  gap: 1em;
  padding: 0.3em 0 0.5em 0;
  justify-content: flex-start;

  input {
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colors.black050}

  }

`

const SCategory = styled.div`
  width: 90%;
  height: 100%;
  padding: 10px 0px;
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black110};

`

const SButtonContainer = styled.div`
  display: flex;
  min-width: 30%;
  height: 130px;
  justify-content: flex-end;
  align-items: flex-end;
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
    background-color : ${({ theme }) => theme.colors.blue010};
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
    background-color : ${({ theme }) => theme.colors.blue010};
  }

`

const SCompanyTable = styled.div`
  display: flex;
  flex-direction: column;
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

const CommuteManage = () => {
  const [searchtext, setSearchtext] = useState([]);

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSearchtext(prevState => ({ ...prevState, [name]: value }));
  };

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
  // 라디오버튼
  const [selectedOption, setSelectedOption] = useState();
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);

  };
  // 체크박스버튼
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChanges = (e) => {
    setSelectedOptions(e.target.value);
  }
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <h2 className="gap-2 mb-4">근태관리&nbsp;{'>'}&nbsp;근태관리&nbsp;{'>'}&nbsp;사원별 근태관리</h2>
            <CCard className="mb-4">
              <CCardBody>
                <CRow>
                  <CCol style={{ fontSize: '17px', alignItems: "center" }} className="mb-3 col-8 d-flex justify-content-start">
                    <span>검색기간:&nbsp;</span>
                    <input size={200} type="month" name="pay_month" style={{ width: '110px' }} onChange={handleSelectChange} />
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
                  <CCol style={{ fontSize: '17px', alignItems: "center" }} className="mb-1 col-8 d-flex justify-content-start">
                    <span>사원명:&nbsp;</span>
                    <input size={200} name="empl_nm" style={{ width: '110px' }} onChange={handleSelectChange} />
                    <span>&nbsp;&nbsp;사원번호:&nbsp;</span>
                    <input size={200} name="empl_no" style={{ width: '110px' }} onChange={handleSelectChange} />
                    <span>&nbsp;&nbsp;직급:&nbsp;</span>
                    <input size={200} name="role" style={{ width: '110px' }} onChange={handleSelectChange} />
                  </CCol>

                  <CCol style={{ fontSize: '17px', alignItems: "center" }} className="col-8 d-flex justify-content-start">
                    <label>
                      <input
                        type="radio"
                        name="options"
                        value="option1"
                        checked={selectedOption === 'option1'}
                        onChange={handleOptionChange}
                      />
                      기기근태&nbsp;
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="options"
                        value="option2"
                        checked={selectedOption === 'option2'}
                        onChange={handleOptionChange}
                      />
                      종합근태&nbsp;
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="options"
                        value="option3"
                        checked={selectedOptions === 'option3'}
                        onChange={handleOptionChanges}
                      />
                      자동계산
                    </label>
                  </CCol>
                  <CCol className="gap-2 d-flex justify-content-end">
                    <CButton color="dark" variant="outline" >검색</CButton>
                    <CButton color="dark" variant="outline">내보내기</CButton>
                    <CButton color="dark" variant="outline">인쇄</CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <CCard style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <CommuteTimeTable />
              <CommuteTable />
            </CCard>
          </CContainer>
        </div>
      </div>
    </div >
  )

}

export default CommuteManage;