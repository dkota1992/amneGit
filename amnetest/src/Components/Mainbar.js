import React from "react";
import DownloadLink from 'react-download-link';

const logoStyle = {
  margin: "20px 0 0 0",
  height: '3em',
  width: '8em'
};

const downloadLink = {
  float: 'right',
  margin: "20px 40px 50px 60px"
}

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
      <RawFile />
      </div>
    );
  }
}

class NewFeature extends React.Component{
  render(){
    return(
    <div style={downloadLink}>
    <a href={require("./API_Key.txt")} download> New Feature Proposal </a>
    </div>
    );
  }
}

class RawFile extends React.Component{
  render(){
    return(
    <div style={downloadLink}>
    <a href={require("./API_Key.txt")} download> Download Raw File </a>
    </div>
    );
  }
}



export default NavBar;
