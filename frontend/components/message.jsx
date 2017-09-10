const React = require('react');

class Message extends React.Component {
  constructor () {
    super()
    this.state = {mild: "You're ok, sorta",alarm: <h2 >Predictive Analytics</h2>}
  }

render () {
    return <div>
      {this.state.alarm}
    </div>
  }

}

module.exports = Message;
