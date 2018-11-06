import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    answer: 'Answer Here'
  }

  changeAnswerHandler = (event) => {
    this.setState({
      answer: event.target.value
    })
  }
  render() {
    return (
      <div>
          <UserInput
          changeAnswer={this.changeAnswerHandler}
          defaultInputText={this.state.answer}/>
          <UserOutput
            yesOrNo={this.state.answer}/>
          <UserOutput />
          <UserOutput />
      </div>
    );
  }
}

export default App;
