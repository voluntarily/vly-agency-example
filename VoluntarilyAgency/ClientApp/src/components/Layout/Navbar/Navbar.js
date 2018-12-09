import React, { Component } from 'react'
import logo from '../../../images/logo.png'

export default class Navbar extends Component {
  render() {
    return (
<div style={{
        flex: '0 0 50px',
        background: '#ff5d00',
        display: 'flex',
        alignItems: 'stretch'
      }}>
        <span style={{
          flex: '0 0 10%',

        }}><img style={{height:"50px"}} src={logo} /></span>
        <ul style={{
          listStyleType: 'none',
          marginLeft: 'auto',
          paddingLeft: '20px',
          display: 'flex',
            height: '100%',
            fontSize: 30,
            color: 'white'

        }}>
          <li style={{
            display: 'inline-block',
            height: '100%',
            borderBottom: '1px solid white',
            padding: '0 10px'
          }}>DASHBOARD</li>
          <li style={{
            display: 'inline-block',
            height: '100%',
            padding: '0 10px'
            }}>PROFILE</li>

        </ul>
      </div>
    )
  }
}
