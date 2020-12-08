const Digits = (props) => {
    return (
        <div>
            <button id="zero" value="0" onClick={props.handleInput}>0</button>
            <button id="one" value="1" onClick={props.handleInput}>1</button>
            <button id="two" value="2" onClick={props.handleInput}>2</button>
            <button id="three" value="3" onClick={props.handleInput}>3</button>
            <button id="four" value="4" onClick={props.handleInput}>4</button>
            <button id="five" value="5" onClick={props.handleInput}>5</button>
            <button id="six" value="6" onClick={props.handleInput}>6</button>
            <button id="seven" value="7" onClick={props.handleInput}>7</button>
            <button id="eight" value="8" onClick={props.handleInput}>8</button>
            <button id="nine" value="9" onClick={props.handleInput}>9</button>
        </div>
    );
};

export default Digits;