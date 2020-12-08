const Screen = (props) => {
    return (
        <div>
            <div id="display">
                {props.input}<br/>
                {props.result}
            </div>
        </div>
    );
};

export default Screen;