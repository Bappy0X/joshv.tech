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
    const qualifications = {
        GCSE: [
            {
                name: "Computer Science",
                level: 7
            },
            {
                name: "Computer Science",
                level: 7
            }
        ],
        "A Level": [
            {
                name: "Computer Science",
                level: 7
            }
        ]
    }
    
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