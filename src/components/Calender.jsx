import React from "react";
import ReactGitHubCalendar from "react-ts-github-calendar";
import { useCursorHandlers } from "./cursor/useCursorHandlers";

export default function Calender() {
  const cursorHandlers = useCursorHandlers();

  return (
    <div
      {...cursorHandlers}
      style={{
        color: "#e4e6eb",
        backgroundColor: "rgb(37, 38, 42)",
        fontWeight: "700",
        fontSize: "12px",
        Width: "auto",
        margin: "auto",
        padding: "50px",
        height: "auto",
        overflowX: "auto",
      }}
    >
      <h1 className="react-activity-calendar">My Git Activity</h1>
      <ReactGitHubCalendar
        userName="vgoutham786"
        tooltips
        global_stats={false}
      // responsive
      />


      <div id="contact"></div>
    </div>
  );
}




