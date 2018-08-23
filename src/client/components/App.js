import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/styles/hljs';

import { webpack4MinConfig } from '../config_files/webpack4MinConfig';
import InputConfigMenu from './inputConfigMenu';
import Navbar from './navbar';
//import WebpackConfigGenerated from './webpackConfigGenerated';

import '../../../public/css/main.css';

class App extends Component {

  constructor(){
    super();

    //minimal webpack 4 configuration loaded by default
    const initialWebpackConfig = webpack4MinConfig;
    this.handleNewConfig = this.handleNewConfig.bind(this);

    this.state = {
      prettyCode: initialWebpackConfig,
      style: tomorrowNightEighties,
      WebpackConfigGenerated: initialWebpackConfig
    }
  }

  handleNewConfig(e){
    this.setState({
      WebpackConfigGenerated: e
    })
  }

  render() {  

    return (
      <div>
        <Navbar />
        <div className = "row">
        	<InputConfigMenu onDisplayGeneratedConfig = { this.handleNewConfig } />
        	<div className = "col-md-5">
            <div className = "leftFrame mb-3">
              <h4 className = "text-muted">Configuration outputs</h4>
            </div>
            <div className = "rightFrame">
                <div className = "d-flex justify-content-end bd-copy-btn">
                  <button type="button" className = "btn btn-outline-primary btn-sm d-flex justify-content-end copy-btn">Copy</button>
                </div>
                <SyntaxHighlighter language='javascript' style={this.state.style} showLineNumbers={true}>
                   { this.state.WebpackConfigGenerated } 
                </SyntaxHighlighter>
            </div>
        	</div>
          <div className = "col-md-1"></div>
        </div>
      </div>
    );
  }
}

export default App;