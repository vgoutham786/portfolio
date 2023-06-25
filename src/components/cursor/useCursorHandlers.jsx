import { useContext, useCallback } from "react";
import { CursorContext } from "./CursorContextProvider";
import isTouchDevice from "./isTouchDevice";

export const useCursorHandlers = (options = {}) => {
  const [cursor, setCursor] = useContext(CursorContext);
  //console.log(options, "Opt");
  const toggleCursor = () => {
    setCursor((p) => !p);
  };

  const onMouseEnter = useCallback((event) => {
    if (options.onMouseEnter) {
      options.onMouseEnter(event);
    }
    toggleCursor();
  }, []);

  const onMouseLeave = useCallback((event) => {
    if (options.onMouseLeave) {
      options.onMouseLeave(event);
    }
    toggleCursor();
  }, []);
  if (isTouchDevice) {
    return options;
  }
  return { onMouseEnter, onMouseLeave };
};
