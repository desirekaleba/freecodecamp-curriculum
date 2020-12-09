import './Bottom.css';

const Bottom = (props) => {
    return (
        <div id="bottom">
            <button id="decimal" value="." onClick={props.handleInput}>.</button>
            <button id="equals" value="=" onClick={props.handleInput}>=</button>
        </div>
        
    );
};

export default Bottom;