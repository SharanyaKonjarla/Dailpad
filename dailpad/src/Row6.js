import React, { Component } from "react";
import './Button.css';


class Row6 extends React.Component {
  render() {
    return (
      <div className="Row6">
        <button type="button" icon="fa-solid fa-plus"   class="button button1"><i class="fas fa-plus"></i></button>
        
        <button type="button" class="button button1" ><i class="fas fa-phone-alt"></i></button>
        <button type="button" class="button button1"><i class="fas fa-arrow-left"></i></button>
        
      </div>
    );
  }
}

export default Row6;