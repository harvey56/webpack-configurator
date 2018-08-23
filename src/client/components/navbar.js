import React from 'react';

class Navbar extends React.Component{
	render(){
		return(
			<div className = "d-flex justify-content-end">
		        <nav className = "navbar navbar-expand-lg navbar-light bg-light mb-3">
		          <div className = "collapse navbar-collapse" id="navbarNav">
		            <ul className = "navbar-nav">
		              <li className = "nav-item">
		                <a className = "nav-link" href="https://github.com/harvey56/webpack-configurator">Github</a>
		              </li>
		              <li className = "nav-item">
		                <a className = "nav-link" href="#">Help</a>
		              </li>
		            </ul>
		          </div>
		        </nav>
	        </div>			
		)
	}
}

export default Navbar;