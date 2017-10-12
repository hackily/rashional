import React from 'react';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
//const rashChart = require('./rashChart.css');


class RashChart extends React.Component {
  constructor (props) {
    super();
    this.state = {data: props.data};
  }

  updateChart () {
    this.forceUpdate();
  }

  render () {
    return <div id="graph">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart 
          data={this.state.data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis domain={[0, 100]}/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Bar dataKey="c" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>;
  }
}

module.exports = RashChart;
