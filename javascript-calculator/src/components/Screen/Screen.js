import './Screen.css';

const Screen = (props) => {
    return (
        <div>
            <div id="display">
                <span className="input">{props.input}</span><br/>
                {props.result}
            </div>
        </div>
    );
};

export default Screen;