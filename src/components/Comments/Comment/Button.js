import React from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

const Button = ({
  text,
  disabled,
  width,
  height,
  color,
  font,
  radius,
  children,
  onClick,
  fColor,
  fSize,
  fWeight,
  border,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      width={width}
      height={height}
      color={color}
      fColor={fColor}
      font={font}
      fWeight={fWeight}
      fSize={fSize}
      radius={radius}
      border={border}
      onClick={onClick}
    >
      {disabled ? (
        <ThreeDots color="#fff" height={45} width={60} />
      ) : (
        text || children
      )}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;

  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "45px")};
  margin-left: -30px;
  border-radius: ${(props) => (props.radius ? `${props.radius}%` : "5px")};
  border: ${(props) => (props.border ? props.border : "none")};
  background-color: ${(props) => (props.color ? props.color : "#52B6FF")};
  color: ${(props) => (props.fColor ? props.fColor : "white")};
  font-family: ${(props) => (props.font ? props.font : "inherit")};
  font-weight: ${(props) => (props.fWeight ? props.fWeight : "400")};
  font-size: ${(props) => (props.fSize ? props.fSize : 21)}px;
  position: relative;
  right: 5px;

  &:disabled {
    opacity: 70%;
  }
`;
