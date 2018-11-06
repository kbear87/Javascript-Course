import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';



class App extends Component {

  render() {
    return (
      <div>
         <UserOutput />
         <UserOutput />
         <UserOutput />
      </div>
    );
  }
}

export default App;
