import React from 'react';
import axios from 'axios';
import SearchPlace from "./SearchPlaces.js"

var key = 'AIzaSyAPiTf3PgAhAI1iFblJrTlt8GXbHOgJXQ0'

class FetchData extends React.Component{
  constructor(props){
    super(props);
    this.state = {firstAddress : "", secondAddress: "", radius: this.props.state.radius, type: this.props.state.searchterm};
  }

  componentShouldUpadate(){
    return ((this.props.secondAddress.status === "OK") && (this.props.firstAddress.status === "OK"));
  }

  componentWillMount()
  {
    console.log("Mounted");
    var url = 'https://maps.googleapis.com/maps/api/geocode/json';
    this.updateInputState(url,this.props.state.secondAddress,"secondAddress");
    this.updateInputState(url,this.props.state.firstAddress,"firstAddress");
  }


  updateInputState(url,location,id){
    var self = this;
    var state = this.state;
    axios.get(url,{
      params: {
        address: location,
        key: key
      }
    })
    .then(function (response) {
      state[id] = response.data;
       self.setState(state);
     })
     .catch(function(error){
       console.log(error);
     });
  }

  render(){
    var places = ""
    if ((this.state.secondAddress.status === "OK") && (this.state.firstAddress.status === "OK")){
      places = <SearchPlace state={this.state} />
      console.log("Rendered");
    }
    return(
      <div style={{width:300, height:300, backgroundColor:"green"}}>
        {places}

      </div>
    );
  }
}





export default FetchData;
