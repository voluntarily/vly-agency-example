import React, { Component } from 'react';
import ReactTable from "react-table";
import "./tablecss.css";

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
                <div style ={{  
                        padding: "20px",
                        margin: "20px"}}>
                    <ReactTable
                      columns={[
                        {
                          Header: "Leaderboard",
                          columns: [
                            {
                              Header: "Rank",
                              accessor: "rank"
                            },
                            {
                              Header: "Company",
                              id: "company",
                            },
                             {
                              Header: "Impact Rating",
                              id: "rating",
     
                            },
                             {
                              Header: "Days Pledged",
                              id: "daysPledged",
                            },
                             {
                              Header: "Days Pledged (Persoal)",
                              id: "daysPledged",
     
                            },
                            {
                              Header: "Points",
                              id: "points",
     
                            }
                            
                          ]
                        }
                       
                        
                      ]}
                      defaultPageSize={15}
                      className="-striped -highlight"
                    />
                 </div>
                
            </div>
        );
    }
}
