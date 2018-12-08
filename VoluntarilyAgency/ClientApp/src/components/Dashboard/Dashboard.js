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
        <h1>Lorem bla bla</h1>
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
              Hours
            </div>
            <div
              style={{
                color: "black",
                fontSize: 100,
                fontWeight: 900,
                marginLeft: 20
              }}
            >
              129
            </div>
            <button
              style={{
                background: "orange",
                padding: 10,
                marginTop: 40,
                marginLeft: 20
              }}
            >
              View Details
            </button>
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
              Hours
            </div>
            <div
              style={{
                color: "black",
                fontSize: 100,
                fontWeight: 900,
                marginLeft: 20
              }}
            >
              129
            </div>
            <button
              style={{
                background: "orange",
                padding: 10,
                marginTop: 40,
                marginLeft: 20
              }}
            >
              View Details
            </button></div>
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
              Hours
            </div>
            <div
              style={{
                color: "black",
                fontSize: 50,
                fontWeight: 900,
                marginLeft: 20
              }}
            >
              129
            </div>
            <button
              style={{
                background: "orange",
                padding: 10,
                marginTop: 10,
                marginLeft: 20
              }}
            >
              View Details
            </button>
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
              Hours
            </div>
            <div
              style={{
                color: "black",
                fontSize: 50,
                fontWeight: 900,
                marginLeft: 20
              }}
            >
              129
            </div>
            <button
              style={{
                background: "orange",
                padding: 10,
                marginTop: 10,
                marginLeft: 20
              }}
            >
              View Details
            </button></div>
          <div
            style={{
              flex: 1,
              background: "white",
              height: "280px",
              margin: "10px"
            }}
          >
                      <div style={{ color: "grey", marginLeft: 20, marginTop: 10 }}>
              Hours
            </div>
            <div
              style={{
                color: "black",
                fontSize: 50,
                fontWeight: 900,
                marginLeft: 20
              }}
            >
              129
            </div>
            <button
              style={{
                background: "orange",
                padding: 10,
                marginTop: 10,
                marginLeft: 20
              }}
            >
              View Details
            </button></div>
        </div>
      </div>
    );
  }
}
