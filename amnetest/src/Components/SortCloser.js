import React from 'react';
import SortedItem from "./SortedItem";

class SortCloser extends React.Component{
  constructor(props){
    super(props);
    this.state = {distance: this.props.distance, destinations: this.props.destinations}
    this.objectify = this.objectify.bind(this);
  }

  sort(arr){
    arr.sort(function(a, b) {
    return (a.distances.sum).localeCompare(b.distances.sum)
    });
    return arr;
  }

  componentWillMount(){

  }

  objectify(){
    var unSorted = [];
    var temp = "";
    for(var i=0; i<this.state.destinations.length; i++){
      temp = {formatted_address :this.state.distance.destination_addresses[i], location: this.state.destinations[i].name,
          distances:{from_origin1: this.state.distance.rows[0].elements[i].distance.text,
              from_origin2: this.state.distance.rows[1].elements[i].distance.text,
              sum: String(Number(parseFloat(this.state.distance.rows[0].elements[i].distance.text) +
                  parseFloat(this.state.distance.rows[1].elements[i].distance.text)).toFixed(1))+ " km"}};

      unSorted.push(temp);
    }
    return unSorted;
  }

  render(){
    let items;
    var unsorted = this.objectify();
    var sorted = this.sort(unsorted);
    items = sorted.map(places => {
      return(
      <SortedItem place={places} origin={this.state.distance.origin_addresses}/>
    );
  })
    return(
      <div>
      {items}
      </div>
    );
  }
}

export default SortCloser;
