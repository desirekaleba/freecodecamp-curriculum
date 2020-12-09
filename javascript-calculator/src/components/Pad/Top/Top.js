import './Top.css';

const Top = (props) => {
    return (
        <div>
            <button id="clear" value="c" onClick={props.handleInput}>AC</button>
        </div>
        
    );
};

export default Top;