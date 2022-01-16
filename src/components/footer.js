import { Container, Row, Col } from "react-bootstrap"

import Socials from "./socials"

export default function Footer() {
    return (
        <div id="footer" className="py-3">
            <Container>
                <Row>
                    <Col xs="6">
                        <h2 className="accent">joshv.tech</h2>
                        <p>Keep it real.</p>
                        <p>Created with <i className="fas fa-heart"></i> by Joshua Vaughan (<a href="https://joshv.tech/" className="primary" target="_blank" rel="noreferrer">joshv.tech</a>)</p>
                    </Col>
                    <Col xs="6">
                        <h3>Keep in Touch!</h3>
                        <Socials/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}