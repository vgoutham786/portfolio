import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { useCursorHandlers } from "./cursor/useCursorHandlers";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Intro = () => {
  const cursorHandlers = useCursorHandlers();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const small = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Grid container spacing={5} style={{ width: "80%", margin: "auto" }}>
      <Grid item xs={12} md={6} {...cursorHandlers}>
        <Int id="home">
          <h2>Hello there 👋🏻 </h2>
          <h1 id="user-detail-name">
            I'm{" "}
            <big style={{ fontSize: small ? "50px" : "35px" }} >
              Goutham V.
            </big>
          </h1>
          <p id="user-detail-intro">Nice to meet you. I enjoy developing websites.</p>
          <p> Scroll down to Explore more...</p>
          <a href="#contact">
            <button
              style={{
                width: "150px",
                margin: matches ? "35px 7.5%" : "15px 15%",
              }}
            >
              Contact Me
            </button>
          </a>
          <a href="https://drive.google.com/file/d/1y4X2iN_Riyj152DNtvO_1xhS3OsaIFl2/view?usp=sharing" target="_blank" id="resume-link-2">
            <button id="resume-button-2"
              style={{
                width: "150px",
                margin: matches ? "35px 7.5%" : "15px 15%",
              }}
            >
              My Resume
            </button>
            <div id="about"></div>
          </a>
        </Int>
      </Grid>
      <Grid item xs={12} md={6}>
        <Int2>
          <img className="home-img"
            src="https://i.ibb.co/DtJCnRZ/profile.jpg"
            alt="Profile"
            border="0"
          />
        </Int2>
      </Grid>
    </Grid>
  );
};

export default Intro;

const Int = styled.div`
  color: #e4e6eb;
  text-align: left;
  width: 100%;
  align-self: center;
  margin: 12% auto 3%;
  button {
    width: auto;
    padding: 5px 10px;
    font-size: 18px;
    margin: 25px 7.5%;
    background-color: rgb(218, 217, 213);
    color: rgb(37, 38, 42);
  }
  p {
    font-size: 18px;
    color: #e0d2d2;
  }
`;
const Int2 = styled.div`
  width: 100%;
  height: auto;
  margin: 7% auto 3%;
  align-items: center;
  > img {
    width: 80%;
    margin: 0 auto;
    align-self: center;
    border-radius: 50%;
    z-index: 500px;
  }
`;

export const ThemeBut = styled.button`
  width: auto;
  padding: 5px 10px;
  font-size: 18px;
  background-color: rgb(218, 217, 213);
  color: rgb(37, 38, 42);
  align-items: center;
`;
