const React = require('react');

class Message extends React.Component {
  constructor () {
    super()
    this.state = {
      confidenceText: "",
      alarm: "Upload Picture"
    }
  }

render () {
    return <div>
      <h2>{this.state.alarm}</h2>
    <div className="description">{this.state.confidenceText}</div>
    </div>
  }

}

module.exports = Message;
