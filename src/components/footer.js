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
                <MediaIcon name="GitHub" icon="fab fa-github" url="https://github.com/Bappy0X"/>
                <Divider/>
                <MediaIcon name="LinkedIn" icon="fab fa-linkedin" url="https://www.linkedin.com/in/joshua-vaughan/"/>
                <Divider/>
                <MediaIcon name="Discord" icon="fab fa-discord" url="https://discord.com/FG7cxurrga"/>
                <Divider/>
                <MediaIcon name="Dribbble" icon="fab fa-dribbble" url="https://dribbble.com/joshv-tech"/>
                <Divider/>
                <MediaIcon name="YouTube" icon="fab fa-youtube" url="https://www.youtube.com/channel/UCyAKeyc9I7gYRhzOV0ZadSg"/>
            </Row>
        </Container>
    )
}