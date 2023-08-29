import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { EmployeeListTable, Header } from "../../components";
import SideNav from "../../components/SideNav/SideNav";


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
  justify-content: flex-start;
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
  width: 20%;
  min-width: 20%;
  gap: 1.1em;
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

const SPrintButton = styled(SNewButton)`

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

const EmployeeListManage = () => {
  const [employeesmanage, setAemployeesmanage] = useState([]);
  // const [searchtext, setSearchtext] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [departments, setDepartments] = useState([]); // departments 변수를 useState로 정의
  const [employees, setEmployees] = useState([]);
  const [encpnd, setEncpnd] = useState(''); // 입사일
  const [deptno, setDeptno] = useState(''); // 부서번호
  const [rspofc, setRspofc] = useState(''); // 직급

  const handleEncpndChange = (e) => {
    setEncpnd(e.target.value);
  };

  const handleDeptnoChange = (event) => {
    setDeptno(event.target.value);
  };

  const handleRspofcChange = (event) => {
    setRspofc(event.target.value);
  }

  useEffect(() => {
    // 시작할때 테이블 가져오기
    axios.get("http://127.0.0.1:8000/get_employees/")
      .then((response) => {
        setAemployeesmanage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    axios.get("http://127.0.0.1:8000/get_employees/")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    axios.get("http://127.0.0.1:8000/get_departments/")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const [role, setRole] = useState([]);
  useEffect(() => {
    // 백엔드에서 직책 데이터 가져오기
    axios.get('http://127.0.0.1:8000/get_role/')
      .then((response) => {
        setRole(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const handleSearchClick = () => {
    let url

    if (encpnd || deptno || rspofc) {   // 입사일 부서번호 직급
      url = `http://127.0.0.1:8000/search_employeelist/?employee_encpnd=${encpnd}&department_no=${deptno}&employee_rspofc=${rspofc}`
    } else {
      url = "http://127.0.0.1:8000/get_employeelist/"
    }

    axios.get(url)
      .then((response) => {
        setAemployeesmanage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <SWrapper>
      <Header />
      <SContentWrapper>
        <SideNav />
        <SContentContainer>
          <SCategory>
            <div>직원명부조회</div>
          </SCategory>
          <SContentHeader>
            <SInputContainer>
              <div>기준일 : </div>
              <input size={200} type="date" onChange={handleEncpndChange} />
            </SInputContainer>
            <SInputContainer>
              <div>부서명 : </div>
              <select size={1} onChange={handleDeptnoChange}>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </SInputContainer>
            <SInputContainer>
              <div>직급 : </div>
              <select size={1} onChange={handleRspofcChange} >
                {role.map((roles) => (
                  <option key={roles.lcode} value={roles.lcode_nm}>
                    {roles.lcode_nm}
                  </option>
                ))}
              </select>
            </SInputContainer>
            <SButtonContainer>
              <SSerchButton onClick={handleSearchClick}>검색</SSerchButton>
              <SNewButton>신규</SNewButton>
              <SPrintButton>인쇄</SPrintButton>
            </SButtonContainer>
          </SContentHeader>
          <SCompanyTable>
            <EmployeeListTable employeesmanage={employeesmanage} />
          </SCompanyTable>
        </SContentContainer>
      </SContentWrapper>
    </SWrapper>
  )

}

export default EmployeeListManage;