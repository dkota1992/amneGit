import React from 'react';
import axios from 'axios';
import Places from "./Places.js";
import Distance from "./Distance";

var key = 'AIzaSyCUaItdUlBQhdXQ-dCSfrWadhxXw_D6AEk';

class SearchPlace extends React.Component{
  constructor(props){
    super(props);
    this.state = {firstAddress: this.props.state.firstAddress, secondAddress:this.props.state.secondAddress,
    firstAddressFetch: "", secondAddressFetch: ""};
    this.avoidDuplicates = this.avoidDuplicates.bind(this);
  }

  render(){
    var places = "";

    if ((this.state.secondAddressFetch.status === "OK") && (this.state.firstAddressFetch.status === "OK")){
      places = this.avoidDuplicates();
      var distance = <Distance destinations={places} origin1={this.state.firstAddress} origin2={this.state.secondAddress} />;
      places = <Places places={places} />;
    }
    return(
      <div > {distance}
       </div>
    );
  }



  avoidDuplicates(){
    var hashesFound = {};
    var places_array = (this.state.secondAddressFetch.results).concat(this.state.firstAddressFetch.results);

    places_array.forEach(function(o){
      if(o.id){
        hashesFound[o.id] = o;
      }
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
       self.setState(state);
     })
     .catch(function(error){
       console.log(error);
     });
  }
}

export default SearchPlace;
