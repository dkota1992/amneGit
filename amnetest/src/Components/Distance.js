import React from 'react';
import axios from 'axios';

var key = 'AIzaSyAPiTf3PgAhAI1iFblJrTlt8GXbHOgJXQ0';

class Distance extends React.Component{
  constructor(props){
    super(props);
    this.state= {firstAddress: this.props.origin1, secondAddress: this.props.origin2};
    this.distance = this.distance.bind(this);
    this.destinations = this.destinations.bind(this);
  }


  componentWillMount(){
    console.log(this.props,this.state);

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
      console.log(state)
       self.setState(state);
     })
     .catch(function(error){
       console.log(error);
     });
  }

    render(){
      return(
        <div> Hello </div>
      );
    }
  }
export default Distance;
