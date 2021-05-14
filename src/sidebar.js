import React from "react"

import "./style.css"

function NavItem({ name, url}) {
    return(
        <li className="col text-center h3 my-2"><a href={url} className="text-light">{name}</a></li>
    )
}

function MediaIcon({ name, icon, url }) {
    return(
        <a href={url}><img src={icon} alt={name} title={name} className="fa-fw" style={{fontSize: "2.25rem"}}/></a>
    )
}

export default function Sidebar() {
    return(
        <>
            <div id="sidebar" className="px-4 d-none d-md-block">
                <ul id="navbar" className="row list-unstyled">
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
                <ul id="specialList" className="h2 font-weight-light list-unstyled">
                    <li>Problem Solving</li>
                    <li>Web Development</li>
                    <li>Applications</li>
                    <li>Dope Tech</li>
                </ul>
                <div id="footer" className="py-3 text-center">
                    <MediaIcon name="GitHub" icon="https://cdn4.iconfinder.com/data/icons/social-media-2069/130/_Social_Media_One-128.png" url="https://github.com/Bappy0X"/>
                    <MediaIcon name="Reddit" icon="https://cdn4.iconfinder.com/data/icons/social-media-2069/130/_Reddit-128.png" url="https://www.reddit.com/user/Bappy0X"/>
                    <MediaIcon name="Twitter" icon="https://cdn4.iconfinder.com/data/icons/social-media-2069/130/_Twitter-128.png" url="https://twitter.com/JoshB0X"/>
                    <MediaIcon name="Spotify" icon="https://cdn4.iconfinder.com/data/icons/social-media-2069/130/_Social_Media_Three-128.png" url="https://open.spotify.com/user/41vdh9nlazmrp4qgt6wpwik2b?si=IzXLQBMJRT69Y6rrE4_gbA"/>
                </div>
            </div>
        </>
    )
}