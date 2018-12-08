import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

export default class Layout extends Component {
  render() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', justifyContent: 'stretch' }}>
        <Navbar />
        <div style={{
          display: 'flex',
          flex: '1',
          flexDirection: 'row'
        }}>
          <Sidebar />
          {this.props.children}
        </div>
      </div>
    )
  }
}
