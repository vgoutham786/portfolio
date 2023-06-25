import "./App.css";
import { useState } from "react";
import { useCursorHandlers } from "./components/cursor/useCursorHandlers";
import { CursorContextProvider } from "./components/cursor/CursorContextProvider";
import MockApp from "./components/MockApp";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {
  const [primary, setPrimary] = useState("black");
  const [secondary, setSecondary] = useState("white");
  const [v, setV] = useState(0);
  const [immersive, setImmersive] = useState(true);
  // const [color, setColor] = useState(true);

  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className="App">
      <div id="home"></div>
      {/* <p>
        {immersive ? "Dont wan't Torch, Turn me Off" : "Turn me on for Torch"}
      </p>
      <Toggle set={setImmersive} /> */}

      {immersive && small ? (
        <CursorContextProvider>
          <MockApp
            v={v}
            setV={setV}
            secondary={secondary}
            setSecondary={setSecondary}
            primary={primary}
            setPrimary={setPrimary}
            setImmersive={setImmersive}
          />
        </CursorContextProvider>
      ) : (
        <CursorContextProvider>
          <MockApp
            v={0}
            setV={setV}
            secondary={secondary}
            setSecondary={setSecondary}
            primary={primary}
            setPrimary={setPrimary}
          />
        </CursorContextProvider>
      )}
      {/* {immersive ? alert("You are advised") : null} */}
    </div>
  );
}

export default App;

const Top = () => {
  const cursorHandlers = useCursorHandlers();
  return (
    <button
      type="button"
      style={{ padding: "1rem", fontSize: "25px", fontWeight: "900" }}
      {...cursorHandlers}
    ></button>
  );
};
