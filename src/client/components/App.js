import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React App!!!</h1>
        <div className = "row">
        	<div className = "col-md-6">
        		<div className = "leftFrame">
	        		<h3>Configuration inputs here</h3>
        		</div>
        	</div>
        	<div className = "col-md-6">
            <div className = "rightFrame">
              <h3>Configuration outputs here</h3>
            </div>
        	</div>
        </div>
      </div>
    );
  }
}

export default App;