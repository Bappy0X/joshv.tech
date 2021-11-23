import { Col } from "react-bootstrap";

export default function MediaIcon({name, icon, url}) {
    return (
        <Col xs="auto">
            <a className="text-muted mb-0" href={url} target="_blank" style={{textDecoration: "none"}}><i className={icon}></i> {name}</a>
        </Col>
    )
}