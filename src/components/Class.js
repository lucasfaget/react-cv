import '../styles/Class.css';

function Class(props) {
    return (
        <div className="class">

            <div className="classHeader">
                <div className="classKeyword">class</div>
                <div className="classTitle">{props.name}</div>
            </div>

            <div>{"{"}</div>
            <div className="classContent">
                {props.type}
            </div>
            <div>{"}"}</div>
            
        </div>
    );
}

function Formation({formationList})
{
    return (
        formationList.map(formation => (
            <div>
                <div className="bold">{formation.title}</div>
                <div>{formation.date} : {formation.place}</div>
            </div>
        ))
    );
}

function Experience({experienceList})
{
    return (
        experienceList.map(experience => (
            <div>
                <div className="bold">{experience.title}</div>
                <div>{experience.date} : {experience.place}</div>
                <div className="taskList">
                    {experience.tasks.map(task => (
                        <li>{task}</li>
                    ))}
                </div>
            </div>
        ))
    );
}

function Languages({languageList})
{
    return (
        <div className="languageList">
            {languageList.map(language => (
                <li>{language.name} : {language.level}</li>
            ))}
        </div>
    );
}

function Interests({interestList})
{
    return (
        <div className="interestList">
            {interestList.map(interest => (
                <li>{interest}</li>
            ))}
        </div>
    );
}

export { Class, Formation, Experience, Languages, Interests }