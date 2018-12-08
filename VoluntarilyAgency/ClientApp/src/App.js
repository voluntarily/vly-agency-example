import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import GoogleMap from "./components/GoogleMap/GoogleMap";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

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
                            <Route path="/map" component={GoogleMap} />
                        </div>
                    </Router>
                </Layout>
            </div>
        );
    }
}

export default App;
