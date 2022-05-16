import '../styles/Aside.css';
import c from '../assets/logos/c.png';
import cpp from '../assets/logos/cpp.png';
import html from '../assets/logos/html.png';
import java from '../assets/logos/java.png';
import js from '../assets/logos/js.png';
import php from '../assets/logos/php.png';
import sql from '../assets/logos/sql.png';

function Aside(props) {
    return (
        <div className="aside">

            <div className="picture"></div>

            <div className="name">
                <div>{props.data.firstName} {props.data.lastName}</div>
            </div>

            <div className="line"></div>

            <div className="data">
                <div>{props.data.occupation}</div>
                <div>{props.data.age}</div>
                <div>{props.data.email}</div>
                <div>{props.data.tel}</div>
            </div>
            
            <div className="line"></div>

            <div className="logos">
                <div className="logo-line">
                    <img src={js} alt="JavaScript" />
                    <img src={html} alt="HTML" />
                </div>
                <div className="logo-line">
                    <img src={php} alt="PHP" />
                    <img src={sql} alt="SQL" />
                </div>
                <div className="logo-line">
                    <img src={java} alt="Java" />
                    <img src={c} alt="C" />
                    <img src={cpp} alt="C++" />
                </div>
            </div>

            <div className="line"></div>

            <div className="frameworks">
                {props.data.frameworkList.map(framework => (
                    <div className="framework">
                        <div className="framework-name">{framework.name}</div>
                        <progress className="framework-progress" max="100" value={framework.state}></progress>
                    </div>
                ))}
            </div>

            <div className="line"></div>

            <div className="skills">
                {props.data.skills.map(skill => (
                    <div>
                        {skill}
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Aside;
