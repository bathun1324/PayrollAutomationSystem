import styled from "styled-components";

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 90%;

  font-size: 1.1em;
  text-align: left;
  line-height: 2.8;
  border-collapse: collaps;

  margin: 20px 0px;

  table {
    border: 2px solid #ccc;
  }

  th {
    justify-content: center;
    align-items: center;
    font-weight: 600;
    vertical-align: middle;
    height: 100%;
    // background-color: ${({ theme }) => theme.colors.blue010};
  }
  
  td {
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-weight: 200;u
    background-color: white;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black110};
    
    :first-child {
      width: 50%;
      border-right: 2px solid #ccc;
    }
  }

  

`;

const DepartureInsuranceSumTable = ()=> {

  return (
    <TableContainer>
      <table>
        <tr>
          <th rowSpan={2}>전체합계</th>
          <th>보험료합계</th>
          <th>납입횟수합계</th>
        </tr>
        <tr>
          <td>860,000</td>
          <td>126</td>
        </tr>
      </table>
    </TableContainer>

  )

}

export default DepartureInsuranceSumTable;