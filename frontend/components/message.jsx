// const React = require('react');

// // var Message = React.createClass ({
// //     getInitialState: function() {
// //         return {main_message: "GO TO THE DOCTOR, FOOL"}
// //     },
// //     render: function() {
// //         return (
// //             <div>{this.state.main_message}</div>
// //         )
// //     }
// // });

// // React.render(<Message />, document.getElementById("Message"))

// class MessageComp extends React.Component {

//     constructor() {
//         super()
//         this.state = {main_message: "GO TO THE DOCTOR, FOOL"}
//     }
//     render () {
//         return <div>{this.state.main_message}</div>
//     }
// }

// module.exports = MessageComp;               

const React = require('react');

class Message extends React.Component {
  constructor () {
    super()
    this.state = {mild: "You're ok, sorta",alarm: "To the Doctorrrr"}
  }

render () {
    return <div>
      {this.state.alarm}
    </div>
  }

}

module.exports = Message;
