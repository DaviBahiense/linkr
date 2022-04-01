import React from "react";
import styled from "styled-components";

const Input = ({
  text,
  type,
  required,
  disabled,
  data,
  width,
  height,
  color,
  radius,
  onClick,
  fColor,
  pColor,
  font,
  fSize,
  fWeight,
  border,
  padding,
  cursor,
  outline,
}) => {
  const { value, setValue } = data || {};
  return (
    <StyledInput
      width={width}
      height={height}
      color={color}
      fColor={fColor}
      pColor={pColor}
      fWeight={fWeight}
      font={font}
      fSize={fSize}
      onClick={onClick}
      radius={radius}
      border={border}
      outline={outline}
      padding={padding}
      cursor={cursor}
      placeholder={text}
      type={type || "text"}
      required={required || false}
      disabled={disabled}
      value={value ? value : ""}
      onChange={setValue ? (e) => setValue(e.target.value) : () => null}
    />
  );
};

export default Input;

const StyledInput = styled.input`
  width: ${(props) => (props.width ? `${props.width}px` : "115%")};
  height: ${(props) => (props.height ? `${props.height}px` : "45px")};
  margin: 5px;
  border-radius: ${(props) => (props.radius ? `${props.radius}%` : "5px")};
  border: ${(props) => (props.border ? props.border : "1px solid #d4d4d4")};
  padding: ${(props) => (props.padding ? props.padding : "9px")};
  background-color: ${(props) => (props.color ? props.color : "white")};
  color: ${(props) => (props.fColor ? props.fColor : "black")};
  font-size: ${(props) => (props.fSize ? props.fSize : "20px")};
  font-family: ${(props) => (props.font ? props.font : "inherit")};
  font-weight: ${(props) => (props.fWeight ? props.fWeight : "400")};
  cursor: ${(props) => (props.cursor ? props.cursor : "auto")};

  &::placeholder {
    color: ${(props) => (props.pColor ? props.pColor : "#d4d4d4")};
  }

  &:disabled {
    background-color: #f2f2f2;
    color: #afafaf;
  }

  &:focus {
    outline: ${(props) =>
      props.outline ? props.outline : "1px solid #52b6ff"};
  }
`;
