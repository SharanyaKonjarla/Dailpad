import React, { Component } from "react";
import Rowcomb from "./Rowcomb";
import "./keypad.css"

class Keypad extends React.Component {
  render() {
    return (
        <div className="Keypad"> 
        
     <Rowcomb/></div>
    );
  }
}

export default Keypad;