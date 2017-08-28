import React, { Component } from 'react';
import Testclass from './Components/Testclass.js';
import NavBar from "./Components/Mainbar.js";
import InputField from "./Components/input.js"
import './App.css'

const buttonStyle = {
  margin: "20px 20px 20px 20px",
  backgroundColor: "orange"
};
class App extends Component {

  handleChange (){

  }
  render() {
    return (
      <div>
        <NavBar />
      <div className="inputField">
          <h4>First Address: </h4>
          <InputField />
          <h4>Second Address: </h4>
          <InputField />
          <button style={buttonStyle}>Fetch Agencies </button>
        </div>
      </div>
    );
  }
}

export default App;
