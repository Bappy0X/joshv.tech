import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "react-bootstrap"
import { Fade } from "react-reveal"

import GaultonFitness from "./img/GaultonFitness.png"
import MoveNJunkPro from "./img/MoveNJunkPro.png"
import RAFAC from "./img/RAFAC.png"
import FBALeadsUK from "./img/FBALeadsUK.png"
import FBALeadsUKApp from "./img/FBALeadsUKApp.png"
import FBAMultiTool from "./img/FBAMultiTool.png"

// class ProjectCard extends React.Component {
//     render() {
//         return(
//             <Col xs={12} md={6} lg={4} className="my-3">
//                 <Fade left delay={this.props.fade}>
//                     <div className="text-center">
//                         <a href={this.props.url} target="_blank" rel="noreferrer">
//                             <img src={this.props.img} className="w-75 rounded-lg"/>
//                         </a>
//                         <Row className={`no-gutters py-2 ${this.props.overlap && "mt--3"} px-3 bg-light rounded-xl position-relative`}>
//                             <Col>
//                                 <h4 className="mb-0 font-weight-bold">{this.props.name}</h4>
//                                 <p className="mb-0 text-muted">{this.props.clientName}</p>
//                                 <a href={this.props.url} target="_blank" rel="noreferrer" className="text-primary">{this.props.url} <i className="fas fa-external-link-alt"/></a>
//                             </Col>
//                             {/* <Col xs="auto" className="my-auto">
//                                 <a href="" className="h3 text-primary">
//                                     <i className="fas fa-info-circle"/>
//                                 </a>
//                             </Col> */}
//                         </Row>
//                     </div>
//                 </Fade>
//             </Col>
//         )
//     }
// }

export default class Services extends React.Component {
    render() {
        return(
            <>
                <Helmet>
                    <title>My Services &bull; joshv.tech</title>
                </Helmet>
                <Container>
                    <Row>
                        <Col xs="auto" className="mx-auto">
                            <p><i className="fas fa-tools fa-fw text-warning"/> This section is in development... Here's a summary of what I have to offer!</p>
                            <h1>IT Support</h1>
                            <h1>Device Repair</h1>
                            <h1>Website Development</h1>
                            <h1>Web App Development</h1>
                            <h1>Mobile App Development</h1>
                            <h1>Desktop App Development</h1>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}