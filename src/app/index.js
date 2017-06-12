import React, {Component} from 'react';
//import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends Component {

  constructor () {
    super();

    this.state = {
      homeLink: "Home"
    };
  }

  onGreet() {
    console.log('Hello Shahmir Khan Jadoon');
  }

  onChangeLinkName (newName) {
    this.setState({
      homeLink: newName
    });
  }

  render() {
    let bio = {
      uni: "GIK",
      hobbies: ['Sports', 'Programming', 'Gaming']
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name="Shahmir" age={25} bio={bio} greet={this.onGreet}
                  changeLink={this.onChangeLinkName.bind(this)}
                  initialLinkName={this.state.homeLink}
            />
          </div>
        </div>

      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector("#app"));
