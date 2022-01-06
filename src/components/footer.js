import { Container, Row } from "react-bootstrap";

import Divider from "./divider"
import Icon from "./icon";

export default function Footer() {
    return (
        <Container className="fixed-bottom mb-3">
            <Row noGutters className="justify-content-center">
                <Icon name="GitHub" icon="fab fa-github" url="https://github.com/Bappy0X" colour="text-muted"/>
                <Divider/>
                <Icon name="LinkedIn" icon="fab fa-linkedin" url="https://www.linkedin.com/in/joshua-vaughan/" colour="text-muted"/>
                <Divider/>
                <Icon name="Discord" icon="fab fa-discord" url="https://discord.com/FG7cxurrga" colour="text-muted"/>
                <Divider/>
                <Icon name="Dribbble" icon="fab fa-dribbble" url="https://dribbble.com/joshv-tech" colour="text-muted"/>
                <Divider/>
                <Icon name="YouTube" icon="fab fa-youtube" url="https://www.youtube.com/channel/UCyAKeyc9I7gYRhzOV0ZadSg" colour="text-muted"/>
            </Row>
        </Container>
    )
}