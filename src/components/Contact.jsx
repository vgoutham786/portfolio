import React, { useState } from "react";
import styled from "styled-components";
import { Head1 } from "./Box";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { green } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import VerticalAlignTopIcon from "@material-ui/icons/VerticalAlignTop";

import { useCursorHandlers } from "./cursor/useCursorHandlers";
import { ThemeBut } from "./Intro";
import { A } from "./Nav";
import emailjs from "emailjs-com";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const CssTextField = withStyles({
  root: {
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: green,
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderBottomColor: "red",
      },
      "&:hover fieldset": {
        borderBottomColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderBottomColor: "green",
      },
    },
  },
})(TextField);

const Contact = () => {
  const cursorHandlers = useCursorHandlers();
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");
  const [mail, setMail] = useState("");
  const [fail, setFail] = useState(false);
  const [sent, setSent] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const small = useMediaQuery(theme.breakpoints.up("sm"));

  const send = () => {
    console.log(sender, message, mail);
    if (sender !== "" && message !== "" && mail !== "") {
      emailjs
        .send(
          "service_atdkk9n",
          "template_wuxuouv",
          {
            from_name: sender + " and their Mail is " + mail,
            to_name: "Akshaykumar Purad",
            message: message,
          },
          "user_4CfIXSA4AsLef1BBHT2Fy"
        )
        .then(
          (result) => {
            setSent(true);
            setTimeout(() => {
              setSent(false);
            }, 5000);
            console.log(result);
            setSender("");
            setMessage("");
            setMail("");
          },
          (error) => {
            setFail(true);
            let x = setTimeout(() => {
              setFail(false);
            }, 5000);
            console.log(error);
          }
        );
    } else {
      alert("Please Fill in all fields");
    }
  };

  return (
    <>
      {sent && (
        <Sent {...cursorHandlers}>
          <h3>Mail Sent, Thank you for contacting.</h3>
        </Sent>
      )}
      {fail && (
        <Sent {...cursorHandlers}>
          <h3>Mail NOT Sent, Please try again.</h3>
        </Sent>
      )}
      <Grid
        container
        style={{ backgroundColor: "rgb(45,46,50)" }}
        {...cursorHandlers}
      >
        <Grid item xs={12} md={6}>
          <Fir>
            <Head1 style={{ fontSize: matches ? "30px" : "24px", lineHeight: matches ? "30px" : "30px" }}>
              So What are you building today ?
            </Head1>
            <Head1 style={{ fontSize: matches ? "30px" : "24px" }}>
              Lets Work Together! <span>Say Hi Here</span>
            </Head1>
            {/* <a
              aria-label="resume"
              href="https://www.canva.com/design/DAEm3tyjHKo/xnglkGq8clwvK4NJFBSNKQ/view?utm_content=DAEm3tyjHKo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            >
              <ThemeBut>
                {/* <DescriptionIcon color="black" /> }
                Download CV
              </ThemeBut>
            </a> */}
          </Fir>
        </Grid>
        <Grid item xs={12} md={6}>
          <Sec>
            <div id="contact">
              <small>Info</small>
              <div>
                <a href="tel:9902794633" id="contact-phone" style={{ fontSize: matches ? "30px" : "24px" }}>Call: +91-9902794633</a>
              </div>
              <div>
                <a href="mailto:vgoutham786@gmail.com" id="contact-email" style={{ fontSize: matches ? "30px" : "24px" }}>
                  Mail: vgoutham786@gmail.com
                </a>
              </div>
              <div>
                <a href="https://en.wikipedia.org/wiki/Davangere" style={{ fontSize: matches ? "30px" : "24px" }}>
                  Davangere, Karnataka, India
                </a>
              </div>
            </div>
            <div style={{ display: "none" }}>
              <label for="name"></label>
              <label for="email"></label>
              <label for="msg"></label>
            </div>
            {/* <FormControl style={{ color: "white" }}>
              <CssTextField
                id="name"
                label="Name"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
              />
              <CssTextField
                id="email"
                label="Email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <CssTextField
                id="msg"
                label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
            <ThemeBut style={{ width: "150px" }} onClick={send}>
              Send
            </ThemeBut> */}
          </Sec>
        </Grid>
      </Grid>
      <A href="#home">
        <button
          style={{
            padding: "0.6rem",
            position: "fixed",
            right: "10px",
            bottom: "0px",
          }}
          aria-label="toTop"
        >
          <VerticalAlignTopIcon />
        </button>
      </A>
    </>
  );
};

export default Contact;

const Sent = styled.div`
  position: fixed;
  right: 0;
  bottom: 100px;
  background-color: green;
  padding: 15px;
`;

const Buton = styled.button`
  width: auto;
  margin: -10px auto;
  padding: 12px 20px;
  background-color: darkgrey;
  color: black;
  align-items: center;
  font-size: 22px;
  display: flex;
  gap: 10px;
`;

const Fir = styled.div`
  width: 70%;
  margin: 2% auto ;
  height: 60vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: "left";
  > h1 {
    font-size: 25px;
    padding:8px 0px;
    margin:auto;
  }
`;

const Sec = styled.div`
  width: 70%;
  height: 60vh;
  margin: 2% auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: left;
  * {
    text-decoration: none;
    font-size:34px;
  }
  div {
    text-decoration: none !important;
    color: white;
  }
  > :nth-child(1) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 20px;
  }
  > :nth-child(2) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 15px;
    * {
      font-size: 18px;
    }
  }
`;

// (let g="service_vwr9zzc");
