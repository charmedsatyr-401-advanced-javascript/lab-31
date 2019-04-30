import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './store/app-actions.js';
import * as a from './store/numbers-actions.js';

import Numbers from './Numbers';

class App extends Component {
  changeMyName = () => {
    let words = ['foo', 'bar', 'baz'];
    let word = words[Math.floor(Math.random() * words.length)];
    this.props.handleChange(word);
  };

  render() {
    return (
      <React.Fragment>
        <div>NAME: {this.props.app.name}</div>
        <Numbers>{this.props.numbers.currentNumber}</Numbers>
        <button onClick={this.changeMyName}>Change name/number</button>
        <button onClick={this.props.handleReset}>Reset number</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
  numbers: state.numbers,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleChange: newName => dispatch(actions.nameChanger(newName)),
  handleReset: () => dispatch(a.reset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
