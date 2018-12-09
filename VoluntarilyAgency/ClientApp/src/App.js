import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Layout from "./components/Layout";
import Map from "./components/Map/";
import Dashboard from "./components/Dashboard";
import LeaderBoard from "./components/LeaderBoard";
import Interactions from "./components/Interactions";


class App extends Component {
    componentWillMount() {
        console.log("data");
        fetch('api/SampleData/WeatherForecasts')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ forecasts: data, loading: false });
            });
    }
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    width: "100vw",
                    justifyContent: "stretch"
                }}
                className="App"
            >
                <Layout>
                    <Router>
                        <div
                            style={{
                                flex: "0 0 80%"
                            }}
                        >
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/map" component={Map} />
                            <Route path="/leaderboard" component={LeaderBoard} />
                            <Route path="/interactions" component={Interactions} />

                        </div>
                    </Router>
                </Layout>
            </div>
        );
    }
}

export default App;
