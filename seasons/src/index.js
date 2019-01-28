import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //not required by React, but can be called in a Class
  //overwrites the React.Component constructor with the component's constructor
  //including the props and state
  constructor(props) {
    //must call super(props) - EVERY time
    super(props);
    // after calling super(props) - initialize state
    // set state object with reasonable data
    // data will be the latitude of the current position
    // anytime the value is going to be a number, use null
    // this.state is now accessible anywhere inside the App Class
    // must be assigned to state property so YES: this.state / NO: this.myState
    this.state = { latitude: null, errorMessage: '' };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // to update state object, we called setState()!!!
        this.setState({ latitude: position.coords.latitude});
        //DO NOT:
        //this.state.latitude = position.coords.latitude
        //only EVER use setState to UDPATE state -> never direct assignment
      },
      err => {
        this.setState({ errorMessage: err.message })
      },
    );
  }

  //React says we MUST define render!!
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <div>Latitude: {this.state.latitude}</div>
    }
    // the 'else' state, so don't need an else statement but
    // rather render this default state
    return <div>Loading!</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
