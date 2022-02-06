import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import FrontPage from "./components/Frontpage"
import Footer from "./components/Footer"
import Divider from "./components/Divider";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

ReactDOM.render(
	<>
		<FrontPage/>
		<div id="body">
			<div id="about-me" className="py-3">
				<Container>
					<h1 className="my-3 text-center font-weight-bold">ALL ABOUT ME</h1>
					<h1>Languages &amp; Skills</h1>
					<Row>
						<Col className="text-right">
							<h2 className="mb-0">Python</h2>
						</Col>
						<Col>
							<p>Python... Projects</p>
						</Col>
					</Row>
					<Row>
						<Col className="text-right">
							<h2 className="mb-0">Javascript</h2>
						</Col>
						<Col>
							<p>Javascript... Projects, frameworks etc; Vue, React</p>
						</Col>
					</Row>
					<Row>
						<Col className="text-right">
							<h2 className="mb-0">Rust</h2>
						</Col>
						<Col>
							<p>Rust... Projects</p>
						</Col>
					</Row>
					{/* <h1>Certifications</h1>
					<Row>
						<Col>
							<Card>
								<Card.Img variant="top" style={{width: "150px"}} className="mx-auto" src="https://whatemoji.org/wp-content/uploads/2020/07/Question-Mark-Emoji.png"/>
								<Card.Body>
									<Card.Title>
										<h4>Consultant Related?</h4>
									</Card.Title>
									<Card.Text>
										<p>I'm working on it...</p>
									</Card.Text>
								</Card.Body>
								<Card.Body>
									<Card.Link className="primary" href="#">View Certificate <i className="fas fa-external-link-alt"></i></Card.Link>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card>
								<Card.Img variant="top" style={{width: "150px"}} className="mx-auto" src="https://whatemoji.org/wp-content/uploads/2020/07/Question-Mark-Emoji.png"/>
								<Card.Body>
									<Card.Title>
										<h4>UI/UX or Marketing</h4>
									</Card.Title>
									<Card.Text>
										<p>I'm working on it...</p>
									</Card.Text>
								</Card.Body>
								<Card.Body>
									<Card.Link className="primary" href="#">View Certificate <i className="fas fa-external-link-alt"></i></Card.Link>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card>
								<Card.Img variant="top" style={{width: "150px"}} className="mx-auto" src="https://whatemoji.org/wp-content/uploads/2020/07/Question-Mark-Emoji.png"/>
								<Card.Body>
									<Card.Title>
										<h4>Software Engineering</h4>
									</Card.Title>
									<Card.Text>
										<p>I'm working on it...</p>
									</Card.Text>
								</Card.Body>
								<Card.Body>
									<Card.Link className="primary" href="#">View Certificate <i className="fas fa-external-link-alt"></i></Card.Link>
								</Card.Body>
							</Card>
						</Col>
					</Row> */}
					{/* What I'm good at, https://dribbble.com/shots/17281813-NetSpring-Solutions */}
					<h1>Education</h1>
					<Row>
						<Col xs="12" md="6" className="text-center text-md-right">
							<h2 className="mb-0">What's Next?</h2>
							<p className="text-muted">(Present-Who Knows When)</p>
						</Col>
						<Col>
							<p>What's next for me? What's my next step?</p>
							<p className="mb-0">Let's lay my options on the table... Can you be part of my next step?</p>
							<Contact/>
						</Col>
					</Row>
					<Row className="my-3">
						<Col className="my-3"/>
						<Divider/>
						<Col className="my-3"/>
					</Row>
					<Row>
						<Col xs="12" md="6" className="text-center text-md-right">
							<h3 className="mb-0">College</h3>
							<p className="text-muted">(2020-2022)</p>
						</Col>
						<Col>
							<ul className="list-unstyled">
								<li>BTEC L3 Subsidiary Diploma in Public Services (Predicted D*)</li>
								<li>A-Level AQA Business Studies (Predicted B)</li>
								<li>A-Level OCR Computer Science (Predicted B)</li>
							</ul>
						</Col>
					</Row>
					<Row className="my-3">
						<Col className="my-3"/>
						<Divider/>
						<Col className="my-3"/>
					</Row>
					<Row>
						<Col xs="12" md="6" className="text-center text-md-right">
							<h4 className="mb-0">High School</h4>
							<p className="text-muted">(2015-2020)</p>
						</Col>
						<Col>
							<ul className="list-unstyled">
								<li>Computer Science (7)</li>
								<li>Art and Design (Photography) (7)</li>
								<li className="text-muted">+ 6 more</li>
							</ul>
						</Col>
					</Row>
					<h3>Interests</h3>
					{/* 🏋️Exercise ☕Coffee 📚Study 💻Work */}
					{/*  U+FE0F U+200D U+2642 U+FE0F */}
				</Container>
			</div>
			<Portfolio/>
			<div className="bg-accent py-3">
				{/* <Container>
					<h1>Project Portfolio</h1>
					<ul>
						<li>FBALeads</li>
						<li>230 Sqn. Website</li>
						<li>Growpay</li>
						<li>GaultonFitness</li>
						<li>Boris Homemade Cakes</li>
						<li>Scraper Application (Modern-Amazon?)</li>
						<li>Rust Application (Rust-Quiz?)</li>
						<li>Your Project</li>
					</ul>
				</Container> */}
			</div>
			{/* <div className="py-3">
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
			</div> */}
		</div>
		<Footer/>
	</>,
	document.getElementById("content")
);