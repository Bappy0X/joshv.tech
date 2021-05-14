import React from "react";

import Header from "./header"
import Footer from "./footer"

import Languages from "./languages"
import Experiences from "./experiences"
import Qualifications from "./qualifications"

export default function App() {
  return (
	<div className="text-light" style={{backgroundColor: "#242424"}}>
		<div className="container" style={{backgroundColor: "#282828"}}>
			<Header/>
			<div className="row px-3">
				<div className="col-12">
					<p style={{fontSize: "1.1rem"}}>Hey! My name's Josh.<br/>I'm an incredibly driven and inspired developer from Cheshire, in the United Kingdom.</p>
				</div>
				<div className="col-12 col-md-6 col-xl-4">
					<Languages/>
				</div>
				<div className="col-12 col-md-6 col-xl-4">
					<Experiences/>
				</div>
				<div className="col-12 col-md-6 col-xl-4">
					<Qualifications/>
				</div>
			</div>
			<Footer/>
		</div>
	</div>
  );
}