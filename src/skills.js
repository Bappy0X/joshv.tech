import React from "react";

function Icon({ icon, name }) {
    return(
        <img src={icon} alt={`${name} Icon`} className="fa-fw"/>
    )
}

function Library({ name, icon }) {
    return(
        <i title={name} data-toggle="tooltip" data-placement="bottom"><Icon icon={icon} name={name}/></i>
    )
}

function Libraries({ libraries }) {
    if (libraries.length > 0) {
        return (
            <div className="card-footer">
                <p className="mb-1 text-muted">Libraries:</p>
                {
                    libraries.map(({name, icon}) => {
                        return <Library key={name} name={name} icon={icon}/>
                    })
                }
            </div>
        )
    }
    return null
}

function Skill({ name, icon, category, state, description, libraries=[] }) {
    const states = {
        Fluent: {
            colour: "success",
            description: "I can fluently write this language."
        },
        Learning: {
            colour: "warning",
            description: "I'm currently learning this language."
        },
        "Next in Line": {
            colour: "info",
            description: "This is on my immediate list of things to learn."
        },
        Knowledgeable: {
            colour: "danger",
            description: "I know about this language, and have a basic understanding."
        }
    }

    return (
        <div className="col-6 mb-3">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title font-weight-bolder mb-0"><Icon icon={icon} name={name}/> {name}</h4>
                    <p className="mb-0">{category}</p>
                    <p className={`text-${states[state].colour} mb-2`}><abbr title={states[state].description} data-toggle="tooltip" data-placement="bottom">{state}</abbr></p>
                    <p className="card-text">{description}</p>
                </div>
                <Libraries libraries={libraries}/>
            </div>
        </div>
    )
}

export default function Skills() {
    const skills = [
        {
            name: "Python",
            icon: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
            category: "Applications",
            state: "Fluent",
            description: "Python is my favourite programming language.",
            libraries: [
                {name: "Flask", icon: "https://invenio-software.org/static/img/logo-flask.svg?h=0076fbd8"},
                {name: "Discord.py", icon: "https://image.flaticon.com/icons/png/512/2111/2111370.png"},
                {name: "test"}
            ]
        },
        {
            name: "C++",
            icon: "https://www.freeiconspng.com/uploads/c--logo-icon-0.png",
            state: "Knowledgeable",
            description: ""
        },
        {
            name: "JavaScript",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
            category: "Applications",
            state: "Fluent",
            description: "Python is my favourite programming language.",
            libraries: [
                {name: "React.js", icon: "https://clipground.com/images/react-logo-png-7.png"}
            ]
        },
        {
            name: "Ruby",
            icon: "https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/ruby-programming-language.png",
            state: "Learning",
            description: ""
        },
        {
            name: "R Lang",
            icon: "https://analisemacro.com.br/wp-content/uploads/2016/05/r-lang.png",
            state: "Next in Line",
            description: ""
        },
        {
            name: "Lua",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/280px-Lua-Logo.svg.png",
            state: "Fluent",
            description: ""
        },
    ]
    //This will most likely be moved to MongoDB

    return(
        <div className="container">
            <div className="row">
                {
                    skills.map(skill => {
                        return <Skill key={skill.name} name={skill.name} icon={skill.icon} category={skill.category} state={skill.state} description={skill.description} libraries={skill.libraries} />
                    })
                }
            </div>
        </div>
    )
}