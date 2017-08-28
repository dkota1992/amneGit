import React from 'react';
import FetchData from "./FetchData.js";
import Autocomplete from 'react-google-autocomplete';
import PlacesAutoComplete from 'react-places-autocomplete';
import ReactDOM from "react-dom";

const buttonStyle = {
  margin: "20px 20px 20px 20px",
  backgroundColor: "orange",
  width: "140%"
};

class InputField extends React.Component{
  constructor(props){
    super(props);
    this.state = {firstAddress: "", secondAddress:"", radius: "10", searchterm: "Real estate Agencies", result : ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
    this.setState(state);

    e.preventDefault();
  }

handleInputChange(e){
  var state = this.state;
  var text = e.target.value;
  if(e.target.getAttribute("id") === "radius"){
    state.radius = text;
  } else{
    state.searchterm = text;
  }
  this.setState(state);
}


handleSubmit(e){
  var state = this.state;
  if ((state.firstAddress === "") || (state.secondAddress === "")){
    alert("Both fields are required.")
  }
  state.result = <FetchData address={this.state} />;

  this.setState(state)
}

  handleSelect(place,id){
    var state = this.state;
    var text = place.formatted_address;
    if (id === "firstAddress"){
      state.firstAddress = text;
    }
    else{
      state.secondAddress = text;
    }
    this.setState(state);
  }

  render(){
    return(
      <div>
        <h4>First Address: </h4>
        <Autocomplete onChange={this.handleChange} onClick={this.handleChange} id="firstAddress" style={{width: '190%'}}
        onPlaceSelected={(place) => this.handleSelect(place,"firstAddress")} types={['address']} />
        <h5 style={{color: "blue"}}>{this.state.firstAddress} </h5>
        <h4>Second Address: </h4>
        <Autocomplete onChange={this.handleChange} onClick={this.handleChange} id="secondAddress" style={{width: '190%'}}
        onPlaceSelected={(place) => this.handleSelect(place,"secondAddress")} types={['address']} />
        <h5 style={{color:"blue"}}>{this.state.secondAddress} </h5>
        <h4>Enter Radius(Miles):</h4>
        <input type="text" id="radius" onChange={this.handleInputChange}/>
        <h4>Enter Search Term: </h4>
        <input type="text" id="searchterm" value="Real Estate Agencies" onChange={this.handleInputChange}/>

        <button style={buttonStyle} onClick={this.handleSubmit}>Fetch Agencies </button>

        <div className="result"> {this.state.result} </div>

      </div>
    );
  }
}


export default InputField;
