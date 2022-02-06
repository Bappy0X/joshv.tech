import React from "react"
import { Container, Row, Col } from "react-bootstrap"

class Title extends React.Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col xs="auto">
                        <h3 className="mb-0">{this.props.name}</h3>
                    </Col>
                    <Col className="my-auto">
                        <div style={{borderBottom: "1px solid grey"}}></div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default class Portfolio extends React.Component {
    render() {
        return(
			<div className="bg-accent py-3">
                <h1 className="my-3 text-center font-weight-bold">MY RECENT PROJECTS</h1>
                <Title name="FBALeads"/>
                <Title name="230 Sqn. RAFAC"/>
                <Title name="Growpay"/>
                <Title name="GaultonFitness"/>
            </div>
        )
    }
}