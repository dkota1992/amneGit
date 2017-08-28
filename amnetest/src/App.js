import React, { Component } from 'react';
import Testclass from './Components/Testclass.js';
import NavBar from "./Components/Mainbar.js";
import InputField from "./Components/input.js"
import './App.css'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
      <div className="inputField">
            <InputField />
      </div>
      </div>
    );
  }
}

export default App;
