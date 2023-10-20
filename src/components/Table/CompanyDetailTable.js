import axios from 'axios'; // axios를 임포트하여 API 호출에 사용
import { useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaList } from 'react-icons/fa';

import {
  CCardBody, CContainer, CSpinner, CCard, CRow, CCol, CButton, CInputGroup, CFormInput,
  CTable, CTableRow, CTableBody, CTableHead, CTableHeaderCell, CTableDataCell
} from '@coreui/react'
import {
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { AiOutlineUser } from "react-icons/ai"
import { CompanyDetail } from '../../pages';


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
    border-radius: 5px;
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

const SContractInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  
  
}

`

const SAttendanceInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


input {
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 15px;
}

table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  
  
}

`

const SNote = styled.div`
display: flex;
flex-direction: column;


height: 30%;

input {
  height: 100px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  padding: 15px;
}

`

const SFamilyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;


  height: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  
  height: 30%;
  
  
}


`

const SFileContainer = styled.div`
display: flex;

gap: 1.1em;

input {
  width: 20%;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
}

`

const SFileBtn = styled.button`
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

const SLogoimgContainer = styled.div`
width: 100%;
height: 10em;

background-color: white;
border-radius: 3px;
box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
margin: 2em 0;
padding: 20px;
`

const SSalaryInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


input {
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 15px;
}

table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  
  
}
`

const SForeignerInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


input {
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 15px;
}

table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  
  
}
`

const SAddButton = styled.button`
flex-wrap: wrap;

width: 80px;
height: 30px;
color: white;
font-size: 0.8em;
background-color: ${({ theme }) => theme.colors.blue090};
border-radius: 3px;
border: none;

&:hover{  
  background-color : skyblue;
}
`

const SButtonContainer = styled.div`
  display: flex;
  min-width: 90%;
  justify-content: flex-end;
  gap: 10px;
`

const SCancleBtn = styled.button`
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

const SSaveBtn = styled.button`
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

const SCompanyLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;


  height: 30%;
`



const CompanyDetailTable = ({ table, companyId, tableattend, tablesalary, tablefrgnr }) => {

  const navigate = useNavigate();

  // user 경로인 경우 가족사항 조회 숨김
  const location = useLocation();
  const isUserPath = location.pathname.startsWith('/user');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchtext, setSearchtext] = useState([]);
  const [codes, setCode] = useState([]);
  const [ofcps, setOfcps] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //정규식필요

  const infos = JSON.parse(localStorage.getItem('user_info'));
  const corp_no = infos.corp_no;
  const login_id = infos.login_id;

  const [corporationinfo, setCorporationInfo] = useState({
    corp_no: corp_no,
    corp_nm: '',
    repre_nm: '',
    bizm_no: '',
    addr: '',
    empl_num: '',
    mngr_nm: '',
    ofcps: 'X',
    corp_telno: '',
    email: '',
    mobile_no: '',
    mngr_id: '',
    info1: '',
    info2: '',
    info3: '',
    info4: '',
    gen2: login_id,
  });

  useEffect(() => {
    if (table && table[0]) {
      setCorporationInfo({ ...table[0] });
    }
  }, [table]);

  const [cntrctinfo, setCntrctInfo] = useState({
    corp_no: corp_no,
    cntrct_form: '',
    state: '',
    cntcrt_date: '',
    exp_date: '',
    pmt_date: '',
    ter_date: '',
    tml_use_yn: '',
    exp_date: '',
    mtyvc_stl_std: '',
  });

  useEffect(() => {
    if (tableattend && tableattend[0]) {
      setCntrctInfo({ ...tableattend[0] });
    }
  }, [tableattend]);

  const corporationInputChange = (event) => {
    const { name, value } = event.target;
    setCorporationInfo({
      ...corporationinfo,
      [name]: value,
    })
  };

  const cntcrtInputChange = (event) => {
    const { name, value } = event.target;
    setCntrctInfo({
      ...cntrctinfo,
      [name]: value,
    });
  };

  const payload = {
    corporationinfo: corporationinfo,
    cntrctinfo: cntrctinfo,
  };

  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_info/")
      .then((response) => {
        setCode(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_ofcps/")
      .then((response) => {
        setOfcps(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const handleSave = () => {
    axios.post('http://13.125.117.184:8000/post_corporation/', payload)  // 백엔드 API 엔드포인트에 맞게 수정
      .then(response => {
        console.log('부서 정보 저장 성공:', response.data);
        navigate('/superadmin/company');
      })
      .catch(error => {
        console.log('error');
        console.error('API 호출 에러:', error);
      });
  };

  const handleUpdate = () => {
    axios.post('http://13.125.117.184:8000/post_employeesupdate/', payload)  // 백엔드 API 엔드포인트에 맞게 수정
      .then(response => {
        console.log('부서 정보 수정 성공:', response.data);
        navigate('/superadmin/company');
      })
      .catch(error => {
        console.log('error');
        console.error('API 호출 에러:', error);
      });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSearchtext(prevState => ({ ...prevState, [name]: value }));
  };

  const perm = infos.perm_id;
  let nav_url = ''
  if (perm == "01") {
    nav_url = '/superadmin/company';
  } else if (perm == "11") {
    nav_url = '/admin/company';
  } else {
    nav_url = '/user/company';
  }

  return (
    <SWrapper>
      <SManagerInfo>
        <SButtonContainer>
          {companyId ? (
            <CButton color="dark" variant="outline" onClick={handleUpdate}>수정</CButton>
          ) : (
            <CButton color="dark" variant="outline" onClick={() => navigate(nav_url)}>취소</CButton>
          )}
          {companyId ? (
            <CButton color="dark" variant="outline" onClick={() => navigate(nav_url)}>
              <FaList />
            </CButton>
          ) : (
            <CButton style={{ backgroundColor: 'red', color: 'white', borderColor: 'white' }} variant="outline" onClick={handleSave}>저장</CButton>
          )}
        </SButtonContainer>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>회사 정보</h3>
        </SCategoryContainer>
        <table style={{ border: '2px solid rgb(210, 210, 214)' }}  >
          <tbody>
            <tr>
              <td>회사명</td>
              <td><input type="text" name="corp_nm" value={corporationinfo.corp_nm || ""} onChange={corporationInputChange} /></td>
              <td>대표자명</td>
              <td><input type="text" name="repre_nm" value={corporationinfo.repre_nm || ""} onChange={corporationInputChange} /></td>
            </tr>
            <tr>
              <td>사업자번호</td>
              <td><input type="text" name="bizm_no" value={corporationinfo.bizm_no || ""} onChange={corporationInputChange} /></td>
              <td>대표 전화번호</td>
              <td><input type="text" name="repre_telno" value={corporationinfo.repre_telno || ""} onChange={corporationInputChange} /></td>
            </tr>
            <tr>
              <td>주소</td>
              <td><input type="text" name="addr" value={corporationinfo.addr || ""} onChange={corporationInputChange} /></td>
              <td>사원수</td>
              <td><input type="text" name="empl_num" value={corporationinfo.empl_num || ""} onChange={corporationInputChange} /></td>
            </tr>
          </tbody>
        </table>
      </SManagerInfo>
      <SManagerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>담당자 정보</h3>
        </SCategoryContainer>
        <table style={{ border: '2px solid rgb(210, 210, 214)' }}  >
          <tbody>
            <tr>
              <td>담당자 명</td>
              <td><input type="text" name="mngr_nm" value={corporationinfo.mngr_nm || ""} onChange={corporationInputChange} /></td>
              <td>직책</td>
              <td>
                <select size={1} name="ofcps" onChange={corporationInputChange}>
                  <option value="">선택</option>
                  {ofcps.map((dept) => (
                    <option key={dept.scode} value={dept.cd_val}>
                      {dept.cd_val}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>회사 전화번호</td>
              <td><input type="text" name="corp_telno" value={corporationinfo.corp_telno || ""} onChange={corporationInputChange} /></td>
              <td>이메일</td>
              <td><input type="text" name="email" value={corporationinfo.email || ""} onChange={corporationInputChange} /></td>
            </tr>
            <tr>
              <td>휴대폰번호</td>
              <td><input type="text" name="mobile_no" value={corporationinfo.mobile_no || ""} onChange={corporationInputChange} /></td>
              <td>담당자ID</td>
              <td><input type="text" name="mngr_id" value={corporationinfo.mngr_id || ""} onChange={corporationInputChange} /></td>
            </tr>
          </tbody>
        </table>
      </SManagerInfo>
      <SManagerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>근태 및 급여 기준정보</h3>
        </SCategoryContainer>
        <table style={{ border: '2px solid rgb(210, 210, 214)' }}  >
          <tbody>
            <tr>
              <td>부서정보</td>
              <td>
                <select size={1} name="info1" value={corporationinfo.info1 || ""} onChange={corporationInputChange}>
                  <option value="0">선택</option>
                  <option value="1">IT업종</option>
                  <option value="2">유통업종</option>
                  <option value="3">건설업종</option>
                  <option value="4">서비스업종</option>
                  <option value="17">제조업종</option>
                </select>
              </td>
              <td>직급정보</td>
              <td>
                <select size={1} name="info2" value={corporationinfo.info2 || ""} onChange={corporationInputChange}>
                  <option value="0">선택</option>
                  <option value="5">IT업종</option>
                  <option value="6">유통업종</option>
                  <option value="7">건설업종</option>
                  <option value="8">서비스업종</option>
                  <option value="18">제조업종</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>근태정보</td>
              <td>
                <select size={1} name="info3" value={corporationinfo.info3 || ""} onChange={corporationInputChange}>
                  <option value="0">선택</option>
                  <option value="9">IT업종</option>
                  <option value="10">유통업종</option>
                  <option value="11">건설업종</option>
                  <option value="12">서비스업종</option>
                  <option value="18">제조업종</option>
                </select>
              </td>
              <td>급여정보</td>
              <td>
                <select size={1} name="info4" value={corporationinfo.info4 || ""} onChange={corporationInputChange}>
                  <option value="0">선택</option>
                  <option value="13">IT업종</option>
                  <option value="14">유통업종</option>
                  <option value="15">건설업종</option>
                  <option value="16">서비스업종</option>
                  <option value="20">제조업종</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </SManagerInfo>
      <SManagerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>계약자 정보</h3>
        </SCategoryContainer>
        <table style={{ border: '2px solid rgb(210, 210, 214)' }}  >
          <tbody>
            <tr>
              <td>계약형태</td>
              <td>
                <select size={1} name="cntrct_form" value={cntrctinfo.cntrct_form || ""} onChange={cntcrtInputChange}>
                  <option value="0">선택</option>
                  <option value="종신">종신</option>
                  <option value="기간">기간</option>
                </select>
              </td>
              <td>상태</td>
              <td>
                <select size={1} name="state" value={cntrctinfo.state || ""} onChange={cntcrtInputChange}>
                  <option value="0">선택</option>
                  <option value="계약">계약</option>
                  <option value="만료">만료</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>계약일자</td>
              <td><input type="date" name="cntcrt_date" value={cntrctinfo.cntcrt_date || ""} onChange={cntcrtInputChange} /></td>
              <td>만료일자</td>
              <td><input type="date" name="exp_date" value={cntrctinfo.exp_date || ""} onChange={cntcrtInputChange} /></td>
            </tr>
            <tr>
              <td>결제일자</td>
              <td><input type="date" name="pmt_date" value={cntrctinfo.pmt_date || ""} onChange={cntcrtInputChange} /></td>
              <td>해지일자</td>
              <td><input type="date" name="ter_date" value={cntrctinfo.ter_date || ""} onChange={cntcrtInputChange} /></td>
            </tr>
            <tr>
              <td>비콘사용여부</td>
              <td>
                <select size={1} name="tml_use_yn" value={cntrctinfo.tml_use_yn || ""} onChange={cntcrtInputChange}>
                  <option value="0">선택</option>
                  <option value="Y">Y</option>
                  <option value="N">N</option>
                </select>
              </td>
              <td>비콘설치개수</td>
              <td><input type="text" name="be" value={cntrctinfo.be || ""} onChange={cntcrtInputChange} /></td>
            </tr>
          </tbody>
        </table>
      </SManagerInfo>
      <SManagerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>기타</h3>
        </SCategoryContainer>
        <table style={{ border: '2px solid rgb(210, 210, 214)' }}  >
          <tbody>
            <tr>
              <td>월차정산기준</td>
              <td><input type="text" placeholder="회계년도 / 입사월" name="mtyvc_stl_std" value={cntrctinfo.mtyvc_stl_std || ""} onChange={cntcrtInputChange} /></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>등록일시</td>
              <td><input readOnly placeholder="변경불가" /></td>
              <td>수정일시</td>
              <td><input readOnly placeholder="변경불가" /></td>
            </tr>
          </tbody>
        </table>
      </SManagerInfo>
      <SNote>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>비고</h3>
        </ SCategoryContainer>
        <input placeholder="비고 입력란" />
      </SNote>
      <SCompanyLogo>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>로고</h3>
        </SCategoryContainer>
        <SFileContainer>
          <div>파일명 : </div>
          <input type="flie" accept="image/*" placeholder="내용을 입력해주세요 " />
          <SFileBtn>파일선택</SFileBtn>
        </SFileContainer>
      </SCompanyLogo>
    </SWrapper>
  )
}

export default CompanyDetailTable;