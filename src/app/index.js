import React, {Component} from 'react';
//import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home />
          </div>
        </div>

      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector("#app"));
