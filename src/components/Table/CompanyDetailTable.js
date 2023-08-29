import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";

const SWrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 90%;
  height: 90%;

  font-size: 1.1em;
  text-align: left;
  line-height: 2.8;
  border-collapse: collaps;

  margin: 20px 10px;
  
  border-top: 2.5px solid ${({theme}) => theme.colors.black050};

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


height: 30%;


table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  
  
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

const SEtcInfo = styled.div`
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

const SCompanyLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;


  height: 30%;

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
  background-color: ${({theme}) => theme.colors.blue090};
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


const CompanyDetailTable = () => {

  return (
    <SWrapper>
      <SCompanyInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>회사 정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>회사명</td>
            <td><input type="text"/></td>
            <td>대표자명</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>사업자번호</td>
            <td><input type="text"/></td>
            <td>대표전화번호</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>주소</td>
            <td><input type="text"/></td>
            <td>사원수</td>
            <td><input type="text"/></td>
          </tr>
        </table>
      </SCompanyInfo>
      <SManagerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>담당자 정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>담당자명</td>
            <td><input type="text"/></td>
            <td>직책</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>회사 전화번호</td>
            <td><input type="text"/></td>
            <td>이메일</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>휴대폰번호</td>
            <td><input type="text"/></td>
            <td>담당자ID</td>
            <td><input type="text"/></td>
          </tr>
        </table>
      </SManagerInfo>
      <SContractInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>계약자 정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>계약형태</td>
            <td>
            <select size={1}>
              <option value="1">년간 갱신</option>
              <option value="2">월간 갱신</option>
            </select>
            </td>
            <td>상태</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>계약일자</td>
            <td><input type="date"/></td>
            <td>만료일자</td>
            <td><input type="date"/></td>
          </tr>
          <tr>
            <td>결제일자</td>
            <td><input type="date"/></td>
            <td>해지일자</td>
            <td><input type="date"/></td>
          </tr>
          <tr>
            <td>비콘사용여부</td>
            <td><input type="text"/></td>
            <td>비콘설치개수</td>
            <td><input type="text"/></td>
          </tr>
        </table>
      </SContractInfo>
      <SEtcInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>기타</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>월차정산기준</td>
            <td><input placeholder="회계년도 / 입사월"/></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>등록일시</td>
            <td><input readOnly placeholder="변경불가"/></td>
            <td>수정일시</td>
            <td><input readOnly placeholder="변경불가"/></td>
          </tr>
        </table>
      </SEtcInfo>
      <SNote>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>비고</h3>  
        </ SCategoryContainer>
        <input placeholder="비고 입력란"/>
      </SNote>
      <SCompanyLogo>
      <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>로고</h3>
        </SCategoryContainer>
          <SFileContainer>
          <div>파일명 : </div>
          <input type="flie" accept="image/*" placeholder="내용을 입력해주세요 "/>
          <SFileBtn>파일선택</SFileBtn>
      </SFileContainer>
      <SLogoimgContainer>로고 이미지 위치</SLogoimgContainer>
      </SCompanyLogo>
    </SWrapper>
  )

}

export default CompanyDetailTable;