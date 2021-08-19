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
                <MediaIcon name="GitHub" iconName="fab fa-github"/>
                <Divider/>
                <MediaIcon name="LinkedIn" iconName="fab fa-github"/>
                <Divider/>
                <MediaIcon name="Discord" iconName="fab fa-github"/>
                <Divider/>
                <MediaIcon name="Dribbble" iconName="fab fa-github"/>
            </Row>
        </Container>
    )
}