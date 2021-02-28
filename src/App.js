import React from "react";

import "./style.css";

import FrontPage from "./frontPage";
import Skills from "./skills";
import Sidebar from "./sidebar";

export default function App() {
  return (
    <>
      <Sidebar/>
      <div id="trueContent">
        <FrontPage/>
        <button id="sidebarToggle">Togg</button>
        <Skills/>
      </div>
    </>
  );
}