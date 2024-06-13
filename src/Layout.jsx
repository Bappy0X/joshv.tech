import React from "react"
import { Outlet, NavLink } from "react-router-dom"
import { Row, Col } from "react-bootstrap"

class Icon extends React.Component {
    render() {
        return(
            <Col xs="auto" className="m-2">
                <a className="text-muted text-decoration-none" href={this.props.url} target="_blank" rel="noreferrer"><i className={this.props.icon + " mr-1 text-primary"}></i>{this.props.name}</a>
            </Col>
        )
    }
}

class Tab extends React.Component {
    render() {
        return(
            <Col xs="auto" className="mx-2 py-3 bg-secondary px-3">
                <NavLink to={this.props.url} className={({isActive}) => isActive ? "font-weight-bold text-decoration-none text-light" : "text-decoration-none text-light"}>{this.props.title}</NavLink>
            </Col>
        )
    }
}

const MouseContext = React.createContext("Mouse")

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rotX: 0,
            rotY: 0
        }
        this.onMouseMove = this.onMouseMove.bind(this)
    }

    // static contextType = MouseContext

    onMouseMove(e) {
        this.setState({
            rotX: -(e.clientY-(window.innerHeight/2))/45,
            rotY: (e.clientX-(window.innerWidth/2))/45
        })
    }

    render() {
        return(
            <Row className="no-gutters min-vh-100" onMouseMove={this.onMouseMove}>
                <Col xs={12} className="mb-auto"></Col>
                <Col xs={12} className="my-auto">
                    <MouseContext.Provider value={{rotX: this.state.rotX, rotY: this.state.rotY}}>
                        <Outlet/>
                    </MouseContext.Provider>
                </Col>
                <Col xs={12} className="mt-auto mb-3">
                    <Row className="no-gutters justify-content-center">
                        <Icon name="LinkedIn" icon="fab fa-linkedin-in fa-fw" url="https://www.linkedin.com/company/joshvtech/"/>
                        <Icon name="Instagram" icon="fab fa-instagram fa-fw" url="https://www.instagram.com/joshvtech/"/>
                        <Icon name="Discord" icon="fab fa-discord fa-fw" url="https://discord.gg/FG7cxurrga"/>
                        <Icon name="GitHub" icon="fab fa-github fa-fw" url="https://github.com/joshvtech"/>
                    </Row>
                    <p className="mb-0 text-center text-muted"><span className="text-primary">JOSHV.TECH</span> IS THE TRADING NAME OF <a href="https://find-and-update.company-information.service.gov.uk/company/14212089" target="_blank" rel="noreferrer" className="text-primary">VAUGHAN AND PARTNERS LIMITED</a> (Company No. <a href="https://find-and-update.company-information.service.gov.uk/company/14212089" target="_blank" rel="noreferrer" className="text-primary">14212089</a>)</p>
                </Col>
            </Row>
        )
    }
}

export { Layout, MouseContext }