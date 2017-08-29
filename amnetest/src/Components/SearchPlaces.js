import React from 'react';
import axios from 'axios';
import Places from "./Places.js";

var key = 'AIzaSyAPiTf3PgAhAI1iFblJrTlt8GXbHOgJXQ0'

class SearchPlace extends React.Component{
  constructor(props){
    super(props);
    this.state = {firstAddress: this.props.state.firstAddress, secondAddress:this.props.state.secondAddress,
    firstAddressFetch: "", secondAddressFetch: ""};
    console.log(this.state);
  }

  render(){
    var places = "";
    if (this.state.secondAddressFetch.status === "OK"){
      var places = (this.state.secondAddressFetch.results).concat(this.state.firstAddressFetch.results)
      places = <Places places={places} />;
    }
    return(
      <div > {places} </div>
    );
  }

  componentWillMount(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
    this.updateFetch(proxyurl+url,"38.9974224,-76.8692602","firstAddressFetch");
    this.updateFetch(proxyurl+url,"38.9974224,-76.8692602","secondAddressFetch");
    console.log(this.state);


  }

  updateFetch(url,location,id){
    var self = this;
    var state = this.state;
    axios.get(url,{
      params: {
        location: location,
        radius: self.props.state.radius+"00",
        type: self.props.state.type,
        key: key
      }
    })
    .then(function (response) {
      state[id] = response.data;
      console.log(state)
       self.setState(state);
     })
     .catch(function(error){
       console.log(error);
     });
  }
}

export default SearchPlace;
