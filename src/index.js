import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import FrontPage from "./components/frontpage"
import Footer from "./components/footer"

ReactDOM.render(
	<>
		<FrontPage/>
		<div id="body">
			<div id="about-me" className="py-3">
				<Container>
					<h1>About Me</h1>
					<h3>Languages &amp; Skills</h3>
					{/* What I'm good at, https://dribbble.com/shots/17281813-NetSpring-Solutions */}
					<h3>Interests</h3>
					{/* 🏋️Exercise ☕Coffee 📚Study 💻Work */}
					{/*  U+FE0F U+200D U+2642 U+FE0F */}
					<h3>Plans</h3>
				</Container>
			</div>
			<div className="bg-accent py-3">
				<Container>
					<h1>Project Portfolio</h1>
					{/* Show projects in columns, https://dribbble.com/shots/16047759-Bloom-Blog-Redesign, https://dribbble.com/shots/17279212-NFT-Web-Exploration */}
					<ul>
						<li>FBALeads Website</li>
						<li>FBALeads App</li>
						<li>230 Sqn.</li>
						<li>Boris Homemade Cakes</li>
						<li>Scraper Application (Modern-Amazon?)</li>
						<li>Rust Application (Rust-Quiz?)</li>
						<li>Your Project</li>
					</ul>
				</Container>
			</div>
			<div className="py-3">
				<Container>
					<h1>Testimonials</h1>
				</Container>
			</div>
			<div className="bg-accent py-3">
				<Container>
					<h1>Your Project</h1>
				</Container>
			</div>
			<div className="py-3">
				<Container>
						<h1>?</h1>
				</Container>
			</div>
		</div>
		<Footer/>
	</>,
	document.getElementById("content")
);