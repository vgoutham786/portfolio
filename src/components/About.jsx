import React from "react";
import { useCursorHandlers } from "./cursor/useCursorHandlers";
import { Head1 } from "./Box";
import styled from "styled-components";

const About = () => {
  const cursorHandlers = useCursorHandlers();

  return (
    <Main {...cursorHandlers} style={{ color: "white" }}>
      <Head1 id="about" className="about section">About Me</Head1>
      <p >
        I am currently learning full stack web development at Masai School. I am
        passionate about solving real-world problems and actively looking for
        opportunities in the field of web development and software engineering.
      </p>
      <Head1 id="skills">Front-End</Head1>
      <End>
        <Skill className="skills-card">
          <img src="https://i.ibb.co/S75JRxM/html.jpg" alt="html" className="skills-card-img" />
          <p className="skills-card-name">HTML5</p>
        </Skill>

        <Skill className="skills-card">
          <img src="https://i.ibb.co/mygzmXB/css.jpg" alt="css" className="skills-card-img" />
          <p className="skills-card-name">CSS3</p>
        </Skill>
        <Skill className="skills-card">
          <img src="https://i.ibb.co/Fzw7qfb/js.jpg" alt="js" className="skills-card-img" />{" "}
          <p className="skills-card-name">JavaScript</p>
        </Skill>
      </End>
      <Head1>Back-End</Head1>
      <End>
        <Skill className="skills-card">
          <img className="skills-card-img"
            src="https://tse3.mm.bing.net/th?id=OIP.CTvVfHEeovAx-0V5-dqVRwHaHa&pid=Api&P=0&w=300&h=300"
            alt="node"
          />{" "}
          <p className="skills-card-name">Node</p>
        </Skill>
        <Skill className="skills-card">
          <img src="https://i.ibb.co/FXXZwPL/mongoose.jpg" alt="mongoose" className="skills-card-img" />
          <p className="skills-card-name">Mongoose</p>
        </Skill>
        <Skill className="skills-card">
          <img src="https://i.ibb.co/Mp1CBMP/mongo.jpg" alt="mongo" />
          <p className="skills-card-name">MongoDB</p>
        </Skill>
        <Skill className="skills-card">
          <img src="https://i.ibb.co/gWWHv6J/express.jpg" alt="express" className="skills-card-img" />{" "}
          <p className="skills-card-name">Express</p>
        </Skill>
      </End>
      {/* <div
        id="projects"
        style={{ height: "0", padding: "0", margin: "0" }}
        {...cursorHandlers}
      ></div> */}
    </Main>
  );
};

export default About;

const Main = styled.div`
  margin: 1.5% auto;
  background-color: rgb(37, 38, 42);
  width: 80%;
  padding: 3% 10% 5%;
  margin-bottom: 0px;
  > p {
    width: 85%;
    margin: auto;
    padding: 0 5%;
    font-size: 18px;
    line-height: 27px;
  }
`;
const Skill = styled.div`
  width: 150px;
  height: 150px;
  border: 3px solid #e4e6eb;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 12px;
  transition: all 500ms ease;
  :hover {
    transform: scale(1.2);
    transition: all 500ms ease;
  }
  > img {
    width: 70%;
    height: 75%;
    object-fit: contain;
  }
  > p {
    font-size: 22px;
    margin: 5px;
  }
`;
const End = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;
