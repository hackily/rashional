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
     ],
     predictionData: {},
     latitude: 0,
     longitude: 0,
     cardData:[],
     lang: null
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
          {/* <div className="jumbotron">
            <h1>Rashi<img className="heart" src="/img/heard.png"></img>nal</h1>
          </div> */}
        </div>
        {/* <button onClick={this.handleClick.bind(this)}>click me!</button> */}
        <Pic onPicture={this.postPicture.bind(this)}/>
        <Message ref="chartLabel"/>
        <div id="results-container">
          <div id="rash-chart-container">
            <RashChart id ="chart" ref="rashChart" data = {this.state.rashChartData}/>
          </div>
          <section id="cta">
            <header>
              <h2>Ready to take control of your health?</h2>
              <h5>We have taken the liberty of finding you several free clinics nearby.</h5>
            </header>
          </section>
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
      document.getElementById('results-container').style.visibility = "visible";
      const data = res.data;
      
      this.setState({ predictionData: res.data })
      this.initChartData(res.data);
      this.setPredictionText(res.data, this.state.lang);
      this.initCareCards(this.state.latitude, this.state.longitude);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  setPredictionText(data, lang){
    const truncateValue = (data.predictionValue*100).toFixed(2);
    //Default english
    if(!lang){
      this.refs.chartLabel.state.alarm = "Predictive Analytics";
      if(data.predictionValue < 0.25){
        this.refs.chartLabel.state.confidenceText = `We are ${truncateValue}% confident that you may have ${data.prediction}. Thanks for using our service, but we stress that we are still experimental, and can be wrong.`
        return;
      }
      if(data.predictionValue > 0.25){
        this.refs.chartLabel.state.confidenceText = `We are ${truncateValue}% confident that you may have ${data.prediction}. We strongly recommend getting an expert opinion.`
        return;
      }
    } else {
      this.refs.alarm = ""
    }
  }

  //Format our data, set it in the state. Then update the chart!
  initChartData(arr){
    let formattedData = [];
    _.each(arr.disease, (disease) => {
      const obj = {
        'x': disease.name,
        'y': disease.value*100  
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
