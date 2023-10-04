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



const EmployeeDetailTable = ({ table, id, tableattend, tablesalary, tablefrgnr }) => {

  const navigate = useNavigate();

  // user 경로인 경우 가족사항 조회 숨김
  const location = useLocation();
  const isUserPath = location.pathname.startsWith('/user');

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

  useEffect(() => {
    axios.get('http://13.125.117.184:8000/get_departments/')
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
  const nav_url = '/' + login_id + '/employee';

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
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>기본 정보</h3>
        </SCategoryContainer>

        <CCardBody>
          <CRow>
            <CCol style={{ fontSize: '17px', border: '2px solid rgb(210, 210, 214)', height: '250px', width: '250px' }} className="col-3 d-flex justify-content-start">
              <AiOutlineUser style={{ height: '100%', width: '100%' }} />
            </CCol>
            <CCol className="d-flex justify-content-end" >
              <CTable style={{ border: '2px solid rgb(210, 210, 214)', height: '250px', width: '900px' }}>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>사원번호</CTableDataCell>
                    <CTableDataCell>
                      {id ? (
                        <input type="text" name="empl_no" value={employeeInfo.empl_no || ""} readOnly />
                      ) : (
                        "자동채번됩니다."
                      )}
                    </CTableDataCell>
                    <CTableDataCell>사원명</CTableDataCell>
                    <CTableDataCell>
                      <input type="text" name="empl_nm" value={employeeInfo.empl_nm || ""} onChange={employeeInputChange} />
                    </CTableDataCell>
                  </CTableRow>

                  <CTableRow>
                    <CTableDataCell>주민등록번호</CTableDataCell>
                    <CTableDataCell>
                      <input type="text" name="ssid" value={employeeInfo.ssid || ""} onChange={employeeInputChange} maxLength={13} placeholder="'-'를 빼고 적어주세요" />
                    </CTableDataCell>
                    <CTableDataCell>성별</CTableDataCell>
                    <CTableDataCell>
                      <select size={1} name="gender" value={employeeInfo.gender || ""} onChange={employeeInputChange}>
                        <option value="남">남</option>
                        <option value="녀">녀</option>
                      </select>
                    </CTableDataCell>
                  </CTableRow>

                  <CTableRow>
                    <CTableDataCell>생년월일</CTableDataCell>
                    <CTableDataCell>
                      <input type="date" name="brthdy" value={employeeInfo.brthdy || ""} onChange={employeeInputChange} />
                    </CTableDataCell>
                    <CTableDataCell>양력/음력</CTableDataCell>
                    <CTableDataCell>
                      <select size={1} name="lunisolar" value={employeeInfo.lunisolar || ""} onChange={employeeInputChange}>
                        <option value="양">양</option>
                        <option value="음">음</option>
                      </select>
                    </CTableDataCell>
                  </CTableRow>

                  <CTableRow>
                    <CTableDataCell>결혼유무</CTableDataCell>
                    <CTableDataCell>
                      <select size={1} name="mrig_yn" value={employeeInfo.mrig_yn || ""} onChange={employeeInputChange}>
                        <option value="X">X</option>
                        <option value="O">O</option>
                      </select>
                    </CTableDataCell>
                    <CTableDataCell>결혼기념일</CTableDataCell>
                    <CTableDataCell>
                      <input type="date" name="mrig_anvsry" value={employeeInfo.mrig_anvsry || ""} onChange={employeeInputChange} />
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCol>
          </CRow>
        </CCardBody>
      </SCompanyInfo>
      <SManagerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>연락처 및 주소</h3>
        </SCategoryContainer>
        <table style={{ border: '2px solid rgb(210, 210, 214)' }}  >
          <tbody>
            <tr>
              <td>회사 전화번호</td>
              <td><input type="text" name="tel_no" value={employeeInfo.tel_no || ""} onChange={employeeInputChange} placeholder="'-'를 빼고 적어주세요" /></td>
              <td>휴대폰 번호</td>
              <td><input type="text" name="mobile_no" value={employeeInfo.mobile_no || ""} onChange={employeeInputChange} placeholder="'-'를 빼고 적어주세요" /></td>
            </tr>
            <tr>
              <td>주민등록 주소</td>
              <td><input type="text" name="ssid_addr" value={employeeInfo.ssid_addr || ""} onChange={employeeInputChange} /></td>
              <td>실거주지 주소</td>
              <td><input type="text" name="rlsdnc_addr" value={employeeInfo.rlsdnc_addr || ""} onChange={employeeInputChange} /></td>
            </tr>
            <tr>
              <td>이메일</td>
              <td><input type="text" name="email" value={employeeInfo.email || ""} onChange={employeeInputChange} /></td>
              <td>개인 이메일</td>
              <td><input type="text" name="prsl_email" value={employeeInfo.prsl_email || ""} onChange={employeeInputChange} /></td>
            </tr>
          </tbody>
        </table>
      </SManagerInfo>
      <SManagerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>부서정보</h3>
        </SCategoryContainer>
        <table style={{ border: '2px solid rgb(210, 210, 214)' }}  >
          <tbody>
            <tr>
              <td>부서명</td>
              <td>
                <select size={1} name="dept_no" value={employeeInfo.dept_no || ""} onChange={employeeInputChange}>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>임원여부</td>
              <td>
                <select size={1} name="exctv_yn" value={employeeInfo.exctv_yn || ""} onChange={employeeInputChange}>
                  <option value="X">X</option>
                  <option value="O">O</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>직책</td>
              <td>
                <select size={1} name="rspofc" value={employeeInfo.rspofc || ""} onChange={employeeInputChange}>
                  {role.map((roles) => (
                    <option key={roles.lcode} value={roles.lcode_nm}>
                      {roles.lcode_nm}
                    </option>
                  ))}
                </select>
              </td>
              <td>고용형태</td>
              <td>
                <select size={1} name="emplym_form" value={employeeInfo.emplym_form || ""} onChange={employeeInputChange}>
                  <option value="상용">상용</option>
                  <option value="계약">계약</option>
                  <option value="일용">일용</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>급여형태</td>
              <td>
                <select size={1} name="salary_form" value={employeeInfo.salary_form || ""} onChange={employeeInputChange}>
                  <option value="시급">시급</option>
                  <option value="월급">월급</option>
                  <option value="연봉">연봉</option>
                </select>
              </td>
              <td>입사일자</td>
              <td><input type="date" name="encpnd" value={employeeInfo.encpnd || ""} onChange={employeeInputChange} /></td>
            </tr>
            <tr>
              <td>재직상태</td>
              <td>
                <select size={1} name="hffc_state" value={employeeInfo.hffc_state || ""} onChange={employeeInputChange}>
                  <option value="재직">재직</option>
                  <option value="퇴사">퇴사</option>
                  <option value="휴직">휴직</option>
                </select>
              </td>
              <td>퇴사일자</td>
              <td><input type="date" name="retire_date" value={employeeInfo.retire_date || ""} onChange={employeeInputChange} /></td>
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
              <td>기본출근시간</td>
              <td><input type="time" name="base_attendtime" value={attendInfo.base_attendtime || ""} onChange={attendInputChange} /></td>
              <td>기본퇴근시간</td>
              <td><input type="time" name="base_lvofctime" value={attendInfo.base_lvofctime || ""} onChange={attendInputChange} /></td>
            </tr>
            <tr>
              <td>주중근무일</td>
              <td><input type="text" name="mdwk_workday" value={attendInfo.mdwk_workday || ""} onChange={attendInputChange} maxLength={1} placeholder="7일 이내로 적어주세요" /></td>
              <td>주휴일</td>
              <td><input type="text" name="whday" value={attendInfo.whday || ""} onChange={attendInputChange} /></td>
            </tr>
            <tr>
              <td>소정근로시간(일)</td>
              <td><input type="text" name="crtlwh" value={attendInfo.crtlwh || ""} onChange={attendInputChange} /></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </SManagerInfo>
      <SManagerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>급여정보</h3>
        </SCategoryContainer>
        <table style={{ border: '2px solid rgb(210, 210, 214)' }}>
          <tbody>
            <tr>
              <td>기본급여</td>
              <td><input type="text" name="base_salary" value={salaryInfo.base_salary || ""} onChange={salaryInputChange} placeholder="세전으로 적어주세요" /></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>이체은행</td>
              <td>
                <select size={1} name="trn_bank" value={salaryInfo.trn_bank || ""} onChange={salaryInputChange}>
                  <option value="은행선택">은행선택</option>
                  <option value="국민은행">국민은행</option>
                  <option value="신한은행">신한은행</option>
                  <option value="하나은행">하나은행</option>
                  <option value="우리은행">우리은행</option>
                  <option value="IBK기업은행">IBK기업은행</option>
                  <option value="SC제일은행">SC제일은행</option>
                  <option value="우체국">우체국</option>
                  <option value="농협은행">농협은행</option>
                  <option value="신협은행">신협은행</option>
                  <option value="수협은행">수협은행</option>
                  <option value="새마을금고">새마을금고</option>
                  <option value="대구은행">대구은행</option>
                  <option value="부산은행">부산은행</option>
                  <option value="광주은행">광주은행</option>
                  <option value="경남은행">경남은행</option>
                  <option value="전북은행">전북은행</option>
                  <option value="제주은행">제주은행</option>
                  <option value="산업은행">산업은행</option>
                  <option value="씨티은행">씨티은행</option>
                  <option value="산림조합">산림조합</option>
                  <option value="저축은행">저축은행</option>
                </select></td>
              <td>계좌번호</td>
              <td><input type="text" name="acc_no" value={salaryInfo.acc_no || ""} onChange={salaryInputChange} maxLength={14} placeholder="'-'를 빼고 적어주세요" /></td>
            </tr>
            <tr>
              <td>국민연금납부</td>
              <td>
                <select size={1} name="npn_pay_yn" value={employeeInfo.npn_pay_yn || ""} onChange={salaryInputChange}>
                  <option value="O">예</option>
                  <option value="X">아니요</option>
                </select>
              </td>
              <td>국민연금신고 월보수액</td>
              <td><input type="text" name="npn_mrmrtn" value={salaryInfo.npn_mrmrtn || ""} onChange={salaryInputChange} /></td>
            </tr>
            <tr>
              <td>건강보험납부</td>
              <td>
                <select size={1} name="hlthins_pay_yn" value={employeeInfo.hlthins_pay_yn || ""} onChange={salaryInputChange}>
                  <option value="O">예</option>
                  <option value="X">아니요</option>
                </select>
              </td>
              <td>건강보험 월보수액</td>
              <td><input type="text" name="hlthins_mrmrtn" value={salaryInfo.hlthins_mrmrtn || ""} onChange={salaryInputChange} /></td>
            </tr>
            <tr>
              <td>고용보험납부</td>
              <td>
                <select size={1} name="empins_pay_yn" value={employeeInfo.empins_pay_yn || ""} onChange={salaryInputChange}>
                  <option value="O">예</option>
                  <option value="X">아니요</option>
                </select>
              </td>
              <td>원천징수 세액</td>
              <td>
                <select size={1} value={employeeInfo.empins_pay_yn || ""} onChange={salaryInputChange}>
                  <option value="80">80%</option>
                  <option value="100">100%</option>
                  <option value="120">120%</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>장기요양보험 납부여부</td>
              <td>
                <select size={1} value={employeeInfo.empins_pay_yn || ""} onChange={salaryInputChange}>
                  <option value="O">예</option>
                  <option value="X">아니요</option>
                </select>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </SManagerInfo>
      <SManagerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color="#548AFF" />
          <h3>외국인정보</h3>
        </ SCategoryContainer>
        <table style={{ border: '2px solid rgb(210, 210, 214)' }}>
          <tbody>
            <tr>
              <td>외국인여부</td>
              <td>
                <select size={1} name="frgnr_yn" value={employeeInfo.frgnr_yn || ""} onChange={employeeInputChange}>
                  <option value="X">내국인</option>
                  <option value="O">외국인</option>
                </select>
              </td>
              <td>출국만기일자</td>
              <td><input type="date" name="dtrmcexp_date" value={frgnrInfo.dtrmcexp_date || ""} onChange={frgnrInputChange} /></td>
            </tr>
            <tr>
              <td>출국만기보험사</td>
              <td>
                <select size={1} name="dtrmcexp_icny" value={frgnrInfo.frgnrInputChange || ""} onChange={frgnrInputChange}>
                  <option value="X">X</option>
                  <option value="O">O</option>
                </select>
              </td>
              <td>출국만기보험금액</td>
              <td><input type="text" name="dtrmcexp_insrnc_amt" value={frgnrInfo.dtrmcexp_insrnc_amt || ""} onChange={frgnrInputChange} /></td>
            </tr>
          </tbody>
        </table>
      </SManagerInfo>
      {/* user권한 페이지일경우 추가버튼 숨김 */}
      {isUserPath ? null : (
        <>
          <SManagerInfo>
            <SCategoryContainer>
              <GoPrimitiveDot color="#548AFF" />
              <h3>가족사항</h3>
            </SCategoryContainer>
          </SManagerInfo>
        </>
      )}
    </SWrapper>
  )
}

export default EmployeeDetailTable;