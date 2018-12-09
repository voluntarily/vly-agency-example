import React, { Component } from 'react';
import ReactTable from "react-table";
import "./tablecss.css";
import img from "../../images/img.png";

export default class LeaderBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            tableData: {}
        };
    }
    
    componentWillMount(){
        fetch("api/company/LeaderBoard")
        .then(data => {  
            console.log(data)
        })
    }
    
    render() {
        
        return (
            <div>
                <h1>{"Leaderboard"}</h1>
                  <img style={{height: "750px", width: "100%"}} src={img}/>
       
                
            </div>
        );
    }
}
