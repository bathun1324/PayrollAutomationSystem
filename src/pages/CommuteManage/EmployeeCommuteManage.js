import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { EmployeeCommuteTable, Header } from "../../components";
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
  width: 80%;

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
  width: auto;
  // min-width: 30%;
  gap: 1.1em;
  font-size: 0.9em;
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

const EmployeeCommuteManage = () => {

  const [commutemanage, setACommutemanage] = useState([]); // departments 변수를 useState로 정의
  const [employeename, setEmployeename] = useState('');
  const [employeeno, setEmployeeno] = useState('');

  const handleNameChange = (event) => {
    setEmployeename(event.target.value);
  };
  const handleNoChange = (event) => {
    setEmployeeno(event.target.value);
  };

  const handleSearchClick = () => {
    let url

    if (employeename || employeeno) {
      url = `http://13.125.117.184:8000/search_commutemanage/?employee_name=${employeename}&employee_no=${employeeno}`
    } else {
      url = "http://13.125.117.184:8000/get_commutemanage/"
    }

    axios.get(url)
      .then((response) => {
        setACommutemanage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    // 백엔드에서 부서 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_commutemanage/")
      .then((response) => {
        setACommutemanage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <SWrapper>
      <Header />
      <SContentWrapper>
        <SideNav />
        <SContentContainer>
          <SCategory>
            <div>출퇴근 관리</div>
          </SCategory>
          <SContentHeader>
            <SInputContainer>
              <div>사원명 : </div>
              <input size={10} type="text" value={employeename} onChange={handleNameChange} />
              <div>사원번호</div>
              <input size={10} type="text" value={employeeno} onChange={handleNoChange} />
            </SInputContainer>
            <SButtonContainer>
              <SSerchButton onClick={handleSearchClick}>검색</SSerchButton>
            </SButtonContainer>
          </SContentHeader>
          <SCompanyTable>
            <EmployeeCommuteTable commutemanage={commutemanage} />
          </SCompanyTable>
        </SContentContainer>
      </SContentWrapper>
    </SWrapper>
  )

}

export default EmployeeCommuteManage;