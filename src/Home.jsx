import React from "react"
import { Row, Col } from "react-bootstrap"

import card from "./img/card.png";

class Icon extends React.Component {
    render() {
        return(
            <Col xs="auto" className="mb-2">
                <a className={this.props.colour + " text-decoration-none"} href={this.props.url} target="_blank" rel="noreferrer"><i className={this.props.icon + " mr-1"}></i>{this.props.name}</a>
            </Col>
        )
    }
}

class Divider extends React.Component {
    render() {
        return(
            <Col xs="auto" className="mx-3 pb-2">
                <div className="divider"/>
            </Col>
        )
    }
}

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rotX: 0,
            rotY: 0
        }
        this.onMouseMove = this.onMouseMove.bind(this)
    }

    onMouseMove(e) {
        this.setState({
            rotX: -(e.clientY-(window.innerHeight/2))/45,
            rotY: (e.clientX-(window.innerWidth/2))/45
        })
    }


    render() {
        return(
            <div id="header" onMouseMove={this.onMouseMove}>
                <Row className="min-vh-100 no-gutters">
                    <Col xs="12" className="text-center my-3 mt-auto">
                        <img src={card} alt="My Business Card" style={{height: "500px", transformStyle: "preserve-3d", transform: `perspective(500px) rotateX(${this.state.rotX}deg) rotateY(${this.state.rotY}deg) scale3d(1, 1, 1)`}}/>
                    </Col>
                    <Col xs="12" className="text-center mt-auto">
                        <Row className="no-gutters">
                            <Col xs="12" className="mt-auto mb-3">
                                <Row className="no-gutters justify-content-center">
                                    <Icon name="YouTube" icon="fab fa-youtube fa-fw" url="https://www.youtube.com/channel/UCgL7ZU52tlnWeV7JdJY3pzg" colour="text-muted"/>
                                    <Divider/>
                                    <Icon name="Instagram" icon="fab fa-instagram fa-fw" url="https://www.instagram.com/joshvtech/" colour="text-muted"/>
                                    <Divider/>
                                    <Icon name="Discord" icon="fab fa-discord fa-fw" url="https://discord.gg/FG7cxurrga" colour="text-muted" fullWidth={this.props.fullWidth}/>
                                    <Divider/>
                                    <Icon name="GitHub" icon="fab fa-github fa-fw" url="https://github.com/Bappy0X" colour="text-muted" fullWidth={this.props.fullWidth}/>
                                    <Divider/>
                                    <Icon name="Dribbble" icon="fab fa-dribbble fa-fw" url="https://dribbble.com/joshvtech" colour="text-muted" fullWidth={this.props.fullWidth}/>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}