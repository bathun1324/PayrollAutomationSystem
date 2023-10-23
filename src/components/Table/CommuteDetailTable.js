import axios from 'axios'; // axios를 임포트하여 API 호출에 사용
import { useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

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



const CommuteDetailTable = ({ table, id, tableattend, tablesalary, tablefrgnr }) => {

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //정규식필요

  const [employeeInfo, setEmployeeInfo] = useState({
    dept_no: '',
    empl_no: '',
    empl_nm: '',
    ssid: '',
    gender: '남',
    brthdy: '',
    lunisolar: '양',
    mrig_yn: 'X',
    mrig_anvsry: '',
    tel_no: '',
    mobile_no: '',
    ssid_addr: '',
    rlsdnc_addr: '',
    email: '',
    prsl_email: '',
    exctv_yn: '',
    rspofc: '',
    emplym_form: '상용',
    salary_form: '시급',
    encpnd: '',
    hffc_state: '재직',
    retire_date: '',
    frgnr_yn: 'X',
  });

  useEffect(() => {
    if (table && table[0]) {
      setEmployeeInfo({ ...table[0] });
    }
  }, [table]);

  const [attendInfo, setAttendInfo] = useState({
    empl_no: '',
    corp_no: '',
    dept_no: '',
    base_attendtime: '',
    base_lvofctime: '',
    mdwk_workday: '',
    whday: '',
    crtlwh: '',
  });

  useEffect(() => {
    if (tableattend && tableattend[0]) {
      setAttendInfo({ ...tableattend[0] });
    }
  }, [tableattend]);

  const [salaryInfo, setSalaryInfo] = useState({
    empl_no: '',
    corp_no: '',
    dept_no: '',
    base_salary: '',
    trn_bank: '',
    acc_no: '',
    npn_pay_yn: 'X',
    npn_mrmrtn: '',
    hlthins_pay_yn: 'X',
    hlthins_mrmrtn: '',
    empins_pay_yn: 'X',
    empins_mrmrtn: '',
  });

  useEffect(() => {
    if (tablesalary && tablesalary[0]) {
      setSalaryInfo({ ...tablesalary[0] });
    }
  }, [tablesalary]);

  const [frgnrInfo, setFrgnrInfo] = useState({
    empl_no: '',
    corp_no: '',
    dept_no: '',
    dtrmcexp_date: '',
    dtrmcexp_icny: 'X',
    dtrmcexp_insrnc_amt: '',
    remark: '',
  });


  useEffect(() => {
    if (tablefrgnr && tablefrgnr[0]) {
      setFrgnrInfo({ ...tablefrgnr[0] });
    }
  }, [tablefrgnr]);

  const employeeInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeInfo({
      ...employeeInfo,
      [name]: value,
    })
  };

  const attendInputChange = (event) => {
    const { name, value } = event.target;
    setAttendInfo({
      ...attendInfo,
      [name]: value,
    });
  };

  const [rate, setRate] = useState([]);

  useEffect(() => {
    axios.get('http://13.125.117.184:8000/get_rate/')
      .then((response) => {
        setRate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const salaryInputChange = (event) => {
    const { name, value } = event.target;
    let updatedSalaryInfo = {
      ...salaryInfo,
      [name]: value,
    };

    // 기본 급여가 변경된 경우 월보수액을 자동으로 계산합니다.
    if (name === 'base_salary') {
      const baseSalary = parseFloat(value); // 기본 급여 값을 숫자로 변환합니다.

      // rate와 기본 급여를 사용하여 다른 값들을 계산합니다.
      updatedSalaryInfo.npn_mrmrtn = baseSalary - 300000
      updatedSalaryInfo.hlthins_mrmrtn = baseSalary - 300000
      updatedSalaryInfo.empins_mrmrtn = baseSalary - 300000
    }

    setSalaryInfo(updatedSalaryInfo);
  };

  const frgnrInputChange = (event) => {
    const { name, value } = event.target;
    setFrgnrInfo({
      ...frgnrInfo,
      [name]: value,
    });
  };

  const [departments, setDepartments] = useState([]);

  const corp_no = infos.corp_no; // 회사 id'

  useEffect(() => {
    axios.get('http://13.125.117.184:8000/get_departments/?corp_no=${corp_no}')
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [role, setRole] = useState([]);

  useEffect(() => {
    axios.get('http://13.125.117.184:8000/get_role/')
      .then((response) => {
        setRole(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const payload = {
    employeeInfo: employeeInfo,
    attendInfo: attendInfo,
    salaryInfo: salaryInfo,
    frgnrInfo: frgnrInfo,
  };

  const handleSave = () => {
    axios.post('http://13.125.117.184:8000/post_employees/', payload)  // 백엔드 API 엔드포인트에 맞게 수정
      .then(response => {
        console.log('부서 정보 저장 성공:', response.data);
        navigate('/admin/employee');
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
        navigate('/admin/employee');
      })
      .catch(error => {
        console.log('error');
        console.error('API 호출 에러:', error);
      });
  };

  const infos = JSON.parse(localStorage.getItem('user_info'));
  const login_id = infos.login_id;
  const perm = infos.perm_id;
  let nav_url = ''
  if (perm == "01") {
    nav_url = '/superadmin/employee';
  } else if (perm == "11") {
    nav_url = '/admin/employee';
  } else {
    nav_url = '/user/employee';
  }

  return (
    <SWrapper>
      <SCompanyInfo>
        <SButtonContainer>
          <CButton color="dark" variant="outline" onClick={() => navigate(nav_url)}>취소</CButton>
          {id ? (
            <CButton color="dark" variant="outline" onClick={handleUpdate}>수정</CButton>
          ) : (
            <CButton color="dark" variant="outline" onClick={handleSave}>저장</CButton>
          )}
        </SButtonContainer>
      </SCompanyInfo>
      <SManagerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>기본정보</h3>
        </SCategoryContainer>
        <table style={{ border: '2px solid rgb(210, 210, 214)' }}  >
          <tbody>
            <tr>
              <td>사원번호</td>
              <td><input type="text" name="tel_no" value={employeeInfo.tel_no || ""} onChange={employeeInputChange} /></td>
              <td>사원명</td>
              <td><input type="text" name="mobile_no" value={employeeInfo.mobile_no || ""} onChange={employeeInputChange} /></td>
            </tr>
            <tr>
              <td>부서명</td>
              <td><input type="text" name="ssid_addr" value={employeeInfo.ssid_addr || ""} onChange={employeeInputChange} /></td>
              <td>직책</td>
              <td><input type="text" name="rlsdnc_addr" value={employeeInfo.rlsdnc_addr || ""} onChange={employeeInputChange} /></td>
            </tr>
            <tr>
              <td>외국인여부</td>
              <td><input type="text" name="email" value={employeeInfo.email || ""} onChange={employeeInputChange} /></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </SManagerInfo>
      <SManagerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>출퇴근 정보</h3>
        </SCategoryContainer>
        <table style={{ border: '2px solid rgb(210, 210, 214)' }}  >
          <tbody>
            <tr>
              <td>근무일자</td>
              <td><input type="text" name="email" value={employeeInfo.email || ""} onChange={employeeInputChange} />
              </td>
              <td>근무스케줄</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>출근시각</td>
              <td><input type="date" /></td>
              <td>퇴근시각</td>
              <td><input type="date" /></td>
            </tr>
          </tbody>
        </table>
      </SManagerInfo>
      <SManagerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>근태정보</h3>
        </SCategoryContainer>
        <table style={{ border: '2px solid rgb(210, 210, 214)' }}  >
          <tbody>
            <tr>
              <td>외출</td>
              <td><input readOnly placeholder="변경불가" /></td>
              <td>복귀</td>
              <td><input readOnly placeholder="변경불가" /></td>
            </tr>
            <tr>
              <td>출근판정</td>
              <td><input readOnly placeholder="변경불가" /></td>
              <td>퇴근판정</td>
              <td><input readOnly placeholder="변경불가" /></td>
            </tr>
            <tr>
              <td>지각시간</td>
              <td><input readOnly placeholder="변경불가" /></td>
              <td>외출시간</td>
              <td><input readOnly placeholder="변경불가" /></td>
            </tr>
          </tbody>
        </table>
      </SManagerInfo>
      <SManagerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>연장근무정보</h3>
        </SCategoryContainer>
        <table style={{ border: '2px solid rgb(210, 210, 214)' }}  >
          <tbody>
            <tr>
              <td>조기출근</td>
              <td><input type="text" /></td>
              <td>연장근무</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>야간근무</td>
              <td><input type="text" /></td>
              <td>휴일근무</td>
              <td><input type="text" /></td>
            </tr>
          </tbody>
        </table>
      </SManagerInfo>
      <SCategoryContainer>
        <GoPrimitiveDot color="#548AFF" />
        <h3>근무시간 합계</h3>
      </ SCategoryContainer>
      <table style={{ border: '2px solid rgb(210, 210, 214)' }}  >
        <tbody>
          <tr>
            <td>실제근무시간</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>비고</td>
            <td><input type="textarea" style={{ width: '150px', height: '150px' }} /></td>
          </tr>
        </tbody>
      </table>
    </SWrapper>
  )
}

export default CommuteDetailTable;