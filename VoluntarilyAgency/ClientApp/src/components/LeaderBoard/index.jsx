import React, { Component } from 'react';

export default class LeaderBoard extends Component {
    render() {
        return (
            <div>
                <h1>{"Leaderboard"}</h1>
                <div>
                    <p>Period</p>
                    <select>
                        <option value="1-month">1 month</option>
                        <option value="1-year">1 year</option>
                        <option value="all-time">All Time</option>
                    </select>
                </div>
            </div>
        );
    }
}
