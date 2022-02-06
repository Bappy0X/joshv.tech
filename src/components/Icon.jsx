import { Col } from "react-bootstrap";

export default function Icon({name, icon, url, colour="primary", fullWidth=false}) {
    return (
        <Col xs={fullWidth ? "6" :"auto"}>
            <a className={colour + " text-decoration-none"} href={url} target="_blank" rel="noreferrer"><i className={icon + " mr-1"}></i>{name}</a>
        </Col>
    )
}