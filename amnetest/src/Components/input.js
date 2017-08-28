import React from 'react';
import FetchData from "./FetchData.js";
import Autocomplete from 'react-google-autocomplete';
import ReactDOM from "react-dom";

const buttonStyle = {
  margin: "20px 20px 20px 20px",
  backgroundColor: "orange"
};

class InputField extends React.Component{
  constructor(props){
    super(props);
    this.state = {firstAddress: "", secondAddress:"" ,result : ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    var text = e.target.value;
    var state = this.state;
    if (e.target.getAttribute("id") === "firstAddress"){
      state.firstAddress = text;
    }
    else{
      state.secondAddress = text;
    }
    this.setState(state)
    e.preventDefault();
  }

handleSubmit(e){
  var state = this.state;
  if ((state.firstAddress === "") || (state.secondAddress === "")){
    alert("Both fields are required.")
  }
  state.result = <FetchData address={this.state} />;

  this.setState(state)
}

  render(){
    return(
      <div>
        <h4>First Address: </h4>
        <input onChange={this.handleChange} type="text" id="firstAddress" value={this.props.value} />
        <h5>{this.state.firstAddress} </h5>
        <h4>Second Address: </h4>
        <input onChange={this.handleChange} type="text" id="secondAddress" value={this.props.value} />
        <h5>{this.state.secondAddress} </h5>
        <button style={buttonStyle} onClick={this.handleSubmit}>Fetch Agencies </button>
        <div className="result"> {this.state.result} </div>
      </div>
    );
  }
}


export default InputField;
