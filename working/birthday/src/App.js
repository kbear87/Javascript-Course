import React, { Component } from 'react';

import './App.css';
import Yes from './Yes/Yes';
import No from './No/No';


class App extends Component {
  state = {
    isYes: false,
    isNo: false
  }

  yesButtonHandler = () => {
    const yes = this.state.isYes;
    this.setState({
      isYes: true,
      isNo: false})
  }

  noButtonHandler = () => {
    const no = this.state.isNo;
    this.setState({
      isNo: true,
      isYes: false})
  }

  render() {
    let happyBirthday = null;

    if (this.state.isYes) {
      happyBirthday = (
           <div>
              <Yes />
           </div>
      )
    }

    if (this.state.isNo) {
        happyBirthday = (
          <div>
              <No />
          </div>
        )
    }

    return (
      <div className="App">
        <h1>Are you 35 today?</h1>
        <button onClick={this.yesButtonHandler}>Yes</button>
        <button onClick={this.noButtonHandler}>No</button>
        {happyBirthday}

      </div>
    );
  }
}

export default App;
