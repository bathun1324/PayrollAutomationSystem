import styled from "styled-components";
import ModalTemplate from "./ModalTemplate";
import { useState, useEffect } from "react";
import axios from 'axios';  // axios를 임포트하여 API 호출에 사용
import { CButton } from '@coreui/react'

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
  width: 50%;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
  
  table {    
    width: 100%;
    height: 70%;
    text-align: center;
  }
  
  
  tr > td {
    padding: 7px;
    font-weight: 500;
    border: 2px solid #ccc;
    vertical-align: middle;

    :nth-child(odd) {
      background-color: rgb(234, 234, 234);
      width: 25%;
    }
    :nth-child(even) {
      width: 25%;
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
  width: 90%;

  padding: 1.5em 0;

`

const SCancleButton = styled.button`
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

const SSaveButton = styled.button`
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


const NewFamilyModal = ({ isOpen, closeModal, parentFunction }) => {

  const [fmlyreltn, setFmlyreltn] = useState([]); // 가족관계 데이터
  useEffect(() => {
    // 백엔드에서 가족관계 데이터 가져오기
    axios.get("http://13.125.117.184:8000/get_codefmlyreltn/")
      .then((response) => {
        setFmlyreltn(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  const [data, setdata] = useState({
    empl_no: '',
    corp_no: '',
    dept_no: '',
    fmly_no: '',
    reltn: '0001',
    constnt_nm: '',
    brthdy: '',
    livtgt_yn: '',
    dednhope_yn: '',
    dspsn_yn: '',
    remark: '',
    reg_dtime: '',
    reg_id: '',
    upt_dtime: '',
    upt_id: '',
  });

  const fmlyChange = (event) => {
    const { name, value } = event.target;
    setdata({
      ...data,
      [name]: value,
    });
  };

  return (
    <SContainer style={{ display: isOpen ? "block" : "none" }}>
      <SModalBody>
        <p>가족 사항을 생성 및 수정합니다.</p>
        <SModalTable>
          <table>
            <tbody>
              <tr>
                <td>번호</td>
                <td>자동채번됩니다</td>
                <td>관계</td>
                <td>
                  <select size={1} name="reltn" value='0001' onChange={fmlyChange}>
                    {fmlyreltn.map((reltn) => (
                      <option key={reltn.scode} value={reltn.scode}>
                        {reltn.cd_val}
                      </option>
                    ))}
                  </select></td>
              </tr>


              <tr>
                <td>성명</td>
                <td><input type="text" name="constnt_nm" value={data.constnt_nm} onChange={fmlyChange} /></td>
                <td>생년월일</td>
                <td><input type="date" name="brthdy" value={data.brthdy} onChange={fmlyChange} /></td>
              </tr>
              <tr>
                {/* 동거여부 = 거주여부 */}
                <td>동거여부</td>
                <td>
                  <select size={1} name="livtgt_yn" value={data.livtgt_yn} onChange={fmlyChange}>
                    <option value="Y">Y</option>
                    <option value="N">N</option>
                  </select>
                </td>
                <td>공제희망여부</td>
                <td>
                  <select size={1} name="dednhope_yn" value={data.dednhope_yn} onChange={fmlyChange}>
                    <option value="O">O</option>
                    <option value="X">X</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>장애인여부</td>
                <td>
                  <select size={1} name="dspsn_yn" value={data.dspsn_yn} onChange={fmlyChange}>
                    <option value="O">O</option>
                    <option value="X">X</option>
                  </select>
                </td>
                <td></td>
                <td>
                </td>
              </tr>
            </tbody>
          </table>
        </SModalTable>
        <SButtonCotainer>
          <CButton color="dark" variant="outline" onClick={closeModal}>취소</CButton>
          <CButton color="danger" variant="outline" onClick={() => { closeModal(); parentFunction(data); }}>저장</CButton>
        </SButtonCotainer>
      </SModalBody>
    </SContainer>
  )
}


export default NewFamilyModal;