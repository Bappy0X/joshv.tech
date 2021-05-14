function ExperienceCard({ name }) {
    return (
        <p className="font-weight-bold">{name}</p>
    )
}

export default function Experiences() {
    const experiences = [
        {
            name: "Finance Work Experience"
        },
        {
            name: "Teaching Work Experience"
        },
        {
            name: "Vodafone Innovators Work Experience"
        },
        {
            name: "BT Work Experience"
        },
        {
            name: "Openreach Work Experience"
        },
        {
            name: "Virgin Media Work Experience"
        },
    ]
    return (
        <>
            <h1 className="accent">Experiences</h1>
            {
                experiences.map(experience => {
                    return <ExperienceCard key={experience.name} name={experience.name}/>
                })
            }
        </>
    )
}