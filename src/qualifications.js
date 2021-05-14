const qualifications = require("./json/qualifications.json")

function QualList({ qualifications }) {
    return (
        <ul>
            {
                qualifications.map(qual => {
                    return <li>{qual.name} @ Level {qual.level}</li>
                })
            }
        </ul>
    )
}

export default function Qualifications() {
    return (
        <>
            <h1 className="accent">Qualifications</h1>
            {
                Object.keys(qualifications).map(qual => {
                    return (
                        <>
                            <h4>{qual}</h4>
                            <QualList qualifications={qualifications[qual]}/>
                        </>
                    )
                })
            }
        </>
    )
}