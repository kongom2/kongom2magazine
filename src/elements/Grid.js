import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    margin,
    padding,
    background_color,
    children,
    center,
  } = props; //children 제외 스타일 속성

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    background_color: background_color,
    center: center,
  };
  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false, //
  width: "100%",
  padding: false, //
  margin: false, //
  background_color: false, //
  center: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) =>
    props.background_color
      ? `background-color: ${props.background_color};`
      : ""}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
      ${(props) => (props.center ? `text-align: center;` : "")}
`;

export default Grid;
