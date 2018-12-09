import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ddd"
        }}
      >
        <h1 style={{
        padding : "20px", fontSize:"100px"}}>THE BIG NUMBERS</h1>
        <div
          style={{
            height: 300,
            width: "100%",
            display: "flex"
          }}
        >
          <div
            style={{
              flex: 1,
              background: "white",
              height: "280px",
              margin: "10px",
              borderRadius: 4
            }}
          >
            <div style={{ color: "grey", marginLeft: 20, marginTop: 10 }}>
              <h1>Volunteer hours</h1>
            </div>
            <div
              style={{
                color: "black",
                fontSize: 100,
                fontWeight: 900,
                marginLeft: 20
              }}
            >
              {Math.floor((Math.random() * 1000) + 1000)}
            </div>
            
          </div>
          <div
            style={{
                flex: 1,
                background: "white",
                height: "280px",
                margin: "10px",
                borderRadius: 4
            }}
          >
                      <div style={{ color: "grey", marginLeft: 20, marginTop: 10 }}>
              <h1>Total Students</h1>
            </div>
            <div
              style={{
                color: "black",
                fontSize: 100,
                fontWeight: 900,
                marginLeft: 20
              }}
            >
               {Math.floor((Math.random() * 100) + 350)}
            </div>
            </div>
        </div>
        <div
          style={{
            height: 300,
            width: "100%",
            display: "flex"
          }}
        >
          <div
            style={{
              flex: 1,
              background: "white",
              height: "280px",
              margin: "10px",
            }}
          >
                      <div style={{ color: "grey", marginLeft: 20, marginTop: 10 }}>
              <h1>Schools</h1>
            </div>
            <div
              style={{
                color: "black",
                fontSize: 50,
                fontWeight: 900,
                marginLeft: 20
              }}
            >
               {Math.floor((Math.random() * 100) + 1)}
            </div>
            
          </div>
          <div
            style={{
              flex: 1,
              background: "white",
              height: "280px",
              margin: "10px"
            }}
          >
                      <div style={{ color: "grey", marginLeft: 20, marginTop: 10 }}>
              <h1>Programmes</h1>
            </div>
            <div
              style={{
                color: "black",
                fontSize: 50,
                fontWeight: 900,
                marginLeft: 20
              }}
            >
               {Math.floor((Math.random() * 100) + 1)}
            </div>
            </div>
          <div
            style={{
              flex: 1,
              background: "white",
              height: "280px",
              margin: "10px"
            }}
          >
                      <div style={{ color: "grey", marginLeft: 20, marginTop: 10 }}>
              <h1>Volunteers</h1>
            </div>
            <div
              style={{
                color: "black",
                fontSize: 50,
                fontWeight: 900,
                marginLeft: 20
              }}
            >
               {Math.floor((Math.random() * 100) + 30)}
            </div>
            </div>
        </div>
      </div>
    );
  }
}
