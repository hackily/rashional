import React from 'react';
const bootstrap = require('./css/bootstrap.min.css')
const locationCards = require('./materialize-css/dist/css/materialize.css')
// const locationCards_1 = require('./materialize-css/dist/js/materialize.js')

const locationCss = require('./locationCards.css')


class Location extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <span class="card-title">{this.props.name}</span>
            </div>
            <div class="card-content">
              <p> <b>Phone Number: </b>{this.props.phons}<br />
                  <b>Distance from you:</b>{this.props.distance}<br />
                  <b>Website:</b>{this.props.url}
              </p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


module.exports = locationCards;
