import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
        <div style={{
                flex: '0 0 20%',
                listStyleType: 'none',
                marginLeft: 'auto'
              }}>
              <ul
               style={{
                  padding:"20px",
                  margin: "20px"
               }}>
                <a href = "/"> <li style={{
                  display: 'block'
                }} >Dashboard</li> </a>
        
                <a href = "map"><li style={{
                  display: 'block'
                }} >Map</li> </a>
        
                <a href = "leaderboard"><li style={{
                  display: 'block'
                }} >Leaderboard</li></a>

                 <a href = "interactions"><li style={{
                  display: 'block'
                }} >Interactions</li></a>


              </ul>
        </div>
    )
  }
}
