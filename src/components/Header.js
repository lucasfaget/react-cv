import '../styles/Header.css';

function Header(props) {
    return (
        <div className="header">
            <div>
                <div className="header-title">{props.data.title}</div>
                <div className="underline"></div>
            </div>
            <div className="header-text">
                {props.data.text}
            </div>
        </div>
    );
}

export default Header;