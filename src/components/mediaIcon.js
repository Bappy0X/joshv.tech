import { Col } from "react-bootstrap";

export default function MediaIcon({name, icon}) {
    return (
        <Col xs="auto">
            <a className="text-muted mb-0" href="" style={{textDecoration: "none"}}><i className={icon}></i> {name}</a>
        </Col>
    )
}