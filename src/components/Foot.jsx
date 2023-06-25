import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MailIcon from "@material-ui/icons/Mail";
import { useCursorHandlers } from "./cursor/useCursorHandlers";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Foot = () => {
  const cursorHandlers = useCursorHandlers();
  const theme = useTheme();
  //const matches = useMediaQuery(theme.breakpoints.up("md"));
  const small = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Footer {...cursorHandlers}>
      <a id="contact-linkedin"
        href="https://www.linkedin.com/in/goutham-devreddy/"
        aria-label="LinkedIn"
      >
        <LinkedInIcon
          style={{
            width: small ? "40px" : "20px",
            height: small ? "40px" : "20px",
          }}
        />
      </a>
      <a href="https://github.com/vgoutham786" aria-label="Git" id="contact-github">
        <GitHubIcon
          style={{
            width: small ? "40px" : "20px",
            height: small ? "40px" : "20px",
          }}
        />
      </a>
      <a href="mailto:vgoutham786@gmail.com" aria-label="mail">
        <MailIcon
          style={{
            width: small ? "40px" : "20px",
            height: small ? "40px" : "20px",
          }}
        />
      </a>
      <p>
        Made With{" "}
        <FavoriteIcon
          style={{
            width: small ? "40px" : "20px",
            height: small ? "40px" : "20px",
          }}
        />
      </p>
    </Footer>
  );
};

export default Foot;

const Footer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  margin: 50px auto 0;
  padding-bottom: 30px;
  * {
    display: flex;
    gap: 10px;
  }
  > * {
    align-items: center;
    padding: 5px 10px;
  }
`;
