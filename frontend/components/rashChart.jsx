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
    return <BarChart id="rashChart" data={this.state.data}/>
  }

}

module.exports = RashChart;
