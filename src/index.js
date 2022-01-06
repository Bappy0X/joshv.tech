import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Footer from "./components/footer"
import Contact from "./components/contact"
import signature from "./img/signature.svg"
import card from "./img/card.png"

ReactDOM.render(
	<div id="true-content">
		<Container>
			<Row className="vh-100 align-content-center">
				<Col md="6" className="text-center text-md-right mb-3">
					<div className="d-none d-md-block" style={{transformStyle: "preserve-3d", transform: "perspective(450px) rotateX(0deg) rotateY(10deg) scale3d(1, 1, 1)"}}>
						<img src={card} style={{height: "450px"}} alt="My Card"/>
					</div>
					<div className="d-xs-block d-md-none">
						<img src={card} style={{height: "300px"}} alt="My Card"/>
					</div>
				</Col>
				<Col className="text-center text-md-left align-self-center">
					<h1 className="accent primary mb-3">Joshua Vaughan</h1>
					<p>Hey There! Great to see you! I'm Josh - a Software Consultant and Developer from Cheshire. I work with a wide variety of different technologies on the day-to-day.<br/><br/>Coffee and the gym are amongst my greatest interests.<br/><br/>I currently attended college; studying Computer Science, Business Studies and Public Services.</p>
					<Contact/>
					<h5 class="mb-3"><a href="https://open.spotify.com/playlist/3Al07FeGVgigYo3IX9wuhO?si=dbfef3e582e54721" target="_blank" rel="noreferrer" className="primary" style={{textDecoration: "none"}}><i className="fab fa-spotify mr-2 text-success"></i>Gym Essentials Playlist</a></h5>
					<img src={signature} className="primary" style={{height: "50px"}} alt="My Signature"/>
				</Col>
			</Row>
		</Container>
		<Footer/>
	</div>,
	document.getElementById("content")
);