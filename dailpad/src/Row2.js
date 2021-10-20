import React, { Component } from "react";

class Row2 extends React.Component {
  render() {
    return <div className="Row2">
        <button type="button" class="button button1">1<br/><span></span></button>
        <button type="button" class="button button1">2<br/><span>ABC</span></button>
        <button type="button" class="button button1">3<br/><span>DEF</span></button>
    </div>;
  }
}
export default Row2;