import React, { Component } from "react";
// import "./App.css";
// import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";
require("dotenv").config()

// Package to interact with ALpha API
var Alpha = require("alpha_vantage_api_wrapper").Alpha;
var alpha = new Alpha("process.env.alphaKEY");

class Stockchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-line",
          height: 175,
          width: "95%",
          stacked: false
        },
        xaxis: {
          type: "categories",
          labels: {
            show: false,
            trim: true,
            hideOverlappingLabels: true
          },
          tickAmount: 12,
          axisTicks: {
            show: false,
            borderType: "solid",
            color: "#78909C",
            height: 6,
            offsetX: 0,
            offsetY: 0
          },
          
          categories: []
        },
        title: {
          text: props.Symbol,
          align: "center"
        }
      },
      series: [
        {
          name: "Price",
          data: []
        }
      ],
      Symbol: props.Symbol
    };
  }

  componentDidMount() {
    const self = this;

    alpha.stocks
      .intraday(this.state.Symbol)
      .then(response => {
        // Do what you want with the data
        console.log(response);

        const timeArr = Object.keys(response["Time Series (5min)"]); //This is an array of the dates
        const newTimeArr = timeArr.reverse();
        console.log(newTimeArr);

        const ValzArr = Object.values(response["Time Series (5min)"]); //This is an array of the values of each key in time series object
        const priceArr = [];

        ValzArr.forEach(obj => {
          const closePrice = parseFloat(obj["4. close"]); //Declare/Grabs the close price of each object in array
          // console.log(closePrice)
          priceArr.push(closePrice); //Pushes the close price to a new array
        }); //closes the foreach function

        const newPriceArr = priceArr.reverse();
        console.log(newPriceArr);

        self.setState(prevState => ({
          options: {
            ...prevState.options,
            ...prevState.options,
            xaxis: {
              ...prevState.options.xaxis,
              categories: newTimeArr
            }
            // categories: newTimeArr
          },
          series: [
            {
              ...prevState.series,
              data: newPriceArr
            }
            // data: newPriceArr
          ]
          // data: newPriceArr
        }));
      }) //closes the .then promise
      .catch(err => {
        // Handle the error
        console.log(`Error occurred at: ${err}`);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="container">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
                width={this.state.options.chart.width}
                height={this.state.options.chart.height}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stockchart;
