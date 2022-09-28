import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "react-bootstrap"

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