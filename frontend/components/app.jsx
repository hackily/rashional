const React = require('react');
const Message = require('./message.jsx')
const RashChart = require('./rashChart.jsx')

class App extends React.Component {
  constructor () {
    super()
    this.state = {data: [
      {x: 'A', y: 20},
      {x: 'B', y: 30},
      {x: 'C', y: 40},
      {x: 'D', y: 20},
      {x: 'E', y: 40},
      {x: 'F', y: 25},
      {x: 'G', y: 5}
    ]
  }
    
  }
  render () {
    return <div>
      <h1>clicked {this.state.n} times</h1>
      <button onClick={this.handleClick.bind(this)}>click me!</button>
      <Message/>
      <RashChart ref="rashChart" data = {this.state.data} />
    </div>

  }
  handleClick () {
    //this.setState({ n: this.state.n + 1 })
    this.state.data[0].y = this.state.data[0].y + 50;
    this.refs.rashChart.updateChart();
  }
}

module.exports = App;