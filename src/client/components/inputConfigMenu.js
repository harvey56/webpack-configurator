import React from 'react';
import Checkbox from './CheckBox';
import loaderOptions from './loaderoptions';

import { cssLoader, lessLoader, sassLoader, imagesLoader, fontsLoader, jsLoader, dataLoader } from './webpackConfigGenerated';

import '../../../public/css/main.css';

class InputConfigMenu extends React.Component{
	constructor(){
		super();

		this.generateLoadersConfig = this.generateLoadersConfig.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
		this.generateInitialConfig = this.generateInitialConfig.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.generateModeConfig = this.generateModeConfig.bind(this);
		this.selectedLoaders = new Set();

		this.state = {
			checkedLoaders: new Map(),
			loadersList: '',
			config: '',				
			entry: "./src/index.js",
			outputFileName: "./dist/main.js",
			outputPath: "./dist",
			CSSActivationStatus: 'off',
			selectedMode: 'development'
		}
	}

	generateInitialConfig(){
		const initialConfig =
`module.exports = {

	entry: '${this.state.entry}',
	output: {
		path: path.resolve(__dirname, '${this.state.outputPath}'),
	    filename: '${this.state.outputFileName}'
	},
`

		return initialConfig
	}

	generateLoadersConfig(){		
		let checkedLoaders = [];
		var loadersList = '';
		let mapLoaders = {
			'css': cssLoader, 
			'less': lessLoader,
			'sass': sassLoader,
			'images': imagesLoader,
			'fonts': fontsLoader,
			'data': dataLoader,
			'javascript': jsLoader
		};

		//checkLoaders array contains the list of actually checked loaders
		this.state.checkedLoaders.forEach( (val, key, map) => {
			if (val) checkedLoaders.push(key)
		})

		checkedLoaders.forEach( el => {
			loadersList += mapLoaders[el]
		})

		const initLoaders =
	`
	module: {
		rules: [
			${ loadersList }										
		]
	}
}
	`

		return loadersList.length > 0 ? initLoaders : ''
	}

	generateModeConfig(){
		const devMode =
	`
	mode: 'development'
	,
	`

		const prodMode =
	`
	mode: 'production'
	,
	`

		if (this.state.selectedOption === "development") return devMode

		else return prodMode
	}

	handleGenerateConfig(e){
		console.log('You have selected mode:', this.state.selectedOption);
		this.props.onDisplayGeneratedConfig(e);	
	}

	toggleCheckboxChange(e){
		const loader = e.target.name;
    	const isChecked = e.target.checked;
    	this.setState( (prevState) => ({ 
    		checkedLoaders: prevState.checkedLoaders.set(loader, isChecked),    		
    	}));
	}

	handleChange(e){
		this.setState({[e.target.name] : e.target.value})
	}

	handleOptionChange(changeEvent){
	  this.setState({
	    selectedOption: changeEvent.target.value
	  });
	}

	render(){

		const config = this.generateInitialConfig() + this.generateModeConfig() + this.generateLoadersConfig()

		return(			
			<div className = "col-md-6">		
				<div className = "row">
				  <div className = "col-md-2"></div>
				  <div className = "col-md-8">
				  	<div className = "leftFrame mb-3">
						<h4 className = "text-muted">Configuration inputs</h4>
					</div>

				    {/* Input */}
				  	<div className = "form-group row">
						<label htmlFor = "inputFile" className = "col-sm-2 col-form-label label-margin-input text-right">Input</label>
						<div className = "col-sm-9 offset-sm-1 mb-3">
							<h6>Enter input file name (optional)</h6>
						  	<input type="text" className = "form-control" aria-label="Text input with checkbox" placeholder = "./src/index.js" onChange = {this.handleChange} value = {this.state.entry} name = 'entry' />
							<p className = "subtitle">the placeholder's entry filename is the default filename if the input field is left blank</p>
						</div>
					</div>

					{/* Output */}
				    <div className = "form-group row">
						<label htmlFor = "outputFile" className = "col-sm-2 col-form-label label-margin-output text-right">Output</label>
						<div className = "col-sm-9 offset-sm-1 mb-3">
							<h6>Enter output file name (optional)</h6>
							<div className = "mb-3">
						    	<input type="text" className = "form-control" aria-label="output file name"  placeholder = "./dist/main.js" onChange = {this.handleChange} value = {this.state.outputFileName} name = 'outputFileName'/>
						    	<p className = "subtitle">the placeholder's output filename is the default filename if the input field is left blank</p>
						    </div>

						    <div className = "mb-3">
						    	<input type="text" className = "form-control" aria-label="output path"  placeholder = "./dist" onChange = {this.handleChange} value = {this.state.outputPath} name = 'outputPath'/>
						    	<p className = "subtitle">the placeholder's pathname is the default pathname if the input field is left blank</p>
						    </div>
						</div>
					</div>

					{/* Loaders */}
					<div className = "form-group row">
						<label htmlFor = "loaders" className = "col-sm-2 col-form-label label-margin-loaders text-right">Loaders</label>
						<div className = "col-sm-9 offset-sm-1 mb-3">
							<h6>Select loaders</h6>								
						  	<div className = "d-flex flex-row">
						  		<div className = "p-2">
								  	{								  	
							          loaderOptions.map(item => (
							            <label className = "customCheckBox" key={item.key}>
							              {item.name}
							              <Checkbox name={item.name} checked={this.state.checkedLoaders.get(item.name)} onChange={this.toggleCheckboxChange} />
							              <span className = "customCheckMark"></span>
							            </label>										
							          ))								  	
									}
								</div>
							</div>
						</div>
					</div>

					{/* Plugins */}
					<div className = "form-group row">
						<label htmlFor = "plugins" className = "col-sm-2 col-form-label label-margin-plugins text-right">Plugins</label>
						<div className = "col-sm-9 offset-sm-1 mb-3">
							<h6>Select plugins</h6>
							<p className = "h6">
								Selecting a mode (production/development) will enable the below plugins
							</p>
							<table className = "table table-sm table-font-size">
							  <thead>
							    <tr>
							      <th scope="col">Mode</th>
							      <th scope="col">Plugins enabled</th>
							    </tr>
							  </thead>
							  <tbody>
							    <tr>
							      <td>Development</td>
							      <td>Enables <code>NamedChunksPlugin</code> and <code>NamedModulesPlugin</code></td>
							    </tr>
							    <tr>
							      <td>Production</td>
							      <td>Enables <code>FlagDependencyUsagePlugin</code>, <code>FlagIncludedChunksPlugin</code>, <code>ModuleConcatenationPlugin</code>, <code>NoEmitOnErrorsPlugin</code>, <code>OccurrenceOrderPlugin</code>, <code>SideEffectsFlagPlugin</code> and <code>UglifyJsPlugin</code></td>
							    </tr>
							  </tbody>
							</table>							
						</div>
					</div>

					{/* Mode */}
					<div className = "form-group row">
						<label htmlFor = "outputFile" className = "col-sm-2 col-form-label label-margin-mode text-right">Mode</label>
						<div className = "col-sm-9 offset-sm-1 mb-3">
							<h6>Select one config file or separated prod/dev files</h6>
							<form>
					        <div className="radio">
					          <label className = "customCheckBox">
					            <input type="radio" value="development" checked={this.state.selectedOption === 'development'} onChange={this.handleOptionChange}/>
					            	Development mode
					            <span className = "customCheckMark"></span>
					          </label>
					        </div>
					        <div className="radio">
					          <label className = "customCheckBox">
					            <input type="radio" value="production" checked={this.state.selectedOption === 'production'} onChange={this.handleOptionChange}/>
					            	Production mode
					            <span className = "customCheckMark"></span>
					          </label>
					        </div>
					      </form>
						</div>
					</div>

					{/* Submit button */ }				
					<div className ="d-flex justify-content-center">
						<button type = "button" className = "btn btn-info" onClick = { this.handleGenerateConfig.bind(this, config) }>Generate config file</button>
					</div>
					
				  </div>
				</div>				
			</div>
		)
	}

}

export default InputConfigMenu;