import React from "react";

import "./style.css";

import FrontPage from "./frontPage";
import Skills from "./skills";
import Sidebar from "./sidebar";

export default function App() {
  return (
    <>
      <Sidebar/>
      <div id="trueContent" className="pl-sm-none">
        <FrontPage/>
        <button className="d-none d-md-block">Togg</button>
        <Skills/>
      </div>
    </>
  );
}