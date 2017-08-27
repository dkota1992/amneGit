import React from "react";
import DownloadLink from 'react-download-link';

const logoStyle = {
  margin: "20px 0 0 0",
  height: '3em',
  width: '8em'
};

class Home extends React.Component{
  render(){
    return (
        <img className = "container" style={logoStyle} src={require("../img/Index_logo.png")} alt="Logo"/>
    );
  }
}

class NavBar extends React.Component{
  render(){
    return (
      <div>
      <Home />
      <NewFeature />
      </div>
    );
  }
}

class NewFeature extends React.Component{
  render(){
    return(
      <a href="API_Key.txt" download> Download raw </a>
    );
  }
}


export default NavBar;
