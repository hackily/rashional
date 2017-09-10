import React from 'react';
const bootstrap = require('./css/bootstrap.min.css')
const locationCards = require('./materialize-css/dist/css/materialize.css')
//const locationCards_1 = require('./materialize-css/dist/js/materialize.js')
const locationCss = require('./locationCards.css')


class LocationCards extends React.Component{
  constructor(props){
    super()
    this.state = {
      data: props.data
    }
  }

  render(){
    return(
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-content">
              <p> <b>Name: </b>{this.state.data.name}<br />
                  <b>Phone Number: </b>{this.state.data.phone}<br />
                  <b>Address: </b>{this.state.data.address}<br />
                  <b>Distance: </b>{this.state.data.distance.toFixed(1)} miles<br />
                  <b>Website: </b><a href={this.state.data.url}>{this.state.data.url || "none"}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


module.exports = LocationCards;
