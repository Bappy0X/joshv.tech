const languages = require("./json/languages.json")

function LibraryCard({ name, icon }) {
    return (  
        <div className="mr-2">
            <img src={icon} alt={name} title={name} className="fa-fw mr-1"/><span>{name}</span>
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
                    <p className="m-0 font-weight-bold">{name}</p>
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
    return (
        <>
            <h1 className="accent">Lanugages</h1>
            {
                languages.map(language => {
                    return (
                        <>
                            <LanguageCard key={language.name} name={language.name} description={language.description} icon={language.icon} libraries={language.libraries}/>
                            <hr className="w-75 border-light"/>
                        </>
                    )
                })
            }
        </>
    )
}