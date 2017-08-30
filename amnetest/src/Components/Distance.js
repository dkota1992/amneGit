import React from 'react';
import axios from 'axios';
import SortCloser from "./SortCloser";

var key = "AIzaSyDN-my3Pi1wsJyYxT8EZa2mSMEFJxkWwUk"

class Distance extends React.Component{
  constructor(props){
    super(props);
    this.state= {firstAddress: this.props.origin1, secondAddress: this.props.origin2, distance: ""};
    this.distance = this.distance.bind(this);
    this.destinations = this.destinations.bind(this);
  }


  componentWillMount(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = "https://maps.googleapis.com/maps/api/distancematrix/json?";
    var first_address = this.state.firstAddress.results[0].geometry.location.lat + "," +
                  this.state.firstAddress.results[0].geometry.location.lng;
    var second_address = this.state.secondAddress.results[0].geometry.location.lat + "," +
                  this.state.secondAddress.results[0].geometry.location.lng;
    var destinations = this.destinations();
    this.distance(proxyurl+url,first_address+"|"+second_address,destinations,"distance");

  }

  destinations(){
    var destination = "";
    var latlong = "";
    for(var i=0; i<this.props.destinations.length; i++){
      latlong = this.props.destinations[i].geometry.location.lat + "," + this.props.destinations[i].geometry.location.lng;
      destination = destination + latlong + "|";
    }
    return destination;
  }

  distance(url, origins,destinations,id){
    var self = this;
    var state = this.state;
    axios.get(url,{
      params: {
        origins: origins,
        destinations: destinations,
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
      var sorted = "";
      if (this.state.distance.status === "OK"){
        sorted = <SortCloser distance={this.state.distance} destinations={this.props.destinations}/>
      }
      return(
        <div> {sorted} </div>
      );
    }
  }
export default Distance;
