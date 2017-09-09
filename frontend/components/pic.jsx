const React = require('react');
// const boxStyle = require('./pic.css')
import './pic.css'

class Pic extends React.Component {
  constructor() {
    super()
  }
  // const divStyle = {
  //   color: 'blue'
  // };

  render() {
    return(
    <div> Hello, Welcome to BitCamp!
       <div color="blue" width="100px" height="100px" border-style="solid">This is a test</div>
    </div>);

  }

}

module.exports = Pic;
