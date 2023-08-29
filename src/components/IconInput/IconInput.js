import styled from "styled-components";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const SWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-item: center;
  margin-top: 10px;
  width: ${(props) => props.width || 210}px;
  height: ${(props) => props.height || 40}px;

`;

const SContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-item: center;

  width: ${(props) => props.width || 210}px;
  height: ${(props) => props.height || 40}px;
  border-radius:3px;
  border: 1.7px solid rgb(207, 207, 207);
  
  & > input {
    border: none;
    placeholderTextColor: gray;
    
  }

`

const SIconBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.colors.black110};
  border-radius: 3px 0px 0px 3px;
  background-color: rgb(237, 237, 237);
`;

const SSelect = styled.div`
`

const getIcon = (type) => {
  if (type === "select") {
    return <FaUser />;
  } else if (type === "text") {
    return <FaUser />;
  } else if (type === "password") {
    return <FaLock />;
  }
};

const StyledInput = ({ type, iconElement, width, height, color, placeholder, onChange }) => {
  const [showSelect, setShowSelect] = useState(false);

  const handleInputClick = () => {
    if (type === "select") {
      setShowSelect(true);
    }
  };

  const handleSelectBlur = () => {
    setShowSelect(false);
  };

  return (
    <SWrapper>
      <SContainer>
        <SIconBox> <div>{iconElement}</div></SIconBox>
        {type === "select" ? (
          <input
            type="text"
            placeholder={placeholder}
            onClick={handleInputClick}
          />
        ) : (
          <input type={type} placeholder={placeholder} onChange={onChange}/>
        )}
        {type === "select" && showSelect && (
          <SSelect onBlur={handleSelectBlur}>
            <option value={1}>케이이노텍</option>
            <option value={2}>케이이노텍</option>
            <option value={3}>케이이노텍</option>
            {/* Add more options as needed */}
          </SSelect>
        )}
      </SContainer>
    </SWrapper>
  );
};

const IconInput = ({ type, icon, onChange }) => {
  return <StyledInput type={type} iconElement={icon} onChange={onChange} />; 
};

export default IconInput;