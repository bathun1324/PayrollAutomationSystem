import styled from "styled-components";


export const DefaultTable = styled.div`
  display: ${ display || flex };
  flex-direction:  ${ flexDirection || column };
  justify-content: center;
  align-items: center;

  background-color: ${ bgColor || white };
  border-color: ${ borderColor || `1px solid rgb(127, 127, 127)` };
  width: ${width || `90%` };

& > td: first-child {
  color: white;
  font-weight: 800;
  font-size: 1.1em;
  background-color:  rgb(127, 127, 127);

}



`