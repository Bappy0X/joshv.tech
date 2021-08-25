import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Footer from "./components/footer"

import signature from "./img/signature.svg"
import card from "./img/card.png"

ReactDOM.render(
	<div id="true-content">
		<Container>
			<Row className="vh-100 align-content-center">
				<Col className="text-center text-sm-right mb-3">
					<div style={{transformStyle: "preserve-3d", transform: "perspective(400px) rotateX(0deg) rotateY(10deg) scale3d(1, 1, 1)"}}>
						<img src={card} style={{height: "400px"}} alt="My Card"/>
					</div>
				</Col>
				<Col className="text-center text-sm-left align-self-center">
					<h1 className="accent primary">Joshua Vaughan</h1>
					<p>Great to see you! I'm Josh - a developer from England. I have experience working with multiple technologies, I also love coffee and the gym.<br/>I'm also currently attended college; studying Computer Science, Business Studies and Public Services.</p>
					<h4><a href="https://open.spotify.com/playlist/3Al07FeGVgigYo3IX9wuhO?si=dbfef3e582e54721" target="_blank" rel="noreferrer" className="primary" style={{textDecoration: "none"}}><i className="fab fa-spotify mr-2 text-success"></i>Gym Essentials Playlist</a></h4>
					<img src={signature} className="primary" style={{height: "50px"}} alt="My Signature"/>
				</Col>
			</Row>
		</Container>
		<Footer/>
	</div>,
	document.getElementById("content")
);