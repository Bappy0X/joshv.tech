import { Col } from "react-bootstrap";

export default function MediaIcon({name}) {
    return (
        <Col xs="auto">
            <p className="text-muted mb-0">{name}</p>
        </Col>
    )
}