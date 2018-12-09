import React, { Component } from 'react';
import ReactTable from "react-table";
import "./tablecss.css";

export default class LeaderBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            tableData: []
        };
    }
    
    componentWillMount(){
        fetch('api/Company')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(data[0])
                this.setState({
                    tableData: data
                })
            });
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
                              Header: "Company",
                              id: "company",
                              accessor: "company_name"
                            },
                             {
                              Header: "Impact Rating",
                              id: "rating",
                            },
                             {
                              Header: "Days Pledged",
                              id: "company_hours",
                            },
                             {
                              Header: "Days Pledged (Persoal)",
                              id: "daysPledged",
                              accessor: "employee_hours"
     
                            },
                            {
                              Header: "Points",
                              id: "points",
                              accessor: "points"
                            }
                            
                          ]
                        }
                       
                        
                      ]}
                      defaultPageSize={15}
                      className="-striped -highlight"
                        data={this.state.tableData}
                    />
                 </div>
                
            </div>
        );
    }
}
