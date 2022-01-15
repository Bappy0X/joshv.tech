import { Col } from "react-bootstrap";

export default function Icon({name, icon, url, colour="primary", fullWidth=false}) {
    return (
        <Col xs={fullWidth ? "12" :"auto"}>
            <a className={colour} href={url} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}><i className={icon + " mr-1"}></i> {name}</a>
        </Col>
    )
}