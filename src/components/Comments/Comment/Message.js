import React from "react";
import styled from "styled-components";

const Message = ({ text, size, font, color, width }) => {
  return (
    <StyledTitle size={size} font={font} color={color} width={width}>
      {text}
    </StyledTitle>
  );
};

export default Message;

const StyledTitle = styled.span`
  color: ${(props) => (props.color ? props.color : "#666666")};
  font-size: ${(props) => (props.size ? props.size : "18px")};
  width: ${(props) => (props.width ? props.width : "100%")};
  font-family: ${(props) => (props.font ? props.font : "inherit")};
`;
