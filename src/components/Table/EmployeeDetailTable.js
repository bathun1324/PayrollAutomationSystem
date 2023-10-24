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
import { cilMenu } from '@coreui/icons'
import { FaList } from 'react-icons/fa';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import NewFamilyModal from "../Modal/NewFamilyModal";

const TableContainer = styled.div`
 
display: flex;
flex-direction: column;
justify-content: center;

width: 95%;

text-align: left;
line-height: 2;
border-collapse: collaps;

gap: 2em;


input {
  border: none;
  border-radius: 5px;
  // padding: 15px;
  text-align: center;
  width: 100%;
}
table {
  text-align: center;
}

th {
  background-color: rgb(234, 234, 234);
  border-bottom: 2px solid rgb(210, 210, 214);
}

tr td:nth-child(odd) {
  background-color: white;
}


td {
  width: 12%;
  padding: 5 15px;
  // border-bottom: 1px solid ${({ theme }) => theme.colors.black050};

  > select {
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
  }
}
  
`;

const SNoDataMsg = styled.td`
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 1.5em;
  height: 1.5em;

  border: 0;
  border-radius: 5px;
  background-color: transparent;
  font-size: 1.1em;
  font-weight: 550;
  color:  ${({ theme }) => theme.colors.blue090};
`;




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

const SButtonContainer = styled.div`
  display: flex;
  min-width: 90%;
  justify-content: flex-end;
  gap: 10px;
`



const EmployeeDetailTable = ({ table, id, tableattend, tablesalary, tablefrgnr, tablefmly }) => {

  const navigate = useNavigate();

  // user 경로인 경우 가족사항 조회 숨김
  const location = useLocation();
  const isUserPath = location.pathname.startsWith('/user');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const infos = JSON.parse(localStorage.getItem('user_info'));
  const login_no = infos.empl_no; // 사원번호
  const perm = infos.perm_id; // 권한 id (관리자:01, 운영자:11, 사용자:21)
  const corp_no = infos.corp_no; // 회사 id'
  const login_id = infos.login_id; // 로그인 id
  let nav_url = ''
  if (perm == "01") {
    nav_url = '/superadmin/employee';
  } else if (perm == "11") {
    nav_url = '/admin/employee';
  } else {
    nav_url = '/user/employee';
  }
  //정규식필요
  const [loginInfo, setLoginInfo] = useState({
    login_id: login_id,
    corp_no: corp_no,
  });

  // hrm_atend_base_attendtime = attend_info.get('base_attendtime') or None
  // hrm_atend_base_lvofctime = attend_info.get('base_lvofctime') or None
  // hrm_atend_mdwk_workday = attend_info.get('mdwk_workday') or None
  // hrm_atend_whday = attend_info.get('whday') or None
  // hrm_atend_crtlwh = attend_info.get('crtlwh') or None
  // hrm_atend_upt_dtime = now.strftime('%Y-%m-%d %H:%M:%S') or None
  // hrm_atend_upt_id = login_info.get('login_id')

  const [employeeInfo, setEmployeeInfo] = useState({
    corp_no: '',
    dept_no: '1001',
    empl_no: '',
    empl_rspofc: '1001',
    empl_nm: '',
    empl_gender: 'M',
    empl_mrig_yn: 'N',
    empl_prsl_email: '',
    empl_brthdy: '',
    empl_lscld: '1',
    empl_hffc_state: '1',
    empl_exctv_yn: 'N',
    empl_photoid: '',
    empl_frgnr_yn: 'N',
    empl_telno: '',
    empl_mobile_no: '',
    empl_retire_date: '',
    empl_salary_form: '0001',
    empl_ssid: '',
    empl_email: '',
    empl_emplyn_form: '0001',
    empl_mrig_anvsry: '',
    empl_ssid_addr: '',
    empl_rlsdnc_addr: '',
    empl_encpnd: '',
    empl_reg_dtime: '',
    empl_reg_id: '',
    empl_upt_dtime: '',
    empl_upt_id: '',
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
    upt_dtime: '',
    upt_id: '',
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
    trn_bank: '0001',
    acc_no: '',
    npn_pay_yn: 'O',
    npn_mrmrtn: '',
    hlthins_pay_yn: 'O',
    hlthins_mrmrtn: '',
    empins_pay_yn: 'O',
    rperins_pay_yn: 'O',
    wthtx_taxrt: '',
    upt_dtime: '',
    upt_id: '',
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
    upt_dtime: '',
    upt_id: '',
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
    // 백엔드에서 부서 데이터 가져오기
    let url = `http://13.125.117.184:8000/get_departments/?corp_no=${corp_no}`
    axios.get(url)
      .then((response) => {

        setDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const [role, setRole] = useState([]);

  useEffect(() => {
    axios.get(`http://13.125.117.184:8000/get_role/?corp_no=${corp_no}`)
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
    loginInfo: loginInfo,
  };

  const handleSave = () => {
    axios.post('http://13.125.117.184:8000/post_employees/', payload)  // 백엔드 API 엔드포인트에 맞게 수정
      .then(response => {
        console.log('부서 정보 저장 성공:', response.data);
        navigate(nav_url);
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
        navigate(nav_url);
      })
      .catch(error => {
        console.log('error');
        console.error('API 호출 에러:', error);
      });
  };
  const [employmentType, setEmploymentType] = useState([]); // 고용형태 데이터
  useEffect(() => {
    // 백엔드에서 고용형태 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_codeEmploymentType/")
      .then((response) => {
        setEmploymentType(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const [salaryform, setSalaryform] = useState([]); // 급여형태 데이터
  useEffect(() => {
    // 백엔드에서 급여형태 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_codesalaryform/")
      .then((response) => {
        setSalaryform(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const [trnbank, setTrnbank] = useState([]); // 은행 데이터
  useEffect(() => {
    // 백엔드에서 은행 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_codetrnbank/")
      .then((response) => {
        setTrnbank(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  // ---------가족사항 데이터---------

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [familyData, setFamilyData] = useState([]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setFamilyData(tablefmly);
  }, [tablefmly]);

  const parentFunction = (x) => {
    setFamilyData([...familyData, x]);
    console.log('테이블에 출력되는 데이터 리스트->', familyData); // 배열에 추가된 상태를 확인할 수 있습니다.
  };


  const renderTableRows = () => {
    return familyData.map((familyData, index) => (
      <tr key={index + 1}>
        <td><input name="fmly_no" value={index + 1} readOnly /></td>
        <td><input name="reltn_val" value={familyData.reltn_val} readOnly /></td>
        <td><input name="constnt_nm" value={familyData.constnt_nm} readOnly /></td>
        <td><input name="brthdy" value={familyData.brthdy} readOnly /></td>
        <td><input name="livtgt_yn" value={familyData.livtgt_yn} readOnly /></td>
        <td><input name="dednhope_yn" value={familyData.dednhope_yn} readOnly /></td>
        <td><input name="dspsn_yn" value={familyData.dspsn_yn} readOnly /></td>
      </tr>
    ));
  };

  const currentItems = familyData.slice(indexOfFirstItem, indexOfLastItem);

  const renderPaginationButtons = () => {
    const pageNumbers = familyData.length === 0 ? 1 : Math.ceil(familyData.length / itemsPerPage);

    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    const handleNextPage = () => {
      if (currentPage < pageNumbers) {
        setCurrentPage(currentPage + 1);
      }
    };

    return (
      <>
        <PaginationButton onClick={handlePrevPage}><IoIosArrowDropleftCircle size={45} /></PaginationButton>
        {Array.from({ length: pageNumbers }, (_, index) => (
          <PaginationButton
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            active={index + 1 === currentPage}
          >
            {index + 1}
          </PaginationButton>
        ))}
        <PaginationButton onClick={handleNextPage}><IoIosArrowDroprightCircle size={45} /></PaginationButton>
      </>
    );
  };
  // 저장버튼 이벤트 처리
  const handlepost = () => {
    axios.post('http://13.125.117.184:8000/fmly_employees/', familyData)  // 백엔드 API 엔드포인트에 맞게 수정
      .then(response => {
        console.log('부서 정보 저장 성공:', response.data);
        navigate('/admin/employee');
      })
      .catch(error => {
        console.log('error');
        console.error('API 호출 에러:', error);
      });
  };



  return (
    <>
      <SWrapper>
        <SCompanyInfo>
          <SButtonContainer>
            {(perm == '21') ? null :
              id ? (
                <>
                  <CButton color="primary" variant="outline" onClick={handleUpdate}>수정</CButton>
                  <CButton color="dark" variant="outline" onClick={() => navigate(nav_url)}>
                    <FaList />
                  </CButton>
                </>
              ) : (
                <>
                  <CButton color="dark" variant="outline" onClick={() => navigate(nav_url)}>취소</CButton>
                  <CButton color="danger" variant="outline" onClick={handleSave}>저장</CButton>
                </>
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
                <CTable style={{ border: '2px solid rgb(210, 210, 214)', height: '250px', width: '900px', alignItems: 'center' }}>
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
                        <input type="text" name="empl_ssid" value={employeeInfo.empl_ssid || ""} onChange={employeeInputChange} maxLength={13} placeholder="'-'를 빼고 적어주세요" />
                      </CTableDataCell>
                      <CTableDataCell>성별</CTableDataCell>
                      <CTableDataCell>
                        <select size={1} name="empl_gender" value={employeeInfo.empl_gender || ""} onChange={employeeInputChange}>
                          <option value="M">M</option>
                          <option value="F">F</option>
                        </select>
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableDataCell>생년월일</CTableDataCell>
                      <CTableDataCell>
                        <input type="date" name="empl_brthdy" value={employeeInfo.empl_brthdy || ""} onChange={employeeInputChange} />
                      </CTableDataCell>
                      <CTableDataCell>양력/음력</CTableDataCell>
                      <CTableDataCell>
                        <select size={1} name="empl_lscld" value={employeeInfo.empl_lscld || ""} onChange={employeeInputChange}>
                          <option value="1">양</option>
                          <option value="2">음</option>
                        </select>
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableDataCell>결혼유무</CTableDataCell>
                      <CTableDataCell>
                        <select size={1} name="empl_mrig_yn" value={employeeInfo.empl_mrig_yn || ""} onChange={employeeInputChange}>
                          <option value="N">N</option>
                          <option value="Y">Y</option>
                        </select>
                      </CTableDataCell>
                      <CTableDataCell>결혼기념일</CTableDataCell>
                      <CTableDataCell>
                        <input type="date" name="empl_mrig_anvsry" value={employeeInfo.empl_mrig_anvsry || ""} onChange={employeeInputChange} />
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
                <td>전화번호</td>
                <td><input type="text" name="empl_telno" value={employeeInfo.empl_telno || ""} onChange={employeeInputChange} placeholder="'-'를 빼고 적어주세요" /></td>
                <td>휴대폰 번호</td>
                <td><input type="text" name="empl_mobile_no" value={employeeInfo.empl_mobile_no || ""} onChange={employeeInputChange} placeholder="'-'를 빼고 적어주세요" /></td>
              </tr>
              <tr>
                <td>주민등록 주소</td>
                <td><input type="text" name="empl_ssid_addr" value={employeeInfo.empl_ssid_addr || ""} onChange={employeeInputChange} style={{ width: "100%" }} /></td>
                <td>실거주지 주소</td>
                <td><input type="text" name="empl_rlsdnc_addr" value={employeeInfo.empl_rlsdnc_addr || ""} onChange={employeeInputChange} style={{ width: "100%" }} /></td>
              </tr>
              <tr>
                <td>이메일</td>
                <td><input type="text" name="empl_email" value={employeeInfo.empl_email || ""} onChange={employeeInputChange} style={{ width: "100%" }} /></td>
                <td>개인 이메일</td>
                <td><input type="text" name="empl_prsl_email" value={employeeInfo.empl_prsl_email || ""} onChange={employeeInputChange} style={{ width: "100%" }} /></td>
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
                    {/* dept.id = dept_no */}
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>임원여부</td>
                <td>
                  <select size={1} name="empl_exctv_yn" value={employeeInfo.empl_exctv_yn || ""} onChange={employeeInputChange}>
                    <option value="N">N</option>
                    <option value="Y">Y</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>직책</td>
                <td>
                  <select size={1} name="empl_rspofc" value={employeeInfo.empl_rspofc || ""} onChange={employeeInputChange}>
                    {role.map((roles) => (
                      (roles.state === '1') ?
                        (<option key={roles.ofcps} value={roles.ofcps}>
                          {roles.ofcps_nm}
                        </option>) : (null)
                    ))}
                  </select>
                </td>
                <td>고용형태</td>
                <td>
                  <select size={1} name="empl_emplyn_form" value={employeeInfo.empl_emplyn_form || ""} onChange={employeeInputChange}>
                    {employmentType.map((empl) => (
                      <option key={empl.scode} value={empl.scode}>
                        {empl.cd_val}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>급여형태</td>
                <td>
                  <select size={1} name="empl_salary_form" value={employeeInfo.empl_salary_form || ""} onChange={employeeInputChange}>
                    {salaryform.map((salary) => (
                      <option key={salary.scode} value={salary.scode}>
                        {salary.cd_val}
                      </option>
                    ))}
                  </select>
                </td>
                <td>입사일자</td>
                <td><input type="date" name="empl_encpnd" value={employeeInfo.empl_encpnd || ""} onChange={employeeInputChange} /></td>
              </tr>
              <tr>
                <td>재직상태</td>
                <td>
                  <select size={1} name="empl_hffc_state" value={employeeInfo.empl_hffc_state || ""} onChange={employeeInputChange}>
                    <option value="1">재직</option>
                    <option value="2">퇴사</option>
                  </select>
                </td>
                <td>퇴사일자</td>
                <td><input type="date" name="empl_retire_date" value={employeeInfo.empl_retire_date || ""} onChange={employeeInputChange} /></td>
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
                    {trnbank.map((bank) => (
                      <option key={bank.scode} value={bank.scode}>
                        {bank.cd_val}
                      </option>
                    ))}
                  </select></td>
                <td>계좌번호</td>
                <td><input type="text" name="acc_no" value={salaryInfo.acc_no || ""} onChange={salaryInputChange} maxLength={14} placeholder="'-'를 빼고 적어주세요" /></td>
              </tr>
              <tr>
                <td>국민연금납부</td>
                <td>
                  <select size={1} name="npn_pay_yn" value={salaryInfo.npn_pay_yn || ""} onChange={salaryInputChange}>
                    <option value="O">O</option>
                    <option value="X">X</option>
                  </select>
                </td>
                <td>국민연금신고 월보수액</td>
                <td><input type="text" name="npn_mrmrtn" value={salaryInfo.npn_mrmrtn || ""} onChange={salaryInputChange} /></td>
              </tr>
              <tr>
                <td>건강보험납부</td>
                <td>
                  <select size={1} name="hlthins_pay_yn" value={salaryInfo.hlthins_pay_yn || ""} onChange={salaryInputChange}>
                    <option value="O">O</option>
                    <option value="X">X</option>
                  </select>
                </td>
                <td>건강보험 월보수액</td>
                <td><input type="text" name="hlthins_mrmrtn" value={salaryInfo.hlthins_mrmrtn || ""} onChange={salaryInputChange} /></td>
              </tr>
              <tr>
                <td>고용보험납부</td>
                <td>
                  <select size={1} name="empins_pay_yn" value={salaryInfo.empins_pay_yn || ""} onChange={salaryInputChange}>
                    <option value="O">O</option>
                    <option value="X">X</option>
                  </select>
                </td>
                <td>원천징수 세액</td>
                <td>
                  <select size={1} name="wthtx_taxrt" value={salaryInfo.wthtx_taxrt || ""} onChange={salaryInputChange}>
                    <option value="">선택</option>
                    <option value='80'>80%</option>
                    <option value='100'>100%</option>
                    <option value='120'>120%</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>장기요양보험 납부여부</td>
                <td>
                  <select size={1} name='rperins_pay_yn' value={salaryInfo.rperins_pay_yn || ""} onChange={salaryInputChange}>
                    <option value="O">O</option>
                    <option value="X">X</option>
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
                  <select size={1} name="empl_frgnr_yn" value={employeeInfo.empl_frgnr_yn || ""} onChange={employeeInputChange}>
                    <option value="N">N</option>
                    <option value="Y">Y</option>
                  </select>
                </td>
                <td>출국만기일자</td>
                <td><input type="date" name="dtrmcexp_date" value={frgnrInfo.dtrmcexp_date || ""} onChange={frgnrInputChange} /></td>
              </tr>
              <tr>
                <td>출국만기보험사</td>
                <td>
                  <select size={1} name="dtrmcexp_icny" value={frgnrInfo.dtrmcexp_icny || ""} onChange={frgnrInputChange}>
                    <option value="N">X</option>
                    <option value="Y">O</option>
                  </select>
                </td>
                <td>출국만기보험금액</td>
                <td><input type="text" name="dtrmcexp_insrnc_amt" value={frgnrInfo.dtrmcexp_insrnc_amt || ""} onChange={frgnrInputChange} /></td>
              </tr>
            </tbody>
          </table>
        </SManagerInfo>
        {/* user권한 페이지일경우 추가버튼 숨김 */}
        <>
          <SManagerInfo>
            <SCategoryContainer>
              <GoPrimitiveDot color="#548AFF" />
              <h3>가족사항</h3>
            </SCategoryContainer>
          </SManagerInfo>
        </>
      </SWrapper>
      <TableContainer>
        {(login_id == "user") ? null : (
          <SButtonContainer className="gap-2 d-flex justify-content-end" >
            <CButton color="danger" variant="outline" onClick={openModal}>추가</CButton>
            <NewFamilyModal isOpen={isModalOpen} closeModal={closeModal} parentFunction={parentFunction} userdata={employeeInfo} />
            {/* <CButton color="danger" variant="outline" onClick={handlepost}>저장</CButton> */}
          </SButtonContainer>

        )}
        <table style={{ border: '2px solid rgb(210, 210, 214)', marginBottom: '100px', textAlign: 'center' }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>관계</th>
              <th>성명</th>
              <th>생년월일</th>
              <th>동거여부</th>
              <th>공제희망여부</th>
              <th>장애인여부</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              renderTableRows()
            ) : (
              <tr>
                <SNoDataMsg colSpan="10">조회할 항목이 없습니다.</SNoDataMsg>
              </tr>
            )}
          </tbody>
        </table>
      </TableContainer>
    </>
  )
}

export default EmployeeDetailTable;