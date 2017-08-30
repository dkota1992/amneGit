import React from "react";

var filePath = {
  newfeature: require("./Amne\ Proposal.docx"),
  rawfile: require("./amneGit.rar")
};

const logoStyle = {
  margin: "20px 0 0 0",
  height: '3em',
  width: '8em'
};

const downloadLink = {
  float: 'right',
  margin: "20px 40px 10px 20px"
}

class Home extends React.Component{
  render(){
    return (
        <img style={logoStyle} src={require("../img/Index_logo.png")} alt="Logo"/>
    );
  }
}

class NavBar extends React.Component{
  render(){
    return (
      <div>
      <Home />
      <Download displaytext="Download Raw" source={filePath.rawfile} />
      <Download displaytext="New Feature Proposal" source={filePath.newfeature}/>
      </div>
    );
  }
}

class Download extends React.Component{
  render(){
    return(
    <div style={downloadLink}>
    <a href={this.props.source} download> {this.props.displaytext} </a>
    </div>
    );
  }
}

export default NavBar;
