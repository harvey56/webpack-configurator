import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/styles/hljs';

import { webpack4MinConfig } from '../config_files/webpack4MinConfig'
import InputConfigMenu from './inputConfigMenu';

import '../../../public/css/main.css';

class App extends Component {

  constructor(){
    super();

    const initialWebpackConfig = webpack4MinConfig;

    this.state = {
      prettyCode: initialWebpackConfig,
      style: tomorrowNightEighties
    }
  }

  render() {

    return (
      <div>
        <h1>React App!!!</h1>
        <div className = "row">
        	<InputConfigMenu />
        	<div className = "col-md-5">
            <div className = "leftFrame mb-5">
              <h3>Configuration outputs here</h3>
            </div>
            <div className = "rightFrame">
                <SyntaxHighlighter language='javascript' style={this.state.style} showLineNumbers={true}>{this.state.prettyCode}</SyntaxHighlighter>
            </div>
        	</div>
          <div className = "col-md-1"></div>
        </div>
      </div>
    );
  }
}

export default App;