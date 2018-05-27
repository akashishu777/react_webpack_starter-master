import React, { Component } from 'react';

class App extends Component {

	getVal()
	{ 
		return "Will";
	}
	

  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <h1>Hello {this.getVal()}</h1>
      </div>
    );
  }
}

export default App;
