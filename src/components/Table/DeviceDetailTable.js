import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";


const SWrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 90%;
  height: 90%;

  font-size: 1.1em;
  text-align: left;
  line-height: 2.8;
  border-collapse: collaps;

  margin: 20px 10px;
  padding-top: 40px;
  
  border-top: 2.5px solid ${({theme}) => theme.colors.black050};


  gap: 2em;



  input {
    border: none;
    border-radius: 5px;
    padding: 15px;
  }


  tr td:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.blue010};
    text-align: right;
  }


  td {
    width: 25%;
    padding: 0 15px;
    border-bottom: 1px solid ${({theme}) => theme.colors.black050};
 
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
    box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
    
  }

`

const SManagerInfo = styled.div`
display: flex;
flex-direction: column;
padding-top: 1.5em;


height: 30%;


table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  
  
}

`


const DeviceDetailTable = () => {

  return (
    <SWrapper>
      <SCompanyInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>단말기 정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>회사명</td>
            <td><input type="text"/></td>
            <td>고유 ID</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>단말기번호</td>
            <td><input type="text"/></td>
            <td>단말기명</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>모델명</td>
            <td><input type="text"/></td>
            <td>일련번호</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>제조사</td>
            <td><input type="text"/></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </SCompanyInfo>
      <SManagerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>설치정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>설치위치</td>
            <td><input type="text"/></td>
            <td>설치일시</td>
            <td><input type="date"/></td>
          </tr>
          <tr>
            <td>상태</td>
            <td>
              <select size={1}>
              <option value="1">사용</option>
              <option value="2">미사용</option>
              </select>
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </SManagerInfo>
    </SWrapper>
  )
}

export default DeviceDetailTable;