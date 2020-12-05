import React from 'react';
import './Editor.css';
import ToolBar from './ToolBar/ToolBar';

const textareaStyle = {
    width: '100%',
    height: '80vh',
    border: '1px solid black',
    padding: '1rem',
    outLine: 'none'

}

const Editor = (props) => {
    return (
        <div>
            <div id="editor">
                <ToolBar handleToolBarClick={props.handleToolBarClick}/>
                <textarea id="text" style={textareaStyle} value={props.markdown} onChange={props.handleChange}></textarea>
            </div>
        </div>
        
    );
};

export default Editor;