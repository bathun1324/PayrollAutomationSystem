import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Header, SideNav, EmployeeDetailTable, EmployeeDetailFamilyTable } from "../../components";
import React, { useEffect, useState } from 'react';
import axios from 'axios';



const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

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

  padding: 30px;
  width: 100%;

`

const SCategory = styled.div`
  width: 90%;

  padding: 10px 0px;
  font-size: 28px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.black110};

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
  background-color: ${({theme}) => theme.colors.blue090};
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
  background-color: ${({theme}) => theme.colors.blue090};
  border-radius: 3px;
  border: none;

  &:hover{  
    background-color : ${({theme}) => theme.colors.blue010};
  }
`



const EmployeeDetail = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const [table, setTable] = useState([]);
  const [tableattend, setTableAtend] = useState([]);
  const [tablesalary, setTableSalary] = useState([]);
  const [tablefrgnr, setTableFrgnr] = useState([]);
  const [tablefmly, setTablefmly] = useState([]);

  useEffect(() => {
    if(id){
      axios.get(`http://127.0.0.1:8000/get_detailtable/?empl_id_detail=${id}`)
        .then((response) => {
          setTable(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  
  useEffect(() => {
    if(id){
      axios.get(`http://127.0.0.1:8000/get_detailattend/?empl_id_detail=${id}`)
        .then((response) => {
          setTableAtend(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    if(id){
      axios.get(`http://127.0.0.1:8000/get_detailsalary/?empl_id_detail=${id}`)
        .then((response) => {
          setTableSalary(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    if(id){
      axios.get(`http://127.0.0.1:8000/get_detailfrgnr/?empl_id_detail=${id}`)
        .then((response) => {
          setTableFrgnr(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    if(id){
      axios.get(`http://127.0.0.1:8000/get_detailtablefmly/?empl_id_detail=${id}`)
        .then((response) => {
          setTablefmly(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);



  return (
    <SWrapper>
      <Header />
      <SContentWrapper>
        <SideNav />
        <SContentContainer>
          <SCategory>사원정보 상세</SCategory>
          <EmployeeDetailTable id={id} table={table} tableattend={tableattend} tablesalary={tablesalary} tablefrgnr={tablefrgnr}/>
          <EmployeeDetailFamilyTable tablefmly={tablefmly}/>
        </SContentContainer>
      </SContentWrapper>
    </SWrapper>    

  )

}

export default EmployeeDetail;