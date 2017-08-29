import React from 'react';
import PlaceItem from './PlaceItem.js';

class Places extends React.Component{
  render(){
    let items;
    if (this.props.places){
      items = this.props.places.map(places => {
        return(
        <PlaceItem place={places}/>
      );
    });
  }
    return(
      <div className="Places">
        <h5> {items} </h5>

      </div>
    );
  }
}

export default Places;
