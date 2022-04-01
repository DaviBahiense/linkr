import React from "react";
import styled from "styled-components";

const Container = ({
  children,
  width,
  height,
  horizontal,
  bgColor,
  radius,
  padding,
  justify,
  margin,
  minH,
  minW,
  maxW,
  align,
  onClick,
  cursor,
  font,
  border,
  shadow,
}) => {
  return (
    <StyledContainer
      cursor={cursor}
      onClick={onClick}
      width={width}
      height={height}
      horizontal={horizontal}
      bgColor={bgColor}
      radius={radius}
      padding={padding}
      margin={margin}
      justify={justify}
      align={align}
      minH={minH}
      minW={minW}
      maxW={maxW}
      border={border}
      font={font}
      shadow={shadow}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;

const StyledContainer = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.horizontal ? "row" : "column")} nowrap;
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) =>
    props.justify ? props.justify : "space-between"};
  width: ${(props) => (props.width ? props.width : "98%")};
  min-width: ${(props) => (props.minW ? props.minW : "0")};
  max-width: ${(props) => (props.maxW ? props.maxW : "100%")};
  min-height: ${(props) => (props.minH ? props.minH : "0")};
  height: ${(props) => (props.height ? props.height : "100%")};

  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  border: ${(props) => (props.border ? props.border : "none")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  cursor: ${(props) => (props.cursor ? props.cursor : "auto")};
  font-family: ${(props) => (props.font ? props.font : "inherit")};
  box-shadow: ${(props) => (props.shadow ? props.shadow : "none")};
`;
