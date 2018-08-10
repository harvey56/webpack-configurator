import React from 'react';

class InputConfigMenu extends React.Component{
	render(){
		return(			
			<div className = "col-md-6">
				<form>
					<div className = "row">
					  <div className = "col-md-2"></div>
					  <div className = "col-md-8">
					  	<div className = "leftFrame mb-5">
							<h3>Configuration inputs here</h3>
						</div>

					    {/* Input */}
					  	<div className = "form-group row">
							<label for = "inputFile" className = "col-sm-2 col-form-label label-margin-input">Input</label>
							<div className = "col-sm-9 offset-sm-1 mb-3">
								<h6>Enter input file name (optional)</h6>
							  	<input type="text" name = "inputFile" className = "form-control" aria-label="Text input with checkbox"  placeholder = "./src/index.js" />
							</div>
						</div>

						{/* Output */}
					    <div className = "form-group row">
							<label forHtml = "outputFile" className = "col-sm-2 col-form-label label-margin-output">Output</label>
							<div className = "col-sm-9 offset-sm-1 mb-3">
								<h6>Enter output file name (optional)</h6>
								<div className = "mb-3">
							    	<input type="text" name = "outputFile" className = "form-control" aria-label="output file name"  placeholder = "./dist/main.js" />
							    </div>

							    <div className = "mb-3">
							    	<input type="text" name = "outputPath" className = "form-control" aria-label="output path"  placeholder = "./dist" />
							    </div>
							</div>
						</div>

						{/* Loaders */}
						<div className = "form-group row">
							<label for = "loaders" className = "col-sm-2 col-form-label label-margin-loaders">Loaders</label>
							<div className = "col-sm-9 offset-sm-1 mb-3">
								<h6>Select loaders</h6>
								<div className = "d-flex flex-row">
								  <div className = "p-2">
								  	<div className = "custom-control custom-checkbox">
									  <input type="checkbox" className = "custom-control-input" id="CSS" />
									  <label className = "custom-control-label" for="CSS">CSS</label>
									</div>
								  </div>
								  <div className = "p-2">
								  	<div className = "custom-control custom-checkbox">
									  <input type="checkbox" className = "custom-control-input" id="LESS" />
									  <label className = "custom-control-label" for="LESS">LESS</label>
									</div>
								  </div>
								  <div className = "p-2">
								  	<div className = "custom-control custom-checkbox">
									  <input type="checkbox" className = "custom-control-input" id="SASS" />
									  <label className = "custom-control-label" for="SASS">SASS</label>
									</div>
								  </div>
								</div>
								<div className = "d-flex flex-row">
									<div className = "p-2">
										<div className = "custom-control custom-checkbox">
										  <input type="checkbox" className = "custom-control-input" id="Images" />
										  <label className = "custom-control-label" for = "Images">Images</label>
										</div>
									</div>
								</div>
								<div className = "d-flex flex-row">
									<div className = "p-2">
										<div className = "custom-control custom-checkbox">
										  <input type="checkbox" className = "custom-control-input" id="Fonts" />
										  <label className = "custom-control-label" for = "Fonts">Fonts</label>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Plugins */}
						<div className = "form-group row">
							<label forHtml = "outputFile" className = "col-sm-2 col-form-label label-margin-plugins">Plugins</label>
							<div className = "col-sm-9 offset-sm-1 mb-3">
								<h6>Select plugins</h6>
							</div>
						</div>

						{/* Mode */}
						<div className = "form-group row">
							<label forHtml = "outputFile" className = "col-sm-2 col-form-label label-margin-mode">Mode</label>
							<div className = "col-sm-9 offset-sm-1 mb-3">
								<h6>Select one config file or separated prod/dev files</h6>
								<div className = "form-check mb-3">
								  <input className = "form-check-input" type="radio" name="oneConfigFile" id="oneConfigFile" value="oneConfigFile" checked />
								  <label className = "form-check-label" for="oneConfigFile">
								    a unique configuration file
								  </label>
								</div>
								<div className = "form-check">
								  <input className = "form-check-input" type="radio" name="separateConfigFiles" id="separateConfigFiles" value="separateConfigFiles" />
								  <label className = "form-check-label" for="separateConfigFiles">
								    separate production and development configuration files
								  </label>
								</div>
							</div>
						</div>

					  </div>
					</div>
				</form>
			</div>
		)
	}

}

export default InputConfigMenu;