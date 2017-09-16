const React = require('react');

const LocationCards = ({props}) => {
  return  <div className="box">
    <div className="media-content">
      <div className="content">
        <b>Name: </b>{props.name}<br />
        <b>Phone Number: </b>{props.phone}<br />
        <b>Address: </b>{props.address}<br />
        <b>Distance: </b>{props.distance.toFixed(1)} miles<br />
        <b>Website: </b><a href={props.url}>{props.url || "none"}</a>
      </div>
    </div>
  </div>;
}


module.exports = LocationCards;
