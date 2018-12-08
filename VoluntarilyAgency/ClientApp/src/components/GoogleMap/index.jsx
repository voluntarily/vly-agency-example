import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
 
export class GoogleMap extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} style={{
          height: `${window.innerHeight - 50}px`,
          width: '80%'
      }}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{"Map"}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCEV_86C4SB38irIRbxTprWwKtJk6PqPG8")
})(GoogleMap)