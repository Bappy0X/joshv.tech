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
					<p>Test</p>
					<img src={signature} className="primary" style={{height: "50px"}} alt="My Signature"/>
				</Col>
			</Row>
		</Container>
		<Footer/>
	</div>,
	document.getElementById("content")
);