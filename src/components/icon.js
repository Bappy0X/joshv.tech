import { Col } from "react-bootstrap";

export default function Icon({name, icon, url, colour="primary"}) {
    return (
        <Col xs="auto">
            <a className={colour} href={url} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}><i className={icon + " mr-1"}></i> {name}</a>
        </Col>
    )
}