const React = require('react');
const Message = require('./message.jsx')
const RashChart = require('./rashChart.jsx')
const Pic = require('./pic.jsx');
const bootstrap = require('./css/bootstrap.min.css')
const bootstrap_1 = require('./css/bootstrap.css')
const titleStyle = require('./main.css')

class App extends React.Component {
  constructor() {
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

  handleClick () {
    //this.setState({ n: this.state.n + 1 })
    this.state.data[0].y = this.state.data[0].y + 50;
    this.refs.rashChart.updateChart();
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron">
            <h1>R<i>#</i>iOnal</h1>
          </div>
        </div>
        <Pic/>
     
    <div>
      <h1>clicked {this.state.n} times</h1>
      <button onClick={this.handleClick.bind(this)}>click me!</button>
      <Message/>
      <RashChart ref="rashChart" data = {this.state.data} />
    </div>
     </div>
    );

  }

}

module.exports = App
