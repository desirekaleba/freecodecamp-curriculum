import React from 'react';
import marked from 'marked';

import './Previewer.css';
// Set options
// `highlight` example uses `highlight.js`
marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code, language) {
        const hljs = require('highlight.js');
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
    },
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: true
});

const Previewer = (props) => {
    return (
        <div id="previewer"
                dangerouslySetInnerHTML = {
                    {
                        __html: marked(props.markdown)
                    }
                }
                />
    );
};

export default Previewer;