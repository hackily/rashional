const React = require('react');
const Pic = require('./pic.jsx');
const bootstrap = require('./css/bootstrap.min.css')
const bootstrap_1 = require('./css/bootstrap.css')
const titleStyle = require('./main.css')

class App extends React.Component {
  constructor() {
    super()
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
      </div>
    );

  }

}

module.exports = App
