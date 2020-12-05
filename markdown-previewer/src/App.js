import React from 'react';
import Header from './components/Header/Header';
import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';
import { defaultMarkdown } from './__mocks__/defaultMarkdown';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: defaultMarkdown
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleToolBarClick = this.handleToolBarClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value
    });
  }

  handleToolBarClick(event) {

    const clickedButton = event.nativeEvent.srcElement.firstChild.data;

    switch (clickedButton) {
      case 'Hyperlink':
        this.setState(state => ({
          markdown: state.markdown += `\n[Link](To)\n`
        }));
        break;

      case 'H1':
        this.setState(state => ({
          markdown: state.markdown += `\n# Change me\n`
        }));
        break;

      case 'Table':
        this.setState(state => ({
          markdown: state.markdown +=
            `\nHeader 1 | Header 2 | Header 3
 ---------- | --------- | --------- 
   Content | Content | Content
   Content | Content | Content\n`
        }));
        break;

      case 'Image':
        this.setState(state => ({
          markdown: state.markdown += `\n![My Image](my-image-link)\n`
        }));
        break;
      case 'Code':
        this.setState(state => ({
          markdown: state.markdown += `\n\`\`\`// my code goes here ...\`\`\`\n`
        }));
        break;
      case 'Clear':
        this.setState({
          markdown: ''
        });
        break;

      default:
        this.setState(state => ({
          markdown: state.markdown
        }));
    }


  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Editor markdown={this.state.markdown} handleChange={this.handleChange} handleToolBarClick={this.handleToolBarClick} />
          <Previewer markdown={this.state.markdown} />
        </div>

      </div>
    );
  }
}



export default App;
