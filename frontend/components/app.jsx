const React         = require('react');
const axios         = require('axios');
const _             = require('lodash');
const Message       = require('./message.jsx');
const Pic           = require('./pic.jsx');
const bootstrap     = require('./css/bootstrap.min.css');
//const bootstrap_1   = require('./css/bootstrap.css')
const titleStyle    = require('./main.css');
const RashChart     = require('./rashChart.jsx');
const rashChart     = require('./rashChart.css');
const LocationCards = require('./locationCards.jsx');
//const locationCss   = require('./locationCards.css')
// const locationCards_3 = require('./materialize-css/dist/css/materialize.css')

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      rashChartData: [
        {x: 'Lyme Disease', y: 0.59},
        {x: 'Ringworm', y: 0.37},
        {x: 'Shingles', y: 0.5},
        {x: 'Rocky Mountain Spotted Fever', y: 0.4},
     ],
     predictionData: {},
     latitude: 0,
     longitude: 0,
     cardData:[]
    }
    this.getLocation(); 
}

  handleClick () {
    this.setState({
      cardData: null
    })
  }


  createCard (cd) {
    if(!cd) return;
    return <LocationCards data = {cd}/>;
  }

  createCards (cds) {
    if(!cds) return;
    return cds.map(this.createCard);
  }

  render() {
    return (
      <div id = "outer">
        <div className="container">
          <div className="jumbotron">
            <h1>Rashi<img className="heart" src="/img/heard.png"></img>nal</h1>
          </div>
        </div>
        <button onClick={this.handleClick.bind(this)}>click me!</button>
        <Pic onPicture={this.postPicture.bind(this)}/>
        <Message/>
        <div id="rash-chart-container">
          <RashChart id ="chart" ref="rashChart" data = {this.state.rashChartData} />
        </div>
        <div id="location-card-container">
          {this.createCards(this.state.cardData)}
        </div>
      </div>
    )
  }
  
  // <LocationCards id="location" ref="locationsCards" data = {this.state.cardData[0]}/>

  //Get location and then update state with values
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.state.latitude = position.coords.latitude;
        this.state.longitude = position.coords.longitude;
      });
    }
  }

  //Use base64String and URI encode it, and post it.
  postPicture(base64String){
    const uriEncoded = encodeURI(base64String);
    axios.post('/api/post/predict', {
      'base64Image': uriEncoded,
      'latitude': this.state.latitude,
      'longitude': this.state.longitude
    }).then((res) => {
      const data = res.data;
      this.setState({ predictionData: res.data })
      this.initChartData(res.data);
      this.initCareCards(this.state.latitude, this.state.longitude);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  //Format our data, set it in the state. Then update the chart!
  initChartData(arr){
    let formattedData = [];
    _.each(arr.disease, (disease) => {
      const obj = {
        'x': disease.name,
        'y': disease.value
      };
      formattedData.push(obj);
    });
    this.setState({ rashChartData: formattedData }, () => {
      //TOOD:// Fix. So dirty.
      this.refs.rashChart.state.data = formattedData;
      this.refs.rashChart.updateChart();
    });
  }

  initCareCards(latitude, longitude) {
    axios.get('/api/get/clinics', {
      params: {
        'latitude': latitude,
        'longitude': longitude
      }
    })
    .then( (response) => {
      let clinicList = [];
      _.each(response.data, (datum) => {
        let clinicObj = {
          name: datum.name,
          phone: datum.phone,
          url: datum.url,
          distance: datum.distanceFromUser
        }
        clinicList.push(clinicObj);
      });
      this.state.cardData = clinicList;
      this.setState({
        cardData: clinicList
      })
      //this.forceUpdate();
    })
    .catch((err) => {
      console.log(err);
    });
  }


}

module.exports = App;
