import React from "react"
import { Col } from "react-bootstrap";

import Icon from "./Icon"
import Divider from "./Divider"

import odysee from "../img/odysee.svg";

export default class Socials extends React.Component {
    render() {
        let divider;
        if (this.props.fullWidth) {
            divider = null
        }
        else {
            divider = <Divider/>
        }

        return (
            <>
                <Icon name="GitHub" icon="fab fa-github fa-fw" url="https://github.com/Bappy0X" colour="text-muted" fullWidth={this.props.fullWidth}/>
                {divider}
                <Icon name="LinkedIn" icon="fab fa-linkedin fa-fw" url="https://www.linkedin.com/in/joshua-vaughan/" colour="text-muted" fullWidth={this.props.fullWidth}/>
                {divider}
                <Icon name="Discord" icon="fab fa-discord fa-fw" url="https://discord.com/FG7cxurrga" colour="text-muted" fullWidth={this.props.fullWidth}/>
                {divider}
                <Icon name="Dribbble" icon="fab fa-dribbble fa-fw" url="https://dribbble.com/joshv-tech" colour="text-muted" fullWidth={this.props.fullWidth}/>
                {divider}
                {/* <Icon name="YouTube" icon="fab fa-youtube fa-fw" url="https://www.youtube.com/channel/UCyAKeyc9I7gYRhzOV0ZadSg" colour="text-muted"/>
                <Divider/> */}
                <Icon name="WhatsApp" icon="fab fa-whatsapp fa-fw" url="https://wa.me/447518387243" colour="text-muted" fullWidth={this.props.fullWidth}/>
                {divider}
                <Col xs="auto">
                    <a className="text-muted text-decoration-none" href="https://odysee.com/@Bappy0X:6" target="_blank" rel="noreferrer"><img src={odysee} alt="Odysee" className="mr-1 fa-fw" style={{height: "1rem"}}/>Odysee</a>
                </Col>
                {divider}
                <Icon name="Goodreads" icon="fab fa-goodreads-g fa-fw" url=" https://www.goodreads.com/josh-vaughan" colour="text-muted" fullWidth={this.props.fullWidth}/>
            </>
        )
    }
}