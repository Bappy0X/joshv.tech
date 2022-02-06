import { Container, Row, Col } from "react-bootstrap"

import Socials from "./Socials"
import Icon from "./Icon"

export default function Footer() {
    return (
        <div id="footer" className="py-3">
            <Container>
                <Row>
                    <Col xs="4">
                        <h2 className="accent">joshv.tech</h2>
                        <p>Keep it real.</p>
                        <p>Created with <i className="fas fa-heart primary"></i> by Joshua Vaughan (<a href="https://joshv.tech/" className="primary" target="_blank" rel="noreferrer">joshv.tech</a>)</p>
                    </Col>
                    <Col xs="4">
                        <h3 className="font-weight-light">It's Open Source!</h3>
                        <p className="m-0">Check out the source code for this site on GitHub:</p>
                        <Row className="no-gutters">
                            <Icon name="GitHub" icon="fab fa-github" colour="text-muted" url="https://github.com/Bappy0X/joshv.tech"/>
                        </Row>
                    </Col>
                    <Col xs="4">
                        <h3 className="font-weight-light">Keep in Touch!</h3>
                        <Row>
                            <Socials fullWidth={true}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}