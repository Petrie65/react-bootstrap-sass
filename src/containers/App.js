import React, { Component } from 'react';

import logoReact from '../assets/react.svg';
import logoBootstrap from '../assets/bootstrap.svg';
import logoSass from '../assets/sass.svg';

import BootstrapPage from './Bootstrap4Page';

import '../styles/App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
	  slideFin: false
    };
  }
  
  render() {	  
  	const buttonProps = "btn btn-primary btn-lg btn-block begin-button"
	let buttonClass = this.state.open ? buttonProps + " show" : buttonProps;
	
    const collapseProps = "collapse collapse-content"
	let collapseClass = this.state.open ? collapseProps + " show" : collapseProps;
	
    return (
      <div className="App">
		  <header className="App-header">
			  <div className="container">
				  <div className="row">
					  <div className="col">
						  <div className="logo-image">
							  <img src={logoReact} id="react" alt="logoReact" />
							  <h1 className="logo-text blue">React</h1>
						  </div>
					  </div>
					  <div className="col">
						  <div className="logo-image">
							  <img src={logoBootstrap} id="bootstrap" alt="logoBootstrap" />
							  <h1 className="logo-text purple">Bootstrap</h1>
						  </div>
					  </div>
					  <div className="col">
						  <div className="logo-image">
							  <img src={logoSass} id="sass" alt="logoSass" />
							  <h1 className="logo-text pink">Sass</h1>
						  </div>
					  </div>
				  </div>
			  </div>
		  </header>

		  {/* <BootstrapPage /> */}

		  {/* Greeting */}
		  <div className='jumbo-greeting'>
			  <h1 className="text-inco">Hello, world!</h1>
			  <p className="text-inco text-standard">
				  This is a simple hero unit, a simple jumbotron-style component for calling
				  extra attention to featured content or information.
			  </p>
		  </div>

		  {/* Only render button if it has not been dismissed */}
		  {!this.state.slideFin ? 
			  <button 
				  type="button" 
				  className={buttonClass} 
				  onAnimationEnd ={() => this.setState({ 
						  open: true,
						  slideFin: true
				  })}
				  onClick={() => {
					  this.setState({ 
							  open: true,
							  slideFin: false
					  })}
				  }>Lets begin!</button>

		  : null}

		  {/* Only render button if it has not been dismissed */}
		  <div className={collapseClass}>
			  <div className="container bg-dark text-light py-5 px-5">
				  Anim pariatur cliche reprehenderit, enim eiusmod high life
				  accusamus terry richardson ad squid. Nihil anim keffiyeh
				  helvetica, craft beer labore wes anderson cred nesciunt sapiente
				  ea proident.
				  <div className="bootstrap-content">
					  <button className="btn btn-block btn-primary">Primary</button>
					  <button className="btn btn-block btn-success">Success</button>
					  <button className="btn btn-block btn-info">Info</button>
					  <button className="btn btn-block btn-warning">Warning</button>
					  <button className="btn btn-block btn-danger">Danger</button>
				  </div>
			  </div>
		  </div>
      </div>
    );
  }
}

export default App;
