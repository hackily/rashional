const React = require('react');

const Message = ({props}) => (
  <div>
    <h2 className="subtitle">{props.subtitle}</h2>
  </div>
);
module.exports = Message;
