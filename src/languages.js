function LibraryCard({ name, icon }) {
    return (  
        <div className="mr-2">
            <img src={icon} alt={name} title={name} className="fa-fw"/>
        </div>
    )
}

function LanguageCard({ name, description, icon, libraries=[] }) {
    return (
        <div className="my-3">
            <div className="row no-gutters">
                <div className="col-auto">
                    <img src={icon} alt={name} className="fa-fw"/>
                </div>
                <div className="col pl-2">
                    <p className="m-0">{name}</p>
                </div>
            </div>
            <p className="m-0">{description}</p>
            <div className="row no-gutters">
                {
                    libraries.map(library => {
                        return <LibraryCard key={library.name} name={library.name} icon={library.icon}/>
                    })
                }
            </div>
        </div>
    )
}

export default function Languages() {
    const skills = [
        {
            name: "Python",
            icon: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
            description: "Python is by far my most favourite language.",
            libraries: [
                {name: "Flask", icon: "https://invenio-software.org/static/img/logo-flask.svg?h=0076fbd8"},
                {name: "Discord.py", icon: "https://image.flaticon.com/icons/png/512/2111/2111370.png"}
            ]
        },
        {
            name: "C++",
            icon: "https://www.freeiconspng.com/uploads/c--logo-icon-0.png"
        },
        {
            name: "JavaScript",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
            libraries: [
                {name: "React.js", icon: "https://clipground.com/images/react-logo-png-7.png"}
            ]
        },
        {
            name: "Ruby",
            icon: "https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/ruby-programming-language.png",
        },
        {
            name: "R Lang",
            icon: "https://analisemacro.com.br/wp-content/uploads/2016/05/r-lang.png",
        },
        {
            name: "Lua",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/280px-Lua-Logo.svg.png",
        },
    ]

    return (
        <>
            <h1 className="accent">Lanugages</h1>
            {
                skills.map(skill => {
                    return <LanguageCard key={skill.name} name={skill.name} description={skill.description} icon={skill.icon} libraries={skill.libraries}/>
                })
            }
        </>
    )
}