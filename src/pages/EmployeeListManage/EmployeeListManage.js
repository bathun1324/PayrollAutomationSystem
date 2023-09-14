import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { EmployeeListTable, Header } from "../../components";
import SideNav from "../../components/SideNav/SideNav";
import '../../print.css';

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
  width: 60%;
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
  const [searchResults, setSearchResults] = useState([]);
  const [searchtext, setSearchtext] = useState([]); // 
  const [departments, setDepartments] = useState([]); // 부서
  const [role, setRole] = useState([]); // 직급
  const gridRef = useRef();
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSearchtext(prevState => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    // 시작할때 테이블 가져오기
    axios.get("http://13.125.117.184:8000/get_employeelist/")
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  useEffect(() => {
    // 백엔드에서 직급 데이터 가져오기
    axios.get('http://13.125.117.184:8000/get_role/')
      .then((response) => {
        setRole(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  const handleSearchClick = () => {
    let url

    if (searchtext.encpnd || searchtext.deptno || searchtext.rspofc) {   // 입사일 부서번호 직급
      url = `http://13.125.117.184:8000/search_employeelist/?employee_encpnd=${searchtext.encpnd}&department_no=${searchtext.deptno}&employee_rspofc=${searchtext.rspofc}`
    } else {
      url = "http://13.125.117.184:8000/get_employeelist/"
    }

    axios.get(url)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // 출력
  const handlePrint = () => {
    const printableArea = document.getElementById('printableArea');
    if (printableArea) {
      window.print();
    }
  };

  const onBtnExport = useCallback(() => {
    if (gridRef.current) {
      // api가 정의되어 있을 때만 exportDataAsCsv를 호출
      gridRef.current.exportDataAsCsv();
    }
  }, []);

  return (
    <SWrapper>
      <Header />
      <SContentWrapper>
        <SideNav />
        <SContentContainer>
          <SContentHeader>
            <SInputContainer>
              <div>기준일 : </div>
              <input size={200} type="date" name="encpnd" onChange={handleSelectChange} />

              <div>부서명 : </div>
              <select size={1} name="deptno" onChange={handleSelectChange}>
                <option value="">선택</option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>

              <div>직급 : </div>
              <select size={1} name="rspofc" onChange={handleSelectChange} >
                <option value="">선택</option>
                {role.map((roles) => (
                  <option key={roles.lcode} value={roles.lcode_nm}>
                    {roles.lcode_nm}
                  </option>
                ))}
              </select>
            </SInputContainer>
            <SButtonContainer>
              <SSerchButton onClick={handleSearchClick}>검색</SSerchButton>
              <SNewButton onClick={onBtnExport}>내보내기</SNewButton>
              <SNewButton onClick={handlePrint}>인쇄</SNewButton>
            </SButtonContainer>
          </SContentHeader>
          <SCompanyTable>
            <EmployeeListTable searchResults={searchResults} />
          </SCompanyTable>
        </SContentContainer>
      </SContentWrapper>
    </SWrapper>
  )

}

export default EmployeeListManage;