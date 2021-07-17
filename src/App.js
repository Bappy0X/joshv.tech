import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image"
//import Form from "react-bootstrap/Form"

import icon from "./img/Icon.jpg"
import banner from "./img/Banner.jpg"
import handwriting from "./img/Handwriting.png"

function SocialMediaIcon({ type="fab", name, url, size=2.8, title }) {
	return (
		<li className="d-inline-block mx-3 text-center">
			<a href={url} target="_blank" rel="noreferrer" className="text-decoration-none text-light">
				<Row>
					<Col>
						<i className={`${type} fa-${name} fa-fw`} style={{fontSize: `${size}rem`}}></i>
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<p>{title}</p>
					</Col>
				</Row>
			</a>
		</li>
	)
}

export default function App() {
	return (
		<div style={{backgroundColor: "#272D33", minHeight: "100vh"}}>
			<Container className="bg-dark">
				<div className="mb-3">
					<div style={{backgroundImage: `url('${banner}')`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "0 0 25px 25px", minHeight: "150px"}}></div>
					<Row className="px-5" style={{marginTop: "-100px"}}>
						<Col xs="12" md="6" className="text-center text-md-left">
							<Image src={icon} style={{height: "200px", boxShadow: "0 0 0 5px white"}} roundedCircle></Image>
						</Col>
						<Col className="d-md-flex text-center text-md-left text-light">
							<div className="align-self-md-center">
								<h1 className="mb-1 accent display-4">Joshua Vaughan</h1>
								<h4>joshv.tech</h4>
							</div>
						</Col>
					</Row>
				</div>

				<div className="mt-3 mb-5" style={{backgroundImage: `url('${handwriting}')`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "75px"}}></div>

				{/*<Form>
					<Form.Row>
						<Col className="text-right">
							<h2 className="accent text-light">I Would like to...</h2>
						</Col>
						<Col xs="3">
							<Form.Group controlId="Test">
								<Form.Control as="select">
									<option>Learn</option>
									<option>Work</option>
									<option>Chat</option>
								</Form.Control>
							</Form.Group>
						</Col>
						<Col>
							<h2 className="accent text-light">With You.</h2>
						</Col>
					</Form.Row>
				</Form>*/}

				<p className="text-light mb-3 text-center">This site is still in development! Please check back soon! For now, check out my social medias:</p>

				<div class="text-center text-light mb-5">
					<ul className="list-unstyled m-0">
						<SocialMediaIcon name={"linkedin"} url="https://www.linkedin.com/in/joshua-vaughan/" title="LinkedIn"/>
						<SocialMediaIcon name={"dribbble"} url="https://dribbble.com/Bappy0X" title="Dribbble"/>
						<SocialMediaIcon name={"discord"} url="https://discord.com/" title="Discord"/>
						<SocialMediaIcon name={"github"} url="https://github.com/Bappy0X" title="GitHub"/>
					</ul>
					<ul className="list-unstyled m-0">
						<SocialMediaIcon type={"fas"} name={"paper-plane"} size={1.4} url="mailto:bappy0x@gmail.com" title="Email Me"/>
						<SocialMediaIcon name={"skype"} url="skype:live:.cid.14a0de793b63b55a?chat" size={1.4} title="Skype"/>
						<SocialMediaIcon type={"fas"} name={"phone-alt"} size={1.4} url="tel:07518387243" title="Call Me"/>
					</ul>
				</div>

				<div className="py-5" style={{backgroundColor: "#1B2127", borderRadius: "25px 25px 0 0"}}>
					<h1 className="ml-5 text-light accent">joshv.tech</h1>
				</div>
			</Container>
		</div>
	);
}