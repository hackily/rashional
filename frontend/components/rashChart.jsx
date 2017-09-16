import React from 'react';
import {BarChart} from 'react-easy-chart';
const rashChart = require('./rashChart.css')


class RashChart extends React.Component {
  constructor (props) {
    super()
    this.state = {data: props.data};
  }

  updateChart () {
    console.log("Data called!", this.state, this.state.data[0].y)
    this.forceUpdate()
  }

  render () {
    return <div id="graph">
      <BarChart
    colorBars
    axisLabels={{x: 'Rash Source', y: 'Estimated Probability of Cause'}}
    axes
    height = {500}
    width = {window.innerWidth * 0.8}
    data = {this.state.data}
    yDomainRange={[0,100]}
    />
    </div>
  }
}

module.exports = RashChart;
