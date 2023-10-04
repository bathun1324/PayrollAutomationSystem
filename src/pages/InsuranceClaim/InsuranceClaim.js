import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import React, { useState, useContext, useEffect } from "react";
import InsuranceClaimTable from "../../components/Table/InsuranceClaimTable";
import { Header } from "../../components";

import AppSidebar from "../../components/SideNav/AppSidebar";
import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton } from '@coreui/react'
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
  width: 80%;
  max-width: 80%;

`

const SContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 90%;
  height: auto;
  min-height: 6%;

  margin: 10px;
  padding: 10px 20px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  font-size: 1.em;

& > input {
  border: none;
  font-size: 1em;
  width: 5%;

}

`

const SInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 30%;
  gap: 0.3em;


  div {
    font-size: 0.9em;
    gap: 0.2em;
  }
`

const SInputInnerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-width: 30%;
  gap: 0.5em;
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
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  max-width: 90%;
  height: 80%;
  margin: 10px;
  padding: 30px 30px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  overflow-x: auto;
`

const InsuranceClaim = () => {
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


  const [selectedOptions, setSelectedOptions] = useState([]);

  // 옵션 목록
  const options = [
    '국민연금',
    '고용보험',
    '건강보험,장기요양보험',
    '정산항목',
    '소득세',
  ];

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        // 이미 선택된 경우 선택 해제
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        // 선택되지 않은 경우 선택
        return [...prevSelectedOptions, value];
      }
    });
  };

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header breadcrumb={'급여관리 > 보험 및 세금 > 보험적취내역'} />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <h2 className="gap-2 mb-4">보험적취내역</h2>
            <CCard className="mb-4">
              <CCardBody>
                <CRow>
                  <CCol style={{ fontSize: '17px', alignItems: "center" }} className="col-8 d-flex justify-content-start">
                    <span>검색년도:&nbsp;</span>
                    <input size={200} type="date" name="pay_month" style={{ width: '110px' }} onChange={handleSelectChange} />
                    <span>&nbsp;&nbsp;부서명:&nbsp;</span>
                    {/* name값주기 */}
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
                    <CButton color="dark" variant="outline" >검색</CButton>
                    <CButton color="dark" variant="outline">내보내기</CButton>
                    <CButton color="dark" variant="outline">인쇄</CButton>
                  </CCol>
                  <CCol style={{ fontSize: '17px', alignItems: "center" }} className="col-8 d-flex justify-content-start">
                    <span>퇴직연금:&nbsp;</span>
                    {options.map((option, index) => (
                      <label key={index}>
                        <input
                          type="checkbox"
                          value={option}
                          checked={selectedOptions.includes(option)}
                          onChange={handleCheckboxChange}
                        />
                        {option}&nbsp;&nbsp;
                      </label>))}
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <CCard style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <InsuranceClaimTable />
            </CCard>
          </CContainer>
        </div>
      </div>
    </div >
  )

}

export default InsuranceClaim;