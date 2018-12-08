import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
        <ul style={{
            flex: '0 0 20%',
            listStyleType: 'none',
            marginLeft: 'auto'
          }}>
            <li style={{
              display: 'block'
            }} >Item 1</li>
    
            <li style={{
              display: 'block'
            }} >Item 1</li>
    
            <li style={{
              display: 'block'
            }} >Item 1</li>
    
            <li style={{
              display: 'block'
            }} >Item 1</li>
          </ul>
    )
  }
}
