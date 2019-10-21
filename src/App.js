import React, { Component } from "react";
import "./App.css";

import Chart from "./components/Chart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      signal: [],
      charts: {}
    };
  }

  componentDidMount() {
    this.fetchFeed();
  }

  async fetchFeed() {
    const response = await fetch(
      "http://www.mocky.io/v2/5dad82cf2d00006e00e4ba69"
    );
    const data = await response.json();

    this.setState({
      data: data.data,
      signal: data.signal
    });
    this.setState(prevState => ({
      charts: {
        ...prevState.charts,
        dataChart: {
          id: "x-reading",
          labels: [...Array(this.state.data.length).keys()],
          datasets: [
            {
              label: "Reading",
              fill: false,
              lineTension: 0,
              backgroundColor: "#4F94CD",
              borderColor: "#4F94CD",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "#ffff00",
              pointHoverBorderColor: "#654321",
              pointHoverBorderWidth: 2,
              pointRadius: 2,
              data: data.data,
              spanGaps: true
            }
          ]
        },
        signalChart: {
          id: "x-signal",
          labels: [...Array(this.state.signal.length).keys()],
          datasets: [
            {
              label: "Signal",
              fill: true,
              lineTension: 0,
              backgroundColor: "#4F94CD",
              borderColor: "#4F94CD",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "#ffff00",
              pointHoverBorderColor: "#654321",
              pointHoverBorderWidth: 2,
              pointRadius: 2,
              data: data.signal,
              spanGaps: true
            }
          ]
        }
      }
    }));
  }

  render() {
    return (
      <div id="charts-wrapper">
        <div className="header-wrapper">
          <div className="main-heading">
            <h1>Instrument X Data</h1>
          </div>
          <div>
            {this.state.data && <input
              type="button"
              className="app-button"
              value="Reload Data"
              onClick={() => {
                this.fetchFeed();
              }}
            />}
          </div>
          <div>
          {this.state.data && <input
              type="button"
              className="app-button"
              value="Print"
              onClick={() => {
                window.print();
              }}
            />  } 
          </div>
        </div>

        {Object.values(this.state.charts).map(chart => {
          return <Chart key={chart.id} data={chart} />;
        })}
      </div>
    );
  }
}

export default App;
