import React, { useState } from "react";
import About from "./About";
import Calender from "./Calender";
import Contact from "./Contact";
import { Cursor } from "./cursor/Cursor";
import Intro, { ThemeBut } from "./Intro";
import Nav from "./Nav";
import Projects from "./Projects";
import styled from "styled-components";
import Toggle from "./Toggle";
import Foot from "./Foot";
import { useCursorHandlers } from "./cursor/useCursorHandlers";

import MoodIcon from "@material-ui/icons/Mood";
import MoodBadIcon from "@material-ui/icons/MoodBad";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MailIcon from "@material-ui/icons/Mail";

import Grid from "@material-ui/core/Grid";

const MockApp = ({
  v,
  setV,
  secondary,
  setSecondary,
  primary,
  setPrimary,
  setImmersive,
}) => {
  const [draw, setDraw] = useState(false);
  const cursorHandlers = useCursorHandlers();

  return (
    <div>
      <Nav setImmersive={setImmersive} setDraw={setDraw} />
      {draw && (
        <Changes {...cursorHandlers}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Sma>
                <p>Set Cursor Color Here (Ex: Your Fav Color)</p>
                <input
                  type="color"
                  value={secondary}
                  onChange={(e) => setSecondary(e.target.value)}
                />
                <p>Set Cursor border Color here (Ex: Your Not so Fav Color)</p>
                <input
                  type="color"
                  value={primary}
                  onChange={(e) => setPrimary(e.target.value)}
                />
                <p>Set The Torch Radius Here (Ex: 10)</p>
                <input
                  type="number"
                  value={v}
                  onChange={(e) => setV(e.target.value)}
                  style={{ color: "black", width: "50px", fotSize: "30px" }}
                />
                <br />
                <ThemeBut
                  onClick={() => setDraw(false)}
                  style={{
                    fotSize: "30px",
                    margin: "30px auto",
                  }}
                >
                  CLOSE
                </ThemeBut>
              </Sma>
            </Grid>
            <Grid item xs={12} md={6}>
              <Sma>
                <h3>Test Your Custom Cursor Here</h3>
                <h3>Sample Buttons</h3>
                <ThemeBut onClick={() => setDraw(false)}>I Love IT</ThemeBut>
                <MoodIcon />
                <br />
                <br />
                <ThemeBut>I Hate IT</ThemeBut>
                <MoodBadIcon />
                <br />

                <br />
                <h4>Sample Icons</h4>
                <LinkedInIcon
                  style={{ width: "40px", height: "40px", padding: "10px" }}
                />
                <GitHubIcon
                  style={{ width: "40px", height: "40px", padding: "10px" }}
                />
                <FavoriteIcon
                  style={{ width: "40px", height: "40px", padding: "10px" }}
                />
                <MailIcon
                  style={{ width: "40px", height: "40px", padding: "10px" }}
                />
              </Sma>
            </Grid>
          </Grid>
        </Changes>
      )}
      <Cursor p={primary} s={secondary} v={v} />
      <Intro />
      <About />
      <Projects />
      <Calender />
      <Contact />
      <Foot />
    </div>
  );
};

export default MockApp;

const Changes = styled.div`
  position: fixed;
  display: flex;
  width: 80%;
  margin-left: 10%;
  background-color: rgb(37, 38, 42);
  transition: all 500ms ease;
  padding: 7% 0;
`;
const Sma = styled.div`
  width: 45%;
  margin: auto;
  overflow: auto;
  align-items: center;
`;
