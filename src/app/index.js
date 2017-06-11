import React, {Component} from 'react';
import { render } from 'react-dom';
//import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h1>Welcome Home</h1>
          </div>
        </div>
      </div>
    );
  }
}


render(<App />, document.querySelector("#app"));
