import '../styles/Main.css';
import { Class, Formation, Experience, Languages, Interests } from './Class';

function Main(props) {
    return (
        <div className="main">
            <div>
                <Class 
                    name="FORMATION" 
                    type={<Formation formationList={props.data.formationList}/>}
                />
            </div>
            <div>
                <Class
                    name="EXPÉRIENCES"
                    type={<Experience experienceList={props.data.experienceList}/>}
                />
            </div>
            <div className="mainBottom">
                <div>
                    <Class 
                        name="LANGUES" 
                        type={<Languages languageList={props.data.languageList}/>}
                    />
                </div>
                <div className="mainBottomRight">
                    <Class 
                        name="CENTRES D'INTERÊT" 
                        type={<Interests interestList={props.data.interestList}/>}
                    />
                </div>
            </div>

            <div className="footer">
                NB : Ce curriculum vitae a été implémenté avec React
            </div>
        </div>
    );
}

export default Main;