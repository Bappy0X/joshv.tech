import React from "react"
import { Helmet } from "react-helmet"
import { Row, Col } from "react-bootstrap"

import { MouseContext } from "./Layout"

import card from "./img/card.png";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";

class ContactLink extends React.Component {
    render() {
        return(
            <h1><i className={`fas fa-${this.props.icon} fa-fw text-primary`}/> <a href={this.props.url} className="text-muted text-decoration-none" target="_blank" rel="noreferrer">{this.props.text}</a></h1>
        )
    }
}

export default class BusinessCard extends React.Component {
    static contextType = MouseContext

    render() {
        return(
            <>
                <Helmet>
                    <title>Home &bull; joshv.tech</title>
                </Helmet>
                <Row className="no-gutters mt-5" onMouseMove={this.onMouseMove}>
                    <Col xs="12" xl="4" className="ml-auto text-center">
                        <img src={card} alt="My Business Card" style={{height: "500px", transformStyle: "preserve-3d", transform: `perspective(500px) rotateX(${this.context.rotX}deg) rotateY(${this.context.rotY}deg) scale3d(1, 1, 1)`}}/>
                    </Col>
                    <Col xs="10" md="auto" xl="3" className="my-5 my-xl-auto mx-auto ml-xl-0 text-left ">
                        <img src={logo} alt="My Logo" style={{height: "150px"}} className="d-none d-xl-block"/>
                        <hr className="my-4"/>
                        <p className="text-primary">Your partner in Websites, Software, Teams, AI or anything tech!</p>
                        <ContactLink icon="envelope" url="mailto:me@joshv.tech" text="me@joshv.tech"/>
                        <ContactLink icon="phone-alt" url="tel:+44 7518 387243" text="+44 7518 387243"/>
                        <h3 className="mt-4"><Link to="/my-portfolio" className="text-primary text-decoration-none">View My Portfolio <i className="fas fa-arrow-right text-primary"></i></Link></h3>
                    </Col>
                </Row>
            </>
        )
    }
}