import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { useCursorHandlers } from "./cursor/useCursorHandlers";
import { ThemeBut } from "./Intro";
import { Head1 } from "./Box";

const Projects = () => {
  const cursorHandlers = useCursorHandlers();
  return (
    <Cont {...cursorHandlers}>
      <Head1 id="projects">Projects</Head1>
      <Grid container className="project-card">
        <Grid xs={12} md={6}>
          <Img>
            <img src="https://i.ibb.co/CvJGjWj/caratlane.png" alt="caratlane" />
          </Img>
        </Grid>
        <Grid xs={12} md={6}>
          <Proj>
            <h2 className="project-title">Caratlane Clone</h2>
            <p className="project-description">
              A Jewelery E-commerse website was built with all features,
              like, searching for the product, adding to cart, Login-Sign Up ,
              Making Purchase and payment. Team of 4.</p>
            <div className="project-tech-stack">HTML || CSS || JavaScript </div>
            <Buts>
              <a href="https://spiffy-sunburst-9a48b4.netlify.app/" className="project-deployed-link">
                <ThemeBut>Visit</ThemeBut>
              </a>
              <a href="https://github.com/vgoutham786/Caratlane-Clone" className="project-github-link">
                <ThemeBut>Source</ThemeBut>
              </a>
            </Buts>
          </Proj>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container className="project-card">
        <Grid xs={12} md={6}>
          <Img>
            <img
              src="https://i.ibb.co/CJjywbh/Gadgets360.png"
              alt="gadget360"
            />
          </Img>
        </Grid>
        <Grid xs={12} md={6}>
          <Proj>
            <h2 className="project-title">Gadgets360 Clone</h2>
            <p className="project-description">
              A Gadgets E-commerse website was built with all features,
              like, searching for the product, adding to cart, Login-Sign Up ,
              Making Purchase and payment.
            </p>
            <div className="project-tech-stack">HTML || CSS || JavaScript || Node || Express || MongoDB</div>
            <Buts>
              <a href="https://eloquent-profiterole-370e4d.netlify.app" className="project-deployed-link">
                <ThemeBut>Visit</ThemeBut>
              </a>
              <a href="https://github.com/vgoutham786/Gadgets360-Clone" className="project-github-link">
                <ThemeBut>Source</ThemeBut>
              </a>
            </Buts>
          </Proj>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container className="project-card">
        <Grid xs={12} md={6}>
          <Img>
            <img src="https://i.ibb.co/54Bx2vM/pepperfry.png" alt="pepperfry" />
          </Img>
        </Grid>
        <Grid xs={12} md={6}>
          <Proj style={{ textAlign: "left" }}>
            <h2 className="project-title">Pepperfry Clone</h2>
            <p className="project-description">
              A Home-Decor E-commerse website was built with all features,
              like, adding to cart, Login-Sign Up ,
              Making Purchase and payment.
            </p>
            <div className="project-tech-stack">HTML || CSS || JavaScript </div>
            <Buts>
              <a href="https://chipper-phoenix-bc8f9a.netlify.app" className="project-deployed-link">
                <ThemeBut>Visit</ThemeBut>
              </a>
              <a href="https://github.com/vgoutham786/Pepperfry-Clone" className="project-github-link">
                <ThemeBut>Source</ThemeBut>
              </a>
            </Buts>
          </Proj>
        </Grid>
      </Grid>
      <br />
      <br />

      <Grid container className="project-card">
        <Grid xs={12} md={6}>
          <Img>
            <img src="https://i.ibb.co/54Bx2vM/pepperfry.png" alt="pepperfry" />
          </Img>
        </Grid>
        <Grid xs={12} md={6}>
          <Proj style={{ textAlign: "left" }}>
            <h2 className="project-title">Pepperfry Clone</h2>
            <p className="project-description">
              A Home-Decor E-commerse website was built with all features,
              like, adding to cart, Login-Sign Up ,
              Making Purchase and payment.
            </p>
            <div className="project-tech-stack">HTML || CSS || JavaScript </div>
            <Buts>
              <a href="https://chipper-phoenix-bc8f9a.netlify.app" className="project-deployed-link">
                <ThemeBut>Visit</ThemeBut>
              </a>
              <a href="https://github.com/vgoutham786/Pepperfry-Clone" className="project-github-link">
                <ThemeBut>Source</ThemeBut>
              </a>
            </Buts>
          </Proj>
        </Grid>
      </Grid>
      <br />
      <br />

    </Cont>
  );
};

export default Projects;

const Proj = styled.div`
  width: 80%;
  height: 100%;
  margin-left: 8%;
  padding-right: 5%;
  text-align: left;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
const Buts = styled.div`
  display: flex;
  padding: 20px 0;
  gap: 30px;
  justify-content: right;
`;
const Cont = styled.div`
  width: 80%;
  margin: auto;
  padding: 3% 10% 8%;
  background-color: rgb(45, 46, 50);
  display: flex;
  flex-direction: column;
  gap: 25px;
  > * {
    transition: all 500ms ease;
    :hover {
      //transform: scale(1.02);
      transition: all 500ms ease;
    }
  }
`;
const Img = styled.div`
  > img {
    width: 100%;
  }
`;
