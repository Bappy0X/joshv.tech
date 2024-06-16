import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "react-bootstrap"
import { Fade } from "react-reveal"
import { Link } from "react-router-dom"

import logo from "./img/logo.png";

import PennySkips from "./img/PennySkips.jpg"
import Locked from "./img/Locked.png"

import Barbertini from "./img/Barbertini.jpg"
import GaultonFitness from "./img/GaultonFitness.jpg"
import Fireless from "./img/Fireless.jpg"
import RAFAC from "./img/RAFAC.jpg"
import HollySumnerTherapy from "./img/HollySumnerTherapy.jpg"
import FBALeadsUK from "./img/FBALeadsUK.jpg"

class ProjectCard extends React.Component {
    render() {
        return(
            <Col xs={12} md={6} lg={4} className="my-3">
                <Fade left delay={this.props.fade}>
                    <div className="text-center">
                        <a href={this.props.url} target="_blank" rel="noreferrer">
                            <img src={this.props.img} alt="Portfolio" className="w-75 rounded-lg"/>
                        </a>
                        <Row className={`no-gutters py-3 ${this.props.overlap && "mt--3"} px-3 bg-light rounded-xl position-relative`}>
                            <Col>
                                <h4 className="mb-0 font-weight-bold">{this.props.name}</h4>
                                { this.props.url ? <a href={this.props.url} target="_blank" rel="noreferrer" className="text-decoration-none text-primary">{this.props.url} <i className="fas fa-external-link-alt"/></a> : <p className="m-0 text-muted">Coming Soon...</p> }
                            </Col>
                        </Row>
                    </div>
                </Fade>
            </Col>
        )
    }
}

export default class Portfolio extends React.Component {
    render() {
        return(
            <>
                <Helmet>
                    <title>My Portfolio &bull; joshv.tech</title>
                </Helmet>
                <Container>
                    <Row className="mt-3">
                        <Col className="my-auto">
                            <h4 className="my-4"><Link to="/" className="text-muted text-decoration-none"><i className="fas fa-arrow-left text-muted"></i> Back to Home</Link></h4>    
                        </Col>
                        <Col xs="auto">
                        <Link to="/"><img src={logo} alt="My Logo" style={{height: "80px"}}/></Link>
                        </Col>
                        <Col className="d-none d-md-block"></Col>
                    </Row>
                    <Row>
                        <ProjectCard img={PennySkips} name="PennySkips" url="https://pennyskips.com/" overlap fade={150*0}/>
                        <ProjectCard img={Locked} name="CountyStream" overlap fade={150*0}/>
                        <ProjectCard img={Locked} name="???" overlap fade={150*0}/>
                    </Row>
                    <hr className="my-4"/>
                    <Row>
                        <ProjectCard img={Barbertini} name="Barbertini" url="https://barbertini.co.uk/" overlap fade={150*0}/>
                        <ProjectCard img={GaultonFitness} name="Gaulton Fitness" url="https://gaultonfitness.co.uk/" overlap fade={150*1}/>
                        <ProjectCard img={Fireless} name="Fireless Ltd" url="https://230rafac.co.uk/" overlap fade={150*2}/>
                        <ProjectCard img={RAFAC} name="Royal Air Force Air Cadets" url="https://230rafac.co.uk/" overlap fade={150*3}/>
                        <ProjectCard img={HollySumnerTherapy} name="Holly Sumner Therapy" url="https://hollysumnertherapy.com/" overlap fade={150*4}/>
                        <ProjectCard img={FBALeadsUK} name="FBALeadsUK" url="https://fbaleadsuk.com/" overlap fade={150*5}/>
                    </Row>
                    <hr className="my-4"/>
                </Container>
            </>
        )
    }
}