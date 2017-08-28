import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps'
import axios from 'axios';
var key = 'AIzaSyAPiTf3PgAhAI1iFblJrTlt8GXbHOgJXQ0'
class FetchData extends React.Component{
  constructor(props){
    super(props);
    this.state = {firstAddress : "", secondAddress: "", firstAddressFetch: "", secondAddressFetch: ""};
  }


  componentWillMount(){
    console.log(this.state);
    var url = 'https://maps.googleapis.com/maps/api/geocode/json';
    this.updateInputState(url,this.props.state.secondAddress,"secondAddress");
    this.updateInputState(url,this.props.state.firstAddress,"firstAddress");
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
    this.updateFetch(proxyurl+url,"38.9974224,-76.8692602","firstAddressFetch");
    console.log(this.state);

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
      console.log(state)
       self.setState(state);
     })
     .catch(function(error){
       console.log(error);
     });
  }

  updateFetch(url,location,id){
    var self = this;
    var state = this.state;
    axios.get(url,{
      params: {
        location: location,
        radius: 1000,
        type: this.props.state.searchterm,
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
      <div style={{width:300, height:300, backgroundColor:"green"}}>
          {this.state.firstAddress.status}
          {this.state.firstAddressFetch.status}

      </div>
    );
  }
}





export default FetchData;
