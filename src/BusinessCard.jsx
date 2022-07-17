import React from "react"
import { Helmet } from "react-helmet"
import { Row, Col } from "react-bootstrap"

import { MouseContext } from "./Layout"

import card from "./img/card.png";

export default class BusinessCard extends React.Component {
    static contextType = MouseContext

    render() {
        return(
            <>
                <Helmet>
                    <title>Business Card &bull; joshv.tech</title>
                </Helmet>
                <Row className="no-gutters my-3" onMouseMove={this.onMouseMove}>
                    <Col xs="12" className="text-center">
                        <img src={card} alt="My Business Card" style={{height: "500px", transformStyle: "preserve-3d", transform: `perspective(500px) rotateX(${this.context.rotX}deg) rotateY(${this.context.rotY}deg) scale3d(1, 1, 1)`}}/>
                    </Col>
                </Row>
            </>
        )
    }
}