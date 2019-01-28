import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = { latitude: null, errorMessage: ''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude}),
      err => this.setState({ errorMessage: err.message }),
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
