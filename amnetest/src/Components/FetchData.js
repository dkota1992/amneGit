import React from 'react';

class FetchData extends React.Component{
  render(){
    return(
      <h1>{this.props.address.firstAddress}</h1>
    );
  }
}


export default FetchData;
