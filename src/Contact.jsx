import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "react-bootstrap"

class ContactLink extends React.Component {
    render() {
        return(
            <h1><i className={`fas fa-${this.props.icon} fa-fw text-primary`}/> <a href={this.props.url} className="text-muted text-decoration-none" target="_blank" rel="noreferrer">{this.props.text}</a></h1>
        )
    }
}

export default class Contact extends React.Component {
    render() {
        return(
            <>
                <Helmet>
                    <title>Contact Me &bull; joshv.tech</title>
                </Helmet>
                <Container>
                    <Row>
                        <Col xs="auto" className="mx-auto">
                            <ContactLink icon="envelope" url="mailto:me@joshv.tech" text="me@joshv.tech"/>
                            <ContactLink icon="phone-alt" url="tel:+44 1625 402820" text="+44 1625 402820"/>
                            <ContactLink icon="map-pin" url="https://goo.gl/maps/dWThyMtiGoZQcdQ17" text="Silk Point, Macclesfield, SK10 2BB"/>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}