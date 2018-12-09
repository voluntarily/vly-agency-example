import React, { Component } from 'react';
import img from "../../images/inter.jpeg";

export default class Interactions extends Component {
 render() {

    return (
      <div
      style ={{ 
                padding: "20px",
                margin: "20px"}}>
                
        <img style={{height: "750px", width: "100%"}} src={img}/>
      </div>
    );
  }
}
 
