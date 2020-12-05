import React from 'react';
import './ToolBar.css'
const ToolBar = (props) => {
    return (
        <div id="toolbar">
            <button onClick={props.handleToolBarClick}>Hyperlink</button>
            <button onClick={props.handleToolBarClick}>H1</button>
            <button onClick={props.handleToolBarClick}>Image</button>
            <button onClick={props.handleToolBarClick}>Code</button>
            <button onClick={props.handleToolBarClick}>Table</button>
            <button onClick={props.handleToolBarClick}>Clear</button>
        </div>
        );
}

export default ToolBar;