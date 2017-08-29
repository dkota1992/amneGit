import React from 'react';

class PlaceItem extends React.Component{
  render(){
    return(
      <div>
        <img src={this.props.place.icon} alt="Image Log0" />
        <em>{this.props.place.name}</em> - <span style={{color: "#617ba5"}}>{this.props.place.formatted_address}</span>
      </div>
    );
  }
}

export default PlaceItem;
