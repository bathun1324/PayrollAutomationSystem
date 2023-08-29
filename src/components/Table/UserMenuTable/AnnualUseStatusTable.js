import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyDummy } from "../../../pages/CompanyManage/CompanyDummy";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { VacationForm } from "../../../pages";


const STableContainer = styled.div`
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


  table {

    width: 100%;

    th {
    border-bottom: 2px solid #ccc;
    border-top: 2px solid #ccc;
    font-weight: 800;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.blue010};
    border: 2px solid #ccc;
  
  }


  input {
    width: 100%;
    border: none;
    height: 4em;
    padding: 0.5em;
  }



  
  table tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.blue010};
    
  }
  
  
  tr > td {
    text-align: center;
    font-size: 1em;
    font-weight: 200;
    color: rgb(40, 40, 40);
    border: 2px solid #ccc;
    cursor: pointer;
    
    }
  }
  `
  
  
const SWrapper = styled.div`
display: flex;
justify-content: center;
width: 100%;

`

const STable = styled.div`
  width: 100%;
  height: 100%;

`

const SMonthTable = styled.div`
  padding: 1.5em 0;
`



const SInfoContainer = styled.div`
display: flex;
justify-content: flex-start;
width: 90%;
gap: 15%;
font-weight: 600;
font-size: 0.7em;
color: ${({theme}) => theme.colors.blue090}
`



const AnnualUseStatusTable = () => {

  return (
    <SWrapper>

    <STableContainer>
      <SInfoContainer>
        <div>※ 연차갯수는 1년차에 매월 발생한 연차를 2년차 말일까지 사용할 수 있다는 노사합의를 전제로 합니다.</div>
        <div>※ 입사월일기준 전후</div>
      </SInfoContainer>
      <STable>
        <table>
          <tr>
            <th>연초</th>
            <th colSpan={3}>합계</th>
            <th colSpan={3}>연초</th>
            <th colSpan={2}>올해</th>
            <th colSpan={2}>사용</th>
            <th colSpan={3}>미사용만료</th>
          </tr>
          <tr>
            <th>발생</th>
            <th>총 발생</th>
            <th>총 사용</th>
            <th>적치</th>
            <th>이월연차</th>
            <th>이월월차</th>
            <th>발생연차</th>
            <th>발생연차</th>
            <th>발생월차</th>
            <th>전년분</th>
            <th>올해분</th>
            <th>연차</th>
            <th>월차</th>
            <th>총 만료</th>
          </tr>
          <tr>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
          </tr>
        </table>
      </STable>
      <SMonthTable>
        <table>
          <tr>
            <th>월</th>
            <th>발생</th>
            <th>사용</th>
          </tr>
          <tr>
            <td>1월</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2월</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3월</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>4월</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>5월</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>6월</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>7월</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>8월</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>9월</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>10월</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>11월</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>12월</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </SMonthTable>
    </STableContainer>
    </SWrapper>
  ) 

}


export default AnnualUseStatusTable;
