const socialMedias = require("./json/socialMedias.json")

function SocialMediaIcon({ name, icon, url }) {
    return (
        <a href={url} title={name}><img src={icon} alt={name} style={{height: "50px"}}/></a>
    )
}

export default function Footer() {
    return (
        <div id="footer" className="row text-center" style={{backgroundColor: "var(--my-red)", borderRadius: "24px 24px 0 0", padding: "25px 0"}}>
            <div className="col">
                <h1 className="mb-1">joshv.tech</h1>
            </div>
            <div className="col">
                {
                    socialMedias.map(socialMedia => {
                        return <SocialMediaIcon name={socialMedia.name} icon={socialMedia.icon} url={socialMedia.url}/>
                    })
                }
            </div>
        </div>
    )
}