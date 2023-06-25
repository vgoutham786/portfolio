import React, { createContext, useState } from "react";

export const CursorContext = createContext();

export const CursorContextProvider = ({ children }) => {
  const [cursor, setCursor] = useState(false);

  return (
    <CursorContext.Provider value={[cursor, setCursor]}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
