import { Row } from "react-bootstrap";

import Divider from "./divider"
import Icon from "./icon";

export default function Contact() {
    return (
        <div className="mb-3">
            <p className="mb-0">Interested in working together? Let's talk!</p>
            <Row noGutters className="justify-content-center justify-content-md-start">
                <Icon name="Call" icon="fas fa-phone" url="tel:07518387243"/>
                <Divider/>
                <Icon name="Email" icon="fas fa-envelope" url="mailto:me@joshv.tech"/>
            </Row>
        </div>
    )
}