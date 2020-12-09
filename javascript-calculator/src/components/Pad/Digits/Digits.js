import './Digits.css';

const Digits = (props) => {
    return (
        <div id="digits">
            
            <button id="one" className="digit" value="1" onClick={props.handleInput}>1</button>
            <button id="two" className="digit" value="2" onClick={props.handleInput}>2</button>
            <button id="three" className="digit" value="3" onClick={props.handleInput}>3</button>
            <button id="four" className="digit" value="4" onClick={props.handleInput}>4</button>
            <button id="five" className="digit" value="5" onClick={props.handleInput}>5</button>
            <button id="six" className="digit" value="6" onClick={props.handleInput}>6</button>
            <button id="seven" className="digit" value="7" onClick={props.handleInput}>7</button>
            <button id="eight" className="digit" value="8" onClick={props.handleInput}>8</button>
            <button id="nine" className="digit" value="9" onClick={props.handleInput}>9</button>
            <button id="zero" className="digit" value="0" onClick={props.handleInput}>0</button>
            <button id="double-zero" className="digit" value="00" onClick={props.handleInput}>00</button>
            <button id="triple-zero" className="digit" value="000" onClick={props.handleInput}>000</button>

        </div>
    );
};

export default Digits;