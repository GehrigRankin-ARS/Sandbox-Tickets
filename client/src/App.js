import React, { Component } from 'react';
import CollapsibleMenu from './components/CollapsibleMenu'
import './App.css';

import checkInsurance from './util'

class App extends Component {
  state = {
    results: "",
    resultType: ""
  }

  handleAvailityClick = () => {
    this.setState({results: "loading...", resultType: "Availity"})
    checkInsurance().then(res => {
      this.setState({results: JSON.stringify(res)})
      console.log(res)
    })
  }
  
  handleLocalFileClick = () => {
    this.setState({results: <a onClick={this.openLocalFile}>W:\ASC\2018\AVH - Avonhealth, LLC\Active\Dr Bonilla\Adams, Susan AVH-ADAS112018NE</a>, resultType: "Local File"})
  }
  
  handleCollapsibleClick = () => {
    this.setState({results: <CollapsibleMenu  />, resultType: "Collapsible Menu"})
  }

  render() {
    return (
      <div className="App">
        <div className="Buttons">
          <button className="shadowTransition IIONS_button" onClick={this.handleAvailityClick}>Availity API</button>          
          <button className="shadowTransition IIONS_button" onClick={this.handleLocalFileClick}>Local File Link</button>
          <button className="shadowTransition IIONS_button" onClick={this.handleCollapsibleClick}>Collapsible Menu</button>          
        </div>

        <div className="results">
          { this.state.resultType ? <p>{`${this.state.resultType} results:`}</p> : <div></div> } 
          { this.state.results ? this.state.results : <div>no results</div> }
        </div>
      </div>
    );
  }
}

export default App;
