import React from "react"
import Chart from "react-apexcharts";
require("dotenv").config()

// Package to interact with ALpha API
var Alpha = require("alpha_vantage_api_wrapper").Alpha;
var alpha = new Alpha("process.env.alphaKEY");

import StockChart from "../Apexcharts/Apexcharts"


function SingleChart() {
    return (
        <SingleChart/>
    )
}

export default SingleChart;