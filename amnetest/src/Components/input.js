import React from 'react';
import FetchData from "./FetchData.js";
import Autocomplete from 'react-google-autocomplete';

const buttonStyle = {
  margin: "20px 20px 20px 20px",
  backgroundColor: "orange",
  width: "140%"
};

class InputField extends React.Component{
  constructor(props){
    super(props);
    this.state = {firstAddress: "", secondAddress:"", radius: "10", searchterm: "Real estate Agency", result : ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }



handleInputChange(e){
  var state = this.state;
  var text = e.target.value;
  var id = e.target.getAttribute("id");
  state[id] = text;
  this.setState(state);
  e.preventDefault();
}


handleSubmit(e){

  var state = this.state;
  state.result = ""
  if ((state.firstAddress === "") || (state.secondAddress === "")){
    alert("Both fields are required.");
  }
  state['result'] = <FetchData state={this.state}/>
  this.setState(state);
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
        <Autocomplete onChange={this.handleInputChange} onClick={this.handleInputChange} id="firstAddress" style={{width: '190%'}}
        onPlaceSelected={(place) => this.handleSelect(place,"firstAddress")} types={['address']} />
        <h5 style={{color: "blue"}}>{this.state.firstAddress} </h5>
        <h4>Second Address: </h4>
        <Autocomplete onChange={this.handleInputChange} onClick={this.handleInputChange} id="secondAddress" style={{width: '190%'}}
        onPlaceSelected={(place) => this.handleSelect(place,"secondAddress")} types={['address']} />
        <h5 style={{color:"blue"}}>{this.state.secondAddress} </h5>
        <h4>Enter Radius(Miles):</h4>
        <input type="text" id="radius" placeholder="10" onChange={this.handleInputChange}/>
        <h4>Enter Search Term: </h4>
        <input type="text" id="searchterm" placeholder="Real Estate Agency" onChange={this.handleInputChange}/>

        <button style={buttonStyle} id="btn1" onClick={this.handleSubmit}>Fetch Agencies </button>
        <a href="./" ><button className="newsearch"> New Search </button> </a>

        <div className="result"> {this.state.result} </div>

      </div>
    );
  }
}


export default InputField;
