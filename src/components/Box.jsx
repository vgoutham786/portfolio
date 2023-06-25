import React from "react";
import styled from "styled-components";
import { useCursorHandlers } from "./cursor/useCursorHandlers";

const Box = () => {
  const cursorHandlers = useCursorHandlers();
  return (
    <Bix>
      <Head1 {...cursorHandlers}>My PortFolio</Head1>
      <div {...cursorHandlers}>A</div>
      <div {...cursorHandlers}>B</div>
      <div {...cursorHandlers}>C</div>
    </Bix>
  );
};

export default Box;

const Bix = styled.div`
  color: red;
  background-color: white;
  > div {
    width: 100px;
    margin: auto;
  }
`;
export const Head1 = styled.h1`
  font-size: 40px;
  line-height: 60px;
  color: #e4e6eb;
`;
