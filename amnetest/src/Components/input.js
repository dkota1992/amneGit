import React from 'react';
import Autocomplete from 'react-google-autocomplete';

class InputField extends React.Component{
  constructor(props){
    super(props);
    this.state = {textValue : ""};
  }

  handlechange(e){
    this.setState({textValue: e.target.value});
    e.preventDefault();
  }

  render(){
    return(
      <div>
        <input onChange={this.handlechange.bind(this)} type="text" />
        <h3>{this.state.textValue} </h3>
      </div>
    );
  }
}


export default InputField;
