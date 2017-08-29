import React from 'react';

class SortedItem extends React.Component{
  render(){
    return(
      <div>
        <h3>{this.props.place.location}</h3> - <span style={{color: "#617ba5"}}>{this.props.place.formatted_address}</span>
        <br/> <i> Distance from {this.props.origin[0]} - <span style={{color :"red"}}>{this.props.place.distances.from_origin1}</span>
        Distance from {this.props.origin[1]} - <span style={{color: "red"}}>{this.props.place.distances.from_origin2}</span> </i>
      </div>
    );
  }
}

export default SortedItem;
