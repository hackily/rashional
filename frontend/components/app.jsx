const React           = require('react');
const axios           = require('axios');
const _               = require('lodash');
const Bulma           = require('./css/bulma.css');
const languageBundle  = require('./languageBundle.js');
const Message         = require('./message.jsx');
const Pic             = require('./pic.jsx');
const RashChart       = require('./rashChart.jsx');
const LocationCards   = require('./locationCards.jsx');
const Banner          = require('./banner.jsx');
const ChallengeBanner = require('./challengebanner.jsx');


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rashChartData: [],
      predictionData: {},
      latitude: 39,
      longitude: -76,
      cardData:[],
      lang: "english",
      languageBundle: {

      }
    };
    this.getLocation();
  }

  render() {
    return (
      <div>
        <Banner props={languageBundle[this.state.lang].banner}/>
        <article id="main">
          <section className="special wrapper container style3">
            <p className="subtitle is-size-4">{languageBundle[this.state.lang].intro}</p>
            <Pic onPicture={this.postPicture.bind(this)}/>
            <h2 className="subtitle">{languageBundle[this.state.lang].picture.subtitle}</h2>
            <div id="results-container" style={{display:"none"}}>
              <div id="confidence-text" className="subtitle is-size-5"></div>
              <p className="subtitle is-size-7">{languageBundle[this.state.lang].disclaimer}</p>
              <RashChart id ="chart" ref="rashChart" data = {this.state.rashChartData}/>
            </div>
          </section>
        </article>
        <article id="challenge" style={{display: "none"}}>
          <ChallengeBanner props={languageBundle[this.state.lang].challengeBanner}/>
          <div id="location-card-container">
            {this.createCards(this.state.cardData)}
          </div>
        </article>
      </div>
    );
  }

  handleClick () {
    this.setState({
      cardData: null
    });
  }

  createCard (cd, index) {
    if(!cd) return;
    return <LocationCards props = {cd} key={index}/>;
  }

  createCards (cds) {
    if(!cds) return;
    return cds.map(this.createCard);
  }

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
      document.getElementById('results-container').style.display = "block";
      const data = res.data;
      this.setState({ predictionData: res.data });
      this.initChartData(res.data);
      this.setPredictionText(res.data, this.state.lang);
      this.initCareCards(this.state.latitude, this.state.longitude);
    }).catch((err) => {
      console.log(err);
    });
  }

  setPredictionText(data, lang){
    const truncateValue = (data.predictionValue*100).toFixed(2);
    let text = '';
    //Default english
    if(lang === "english"){
      if(data.predictionValue < 0.25){
        text = `We are ${truncateValue}% confident that you may have ${data.prediction}. Thanks for using our service, but we stress that we are still experimental, and can be wrong.`;
        document.getElementById('confidence-text').innerText = text;
        return;
      }
      if(data.predictionValue > 0.25){
        text = `We are ${truncateValue}% confident that you may have ${data.prediction}. We strongly recommend getting an expert opinion.`;
        document.getElementById('confidence-text').innerText = text;

        return;
      }
    } else { 
      this.refs.alarm = "";
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
    }).then( (response) => {
      let clinicList = [];
      _.each(response.data, (datum) => {
        let clinicObj = {
          name: datum.name,
          phone: datum.phone,
          url: datum.url,
          distance: datum.distanceFromUser,
          address: datum.address.address
        };
        clinicList.push(clinicObj);
      });
      this.state.cardData = clinicList;
      document.getElementById('challenge').style.display = "block";

      this.setState({
        cardData: clinicList
      });
      //this.forceUpdate();
    }).catch((err) => {
      console.log(err);
    });
  }


}

module.exports = App;
