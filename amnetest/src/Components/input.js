import React from 'react';
import Autocomplete from 'react-google-autocomplete';

const buttonStyle = {
  margin: "20px 20px 20px 20px",
  backgroundColor: "orange"
};

class InputField extends React.Component{
  constructor(props){
    super(props);
    this.state = {firstAddress: "", secondAddress:""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    var text = e.target.value;
    var oldState = this.state;
    if (e.target.getAttribute("id") === "firstAddress"){
      this.setState({firstAddress : text, secondAddress: oldState.secondAddress});
    }
    else{
      this.setState({firstAddress: oldState.firstAddress, secondAddress: text});
    }
    e.preventDefault();
  }

  render(){
    return(
      <div>
        <h4>First Address </h4>
        <input onChange={this.handleChange} type="text" id="firstAddress" value={this.props.value} />
        <h5>{this.state.firstAddress} </h5>
        <h4>Second Address </h4>
        <input onChange={this.handleChange} type="text" id="secondAddress" value={this.props.value} />
        <h5>{this.state.secondAddress} </h5>
        <button style={buttonStyle} onClick={this.handleSubmit}>Fetch Agencies </button>
      </div>
    );
  }
}


export default InputField;
