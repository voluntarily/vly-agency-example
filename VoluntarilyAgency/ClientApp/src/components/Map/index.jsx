import React, { Component } from 'react';
import PowerbiEmbedded from 'react-powerbi';


 
export default class Map extends Component {
  render() {
    return (
        <div
         style={{
          width: "100%",
          height: "100%",
          background: "#ddd"
        }}>
            <iframe style ={{  
                        padding: "20px",
                        margin: "20px"}} height="700px" width="100%" src="https://app.powerbi.com/view?r=eyJrIjoiZDUzZGNiNWItOGNjNi00OWFiLWE1MGYtNDViZGE5OWUwZjMzIiwidCI6IjIzNGMwNzY4LTQ3NTQtNDE0ZS1hNmQ1LWUzODY1NjI4YTQ3ZCJ9" frameborder="0" allowFullScreen="true"></iframe>
            <div></div>
        </div>
    );
  }
}
 
