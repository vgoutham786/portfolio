import React, { useState } from "react";
import { useCursorHandlers } from "../components/cursor/useCursorHandlers";
import ListIcon from "@material-ui/icons/List";

import styled from "styled-components";
//import Toggle from "./Toggle";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import WorkIcon from "@material-ui/icons/Work";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const Nav = ({ setImmersive, setDraw }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const small = useMediaQuery(theme.breakpoints.up("sm"));

  const cursorHandlers = useCursorHandlers();
 
  return (
    <Card id="nav-menu"
      
      {...cursorHandlers}
    >
      {matches && (
        <A href="#home" aria-label="home" >
          
          <button aria-label="logo" className="nav-link home"> 
            <img src="https://i.ibb.co/x74k6bs/gif.gif" alt="" />
          </button>
        </A>
      )}

      <A href="#about" >
        <button className="nav-link about"
          style={{
            transform: `translate3d(${-x}px,${y}px,${z / 5}px)`,
          }}
          aria-label="logo"
        >
          {small ? "About" : <AccountBoxIcon />}
        </button>
      </A>

      <A href="#skills" >
        <button style={{ transform: `translate3d(${-x}px,${y}px,${z / 5}px)` }} className="nav-link skills">
          {small ? "Skills" : <ContactPhoneIcon />}
        </button>
      </A>

      <A href="#projects" >
        <button style={{ transform: `translate3d(${-x}px,${y}px,${z / 5}px)` }} className="nav-link projects">
          {small ? "Projects" : <WorkIcon />}
        </button>
      </A>

      <A href="#contact" >
        <button style={{ transform: `translate3d(${-x}px,${y}px,${z / 5}px)` }} className="nav-link contact">
          {small ? "Contact" : <ContactPhoneIcon />}
        </button>
      </A>

      <A href="../download/Goutham-V-Resume.pdf"  download id="resume-link-1">
        <button id="resume-button-1" className="nav-link resume" style={{ transform: `translate3d(${-x}px,${y}px,${z / 5}px)` }}>
          {small ? "Resume" : <ContactPhoneIcon />}
        </button>
      </A>
     
    </Card>
  );
};

export default Nav;

const Card = styled.div`
  //transform-style: preserve-3d;
  position: fixed;
  top: 0;

  z-index: 100px;
  width: 92vw;
  padding: 0 4vw;
  overflow-y: hidden;
  background-color: rgb(45, 46, 50);

  backdrop-filter: blur(30px);
  margin: -10px auto;
  justify-content: space-around;
  display: flex;
  height: 100px;

  transition: all 0.5s ease;

  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
`;
const Sig = styled.div`
  width: 100px;
  > #sign {
    stroke-dasharray: 900;
    stroke-dashoffset: 900;
    animation: signn 5s infinite ease;
  }
  @keyframes signn {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
export const A = styled.a`
  margin-top: 25px;
  height: 0px;
  justify-content: center;
  box-shadow: 5px 5px 11px pink;
  align-items: center;
  > button {
    background-color: transparent;
    border: none;
    font-size: 18px;
    margin: auto;
    align-self: center;
    padding: 10px;
    text-align: center;
    > img {
      position: relative;
      top: -145px;
      left: -50px;
      width: 340px;
      height: 340px;
    }
  }
`;
