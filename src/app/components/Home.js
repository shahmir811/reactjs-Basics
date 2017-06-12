import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      age: props.age,
      homeLink: props.initialLinkName
    };
  }

  onMakeOlder () {
    this.setState({
      age: this.state.age + 3
    });
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event){
     this.setState({
        homeLink: event.target.value
     });
  }

  render() {
    let welcome_note = 'Welcome to Home Component';
    return (
      <div>
        <h1><u>{welcome_note}</u></h1>
        <p>My name is {this.props.name}, I am {this.state.age} and I graduated from {this.props.bio.uni}</p>
        <hr/>
        <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make Me Older</button>
        <hr/>
        <button className="btn btn-primary" onClick={this.props.greet} >Greet</button>
        <hr/>
        <input type="text" className="form-control" defaultValue={this.state.homeLink}
               onChange={this.onHandleChange.bind(this)}
        />
        <br/>
        <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
      </div>
    );
  }
}

export { Home };

Home.propTypes = { // propTypes just inform us about the DataType of coming Prop
  name: PropTypes.string,
  age: PropTypes.number,
  bio: PropTypes.object,
  greet: PropTypes.func,
  initialLinkName: PropTypes.string
};
