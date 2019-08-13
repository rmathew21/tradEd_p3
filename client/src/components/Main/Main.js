import React, { Component } from "react";
import Dashboard from "../Dashboard/Dashboard";

class Main extends Component {
    state = {
        q: "",
        companies: []
    };

    render() {
        return (
            <div>
            <Dashboard />

            </div>
        );
    };
};

export default Main;