import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps'
import axios from 'axios';
var key = 'AIzaSyAPiTf3PgAhAI1iFblJrTlt8GXbHOgJXQ0'
class FetchData extends React.Component{
  constructor(props){
    super(props);
    this.state = {firstAddress : "", secondAddress: "", firstAddressFetch: "", secondAddressFetch: ""};
  }

  componentDidMount(){
    console.log("Wassup Assole");
  }

  componentWillMount(){
    var location = this.props.state.firstAddress;
    var self = this;
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
      params: {
        address: location,
        key: key
      }
    })
    .then(function (response) {
      console.log(response);
      console.log(response.data);
       self.setState({firstAddress: response.data});
     })
     .catch(function(error){
       console.log(error);
     });
}

  render(){
    return(
      <div style={{width:300, height:300, backgroundColor:"green"}}>
          {this.state.firstAddress.status}
      </div>
    );
  }
}





export default FetchData;
