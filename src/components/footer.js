import { Container, Row, Col } from "react-bootstrap";

import MediaIcon from "./mediaIcon";

function Divider() {
    return (
        <Col xs="auto" className="mx-3">
            <div class="divider"></div>
        </Col>
    )
}

export default function Footer() {
    return (
        <Container className="fixed-bottom mb-3">
            <Row noGutters className="justify-content-center">
                <MediaIcon name="GitHub" icon="fab fa-github"/>
                <Divider/>
                <MediaIcon name="LinkedIn" icon="fab fa-linkedin"/>
                <Divider/>
                <MediaIcon name="Discord" icon="fab fa-discord"/>
                <Divider/>
                <MediaIcon name="Dribbble" icon="fab fa-dribbble"/>
                <Divider/>
                <MediaIcon name="YouTube" icon="fab fa-youtube"/>
            </Row>
        </Container>
    )
}