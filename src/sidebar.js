import React from "react"

import "./style.css"

function NavItem({ name, url}) {
    return(
        <li><a href={url}>{name}</a></li>
    )
}

function MediaIcon({ name, icon, url }) {
    return(
        <a href={url}><img src="https://cdn4.iconfinder.com/data/icons/social-media-2069/130/_Google-128.png" alt={name} className="fa-fw" style={{fontSize: "2.25rem"}}/></a>
    )
}

export default function Sidebar() {
    return(
        <>
            <div id="sidebar" className="px-4">
                <ul id="navbar">
                    <NavItem name="Home" url="/"/>
                    <NavItem name="About" url="/about"/>
                    <NavItem name="Skills" url="/skills"/>
                </ul>
                <div className="text-center">
                    <img src="" alt="my logo"/>
                </div>
                <div className="text-left">
                        <h1 className="display-4">joshv.tech</h1>
                        <h4 className="font-weight-light">Joshua Vaughan</h4>
                    <hr/>
                </div>
                <h2 className="font-weight-light">What I'm All About:</h2>
                <ul id="specialList" className="h2 font-weight-light">
                    <li>Problem Solving</li>
                    <li>Web Development</li>
                    <li>Applications</li>
                    <li>Dope Tech</li>
                </ul>
                <div id="footer" className="py-3 text-center">
                    <MediaIcon icon="" url=""/>
                    <MediaIcon icon="" url=""/>
                </div>
            </div>
        </>
    )
}