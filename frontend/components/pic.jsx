const React = require('react');
const boxStyle = require('./pic.css')
const bootstrap = require('./css/bootstrap.min.css')
// const bootstrap_1 = require('./css/bootstrap-grid.css')

class Pic extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div className="description">
          Welcome to R<i>#</i>iOnal! A machine learning hack aimed at identifying rash's that would
          require emergency care. Please take photo or upload a photo!
        </div>
        <div className="box"></div>
      </div>

    );

  }

}

module.exports = Pic;
