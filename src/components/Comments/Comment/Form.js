import React from "react";
import styled from "styled-components";

const Form = ({ children, width, onSubmit, disabled, height }) => {
  const elements = React.Children.toArray(children);

  return (
    <StyledForm width={width} height={height} onSubmit={onSubmit}>
      {elements.map((e) => React.cloneElement(e, { disabled }))}
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : "initial")};
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;
