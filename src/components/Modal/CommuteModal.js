import styled from "styled-components";
import ModalTemplate from "./ModalTemplate";
import { useState, useEffect } from "react";
import { CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton } from '@coreui/react'

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`

const SModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
  min-height: 50%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 50%;  
  left: 50%;   
  transform: translate(-50%, -50%);

  p {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.1em;
  }


`
const SModalTable = styled.div`
  width: 90%;
  height: 60%;
  flex-direction: column;
  align-items: center;
  font-size: 1.1em;
  
  table {    
    width: 90%;
    height: 70%;
    text-align: right;
    display: flex;
  }
  
  
  tr > td {
    padding: 7px;
    font-weight: 500;
    border: 2px solid #ccc;
    vertical-align: middle;

    :nth-child(odd) {
      background-color: ${({theme}) => theme.colors.blue010};
    }


  input {
      border: none;
      width: 100%;
      height: 100%;
    }
  }


`
const SButtonCotainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8em;
  width: 80%;

  padding: 1.5em 0;

`

const SCancleButton = styled.button`
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

const SSaveButton = styled.button`
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


const NewCommuteModal = ({isOpen, closeModal, departments} ) => {

    const [data, setdata] = useState({
        constnt_type: '',
        reltn: '',
        constnt_nm: '',
        brthdy: '',
        livtgt_yn: 'Y',
        dednhope_yn: 'Y',
        dspsn_yn: 'Y'
    });

    const fmlyChange = (event) => {
        const { name, value } = event.target;
        setdata({
        ...data,
        [name]: value,
        });
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = departments.slice(indexOfFirstItem, indexOfLastItem);

    const renderTableRows = () => {
        return currentItems.map((companydata, index) => (
        <tr key={index+1}>
            <td style={{width:'200px'}}>{companydata.empl_nm}</td>
        </tr>
        ));
    };

    return (
    <SContainer style={{ display: isOpen ? "block" : "none" }}>
        <SModalBody>
        <CCard style={{ marginTop: '100px', height: '500px' }} className="mb-4 col-10">
            <p style={{ marginTop: '30px' }}>사원정보 조회</p>
            <CCardBody>
                <CRow>
                <CCol style={{ fontSize: '17px', alignItems: "center" }} className="mb-1 col-6 d-flex justify-content-end">
                            <span>사원명:&nbsp;</span>
                            <input size={200} name="empl_nm" style={{ width: '110px' }} />
                            <span>&nbsp;&nbsp;사원번호:&nbsp;</span>
                            <input size={200} name="empl_no" style={{ width: '110px' }} />
                </CCol>
                <CCol style={{ fontSize: '17px', alignItems: "center" }} className="mb-1 col-6 d-flex justify-content-start">
                    <SCancleButton style={{marginRight: '50px'}}>검색</SCancleButton>
                    <SCancleButton style={{color: 'black', marginRight: '10px', backgroundColor: 'lightgrey'}}>취소</SCancleButton>
                    <SCancleButton style={{backgroundColor: 'grey'}}>선택</SCancleButton>
                </CCol>
                </CRow>
                <CRow>
                <CCol style={{ fontSize: '17px' }} className="mb-1 col-4 d-flex justify-content-end">
                    <input type="textarea" style={{ height: '275px'}} name="constnt_type" value={data.constnt_type} onChange={fmlyChange}/>
                </CCol>
                <CCol style={{ fontSize: '17px' }} className="mb-1 col-6 d-flex justify-content-start">
                <SModalTable>
                    <table style={{width: '600px', fontSize: '14px'}}>
                        <tbody>
                            <tr>
                            <td>사원번호</td>
                            <td><input type="text" name="constnt_type" value={data.constnt_type} onChange={fmlyChange}/></td>
                            <td>성명</td>
                            <td><input type="text" name="reltn" value={data.reltn} onChange={fmlyChange}/></td>
                            </tr>
                            <tr>
                            <td>주민등록번호</td>
                            <td><input type="text" name="constnt_nm" value={data.constnt_nm} onChange={fmlyChange}/></td>
                            <td>성별</td>
                            <td><input type="text" name="reltn" value={data.reltn} onChange={fmlyChange}/></td>
                            </tr>
                            <tr>
                            <td>주민등록 주소</td>
                            <td><input type="text" name="reltn" value={data.reltn} onChange={fmlyChange}/></td>
                            <td>실 거주지 주소</td>
                            <td><input type="text" name="reltn" value={data.reltn} onChange={fmlyChange}/></td>
                            </tr>
                            <tr>
                            <td>입사일</td>
                            <td><input type="text" name="reltn" value={data.reltn} onChange={fmlyChange}/></td>
                            <td>퇴사일</td>
                            <td><input type="text" name="reltn" value={data.reltn} onChange={fmlyChange}/></td>
                            </tr>
                            <tr>
                            <td>부서명</td>
                            <td><input type="text" name="reltn" value={data.reltn} onChange={fmlyChange}/></td>
                            <td>고용형태</td>
                            <td><input type="text" name="reltn" value={data.reltn} onChange={fmlyChange}/></td>
                            </tr>
                            <tr>
                            <td>급여형태</td>
                            <td><input type="text" name="reltn" value={data.reltn} onChange={fmlyChange}/></td>
                            <td>직책</td>
                            <td><input type="text" name="reltn" value={data.reltn} onChange={fmlyChange}/></td>
                            </tr>
                            <tr>
                            <td>외국인여부</td>
                            <td><input type="text" name="reltn" value={data.reltn} onChange={fmlyChange}/></td>
                            <td>휴대폰번호</td>
                            <td><input type="text" name="reltn" value={data.reltn} onChange={fmlyChange}/></td>
                            </tr>
                            <tr>
                            <td>기본 출근시간</td>
                            <td><input type="text" name="reltn" value={data.reltn} onChange={fmlyChange}/></td>
                            <td>기본</td>
                            <td><input type="text" name="reltn" value={data.reltn} onChange={fmlyChange}/></td>
                            </tr>
                        </tbody>
                    </table>
                    </SModalTable>
                </CCol>
                </CRow>
            </CCardBody>
        </CCard>
        <SButtonCotainer>
          <SCancleButton onClick={closeModal}>취소</SCancleButton>
          <SSaveButton onClick={() => { closeModal(); }}>저장</SSaveButton>
        </SButtonCotainer>
      </SModalBody>
    </SContainer>
  )
}


export default NewCommuteModal;