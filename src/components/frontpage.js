import { Container, Row, Col } from "react-bootstrap";

import Contact from "./contact";
import Socials from "./socials";

import card from "../img/card.png";
import signature from "../img/signature.svg";

export default function Footer() {
    return (
        <div id="header">
            <Container>
                <Row className="min-vh-100">
                    <Col md="6" className="text-center text-md-right my-3 mt-md-auto ">
                        <div className="d-none d-md-block" style={{transformStyle: "preserve-3d", transform: "perspective(450px) rotateX(0deg) rotateY(10deg) scale3d(1, 1, 1)"}}>
                            <img src={card} style={{height: "450px"}} alt="My Card"/>
                        </div>
                        <div className="d-xs-block d-md-none">
                            <img src={card} style={{height: "300px"}} alt="My Card"/>
                        </div>
                    </Col>
                    <Col md="6" className="text-center text-md-left mt-md-auto">
                        <h1 className="primary accent mb-3">Joshua Vaughan</h1>
                        <p>Hey There! Great to see you! I'm Josh - a Software Consultant and Developer from Cheshire. I work with a wide variety of different technologies on the day-to-day.<br/><br/>Coffee and the gym are amongst my greatest interests.<br/><br/>I currently attended college; studying Computer Science, Business Studies and Public Services.</p>
                        <p className="mb-0">Interested in working together? Let's talk!</p>
                        <Contact/>
                        <h5 class="mb-3"><a href="https://open.spotify.com/playlist/4fPtrJQWflMdV2gBGUCRU7?si=c141b47c34f64187" target="_blank" rel="noreferrer" className="primary" style={{textDecoration: "none"}}><i className="fab fa-spotify mr-2 text-success"></i>Morning Hip-Hop Playlist</a></h5>
                        <img src={signature} className="primary" style={{height: "50px"}} alt="My Signature"/>
                    </Col>
                    <Col xs="12" className="text-center mt-auto">
                        <Row noGutters>
                            <Col xs="12">
                                {/* TODO: Add smooth scrolling here */}
                                <h1><a href="#about-me" className="primary accent"><i className="fas fa-chevron-down"></i></a></h1>
                            </Col>
                            <Col xs="12" className="mt-auto mb-3">
                                <Row noGutters className="justify-content-center">
                                    <Socials/>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}