import React from 'react';
const bootstrap = require('./css/bootstrap.min.css')
const locationCards = require('./materialize-css/dist/css/materialize.css')
// const locationCards_1 = require('./materialize-css/dist/js/materialize.js')

const locationCss = require('./locationCards.css')


class Location extends React.Component{
  constructor(props){
    super()
  }

  render(){
    return(
      <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-content">
              <p> <b>Name: </b>{this.props.name}<br />
                  <b>Phone Number: </b>{this.props.phone}<br />
                  <b>Distance: </b>{this.props.distance}<br />
                  <b>Website: </b><a href='{this.props.url}'>{this.props.url}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


module.exports = locationCards;
