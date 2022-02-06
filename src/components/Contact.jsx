import { Row } from "react-bootstrap";

import Divider from "./Divider"
import Icon from "./Icon";

export default function Contact() {
    return (
        <div className="mb-3">
            <Row noGutters className="justify-content-center justify-content-md-start">
                <Icon name="Call" icon="fas fa-phone" url="tel:07518387243"/>
                <Divider/>
                <Icon name="Email" icon="fas fa-envelope" url="mailto:me@joshv.tech"/>
            </Row>
        </div>
    )
}