import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";

import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton, CInputGroup, CFormInput } from '@coreui/react'
import '../../components/Table/styles.css'
import AppSidebar from "../../components/SideNav/AppSidebar";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";


const SWrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 95%;
  height: 100%;


  text-align: left;
  line-height: 2;
  border-collapse: collaps;

  margin: 20px 10px;


  gap: 2em;



  input {
    border: none;
    border-radius: 5px;
    // padding: 15px;
  }


  tr td:nth-child(odd) {
    background-color: rgb(234, 234, 234);
    text-align: center;
    border: 1px solid #ccc;
  }

  td:nth-child(even) {  // 짝수번열
    background-color: white;
    text-align: center;
    border: 1px solid #ccc;

  }

  td {
    width: 25%;
    padding: 5 15px;
    // border-bottom: 1px solid ${({ theme }) => theme.colors.black050};
 
    > select {
      width: 100%;
      height: 100%;
      padding: 0;
      border: none;
    }
  }
  

`

const SCategoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  vertical-align: middle;



& > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: 1em;

  }
`

const SCompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  

  height: 30%;

  table {
    background-color: white;    
  }

`
const SManagerInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


table {
  background-color: white;
  border-radius: 5px;
  
  
}

`

const SButtonContainer = styled.div`
  display: flex;
  min-width: 90%;
  justify-content: flex-end;
  gap: 10px;
`


const DeviceDetailTable = ({ id }) => {
  const infos = JSON.parse(localStorage.getItem('user_info'));
  const login_id = infos.login_id;
  const navigate = useNavigate();
  const btnClick = () => {
    const nav_url = '/' + login_id + '/device';
    navigate(nav_url);
  }
  return (
    <SWrapper>
      <SCompanyInfo>
        <SButtonContainer>
          <CButton color="dark" variant="outline" onClick={btnClick}>취소</CButton>
          {id ? (
            <CButton color="dark" variant="outline" onClick={btnClick}>수정</CButton>
          ) : (
            <CButton color="dark" variant="outline" onClick={btnClick}>저장</CButton>
          )}
        </SButtonContainer>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>단말기 정보</h3>
        </SCategoryContainer>
        <table>
          <tbody>
            <tr>
              <td>단말기번호</td>
              <td><input type="text" /></td>
              <td>단말기명</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>모델명</td>
              <td><input type="text" /></td>
              <td>일련번호</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>제조사</td>
              <td><input type="text" /></td>
              <td></td>
              <td><input type="text" /></td>
            </tr>
          </tbody>
        </table>
      </SCompanyInfo>
      <SCompanyInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>설치정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>설치위치</td>
            <td><input type="text" /></td>
            <td>설치일시</td>
            <td><input type="date" /></td>
          </tr>
          <tr>
            <td>상태</td>
            <td>
              <select size={1}>
                <option value="1">사용</option>
                <option value="2">미사용</option>
              </select>
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </SCompanyInfo>
    </SWrapper>
  )
}

export default DeviceDetailTable;