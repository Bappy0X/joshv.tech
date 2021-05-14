const experiences = require("./json/experiences.json")

function ExperienceCard({ experience }) {
    return (
        <>
            <div className="text-center">
                <img src={experience.img} alt={experience.name} className="w-25"/>
            </div>
            <p className="font-weight-bold">{experience.name}</p>
        </>
    )
}

export default function Experiences() {
    return (
        <>
            <h1 className="accent">Experiences</h1>
            {
                experiences.map(experience => {
                    return (
                        <ExperienceCard key={experience.name} experience={experience}/>
                    )
                })
            }
        </>
    )
}