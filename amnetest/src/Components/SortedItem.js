import React from 'react';

class SortedItem extends React.Component{
  render(){
    return(
      <div>
        <em>{this.props.place.location}</em> - <span style={{color: "#617ba5"}}>{this.props.place.formatted_address}</span>
      </div>
    );
  }
}

export default SortedItem;
