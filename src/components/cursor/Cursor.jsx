import React, { useContext, useState, useEffect } from "react";
import useMousePosition from "./useMousePosition";
import { CursorContext } from "./CursorContextProvider";
import isTouchDevice from "./isTouchDevice";

export const Cursor = ({ p, s, v }) => {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);
  const [isVisible, setIsVisible] = useState(false);

  //console.log(p, s);
  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (isTouchDevice) {
    return null;
  }
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
        mixBlendMode: "difference",
        backgrounClip: "text",
        color: "transparent",
        overflow: "hidden",
        background: `radial-gradient(circle 20px at var(--x,-20) var(--y,0), ${s} 99%,${p} 100%)`,
      }}
    >
      <svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          pointerEvents: "none",
          left: clientX,
          top: clientY,
          transform: `translate(-50%, -50%) scale(${cursor ? v : 2})`,
          stroke: cursor ? `${p}` : `${s}`,
          strokeWidth: 1,
          fill: cursor ? `${s}` : `${p}`,
          transition: "transform 1s cubic-bezier(.29,.75,.5,1.28)",

          // TODO: extra check on clientX needed here
          // because mouseleave event not always firing
          // when slowly exiting left side of browser
          opacity: isVisible && clientX > 1 ? 1 : 0,
        }}
      >
        <circle cx="25" cy="25" r="8" />
      </svg>
    </div>
  );
};
