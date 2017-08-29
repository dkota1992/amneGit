import React from 'react';
import axios from 'axios';
import Places from "./Places.js";
import _ from "lodash";

var key = 'AIzaSyAPiTf3PgAhAI1iFblJrTlt8GXbHOgJXQ0'

class SearchPlace extends React.Component{
  constructor(props){
    super(props);
    this.state = {firstAddress: this.props.state.firstAddress, secondAddress:this.props.state.secondAddress,
    firstAddressFetch: "", secondAddressFetch: ""};
    this.avoidDuplicates = this.avoidDuplicates.bind(this);
  }

  render(){
    var places = "";
    if (this.state.secondAddressFetch.status === "OK"){
      var places = this.avoidDuplicates();
      console.log(this.avoidDuplicates());
      places = <Places places={places} />;
    }
    return(
      <div > {places} </div>
    );
  }



  avoidDuplicates(){
    var hashesFound = {};
    var places_array = (this.state.secondAddressFetch.results).concat(this.state.firstAddressFetch.results);

    places_array.forEach(function(o){
        hashesFound[o.id] = o;
    })

    var results = Object.keys(hashesFound).map(function(k){
        return hashesFound[k];
    })
  return results;
  }

  componentWillMount(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = "https://maps.googleapis.com/maps/api/place/textsearch/json";
    var first_address = this.state.firstAddress.results[0].geometry.location.lat + "," +
                  this.state.firstAddress.results[0].geometry.location.lng;
    var second_address = this.state.secondAddress.results[0].geometry.location.lat + "," +
                  this.state.secondAddress.results[0].geometry.location.lng;
    console.log(first_address,second_address, 44);
    this.updateFetch(proxyurl+url,first_address,"firstAddressFetch");
    this.updateFetch(proxyurl+url,second_address,"secondAddressFetch");

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
