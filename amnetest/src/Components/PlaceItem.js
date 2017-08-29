import React from 'react';

class PlaceItem extends React.Component{
  render(){
    return(
      <li className="Projects">
        <em>{this.props.place.id}</em> - {this.props.place.name} 
      </li>
    );
  }
}

export default PlaceItem;
