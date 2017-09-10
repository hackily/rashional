<<<<<<< HEAD
const React         = require('react');
const axios         = require('axios');
const _             = require('lodash');
const Message       = require('./message.jsx')
const Pic           = require('./pic.jsx');
const bootstrap     = require('./css/bootstrap.min.css')
const bootstrap_1   = require('./css/bootstrap.css')
const titleStyle    = require('./main.css')
const RashChart     = require('./rashChart.jsx')
const rashChart     = require('./rashChart.css')
const locationCards = require('./locationCards.jsx')
const locationCss   = require('./locationCards.css')
=======
const React = require('react');
const Message = require('./message.jsx')
const Pic = require('./pic.jsx');
const bootstrap = require('./css/bootstrap.min.css')
const bootstrap_1 = require('./css/bootstrap.css')
const locationCards_3 = require('./materialize-css/dist/css/materialize.css')
const RashChart = require('./rashChart.jsx')
const rashChart = require('./rashChart.css')
const locationCards = require('./locationCards.jsx')
const locationCss = require('./locationCards.css')
const titleStyle = require('./main.css')
const babel = require('babel-core')
>>>>>>> Update



class App extends React.Component {
  constructor() {
    super()
<<<<<<< HEAD
    this.state = {
      rashChartData: [
        {x: 'Lyme Disease', y: 0.59},
        {x: 'Ringworm', y: 0.37},
        {x: 'Shingles', y: 0.5},
        {x: 'Rocky Mountain Spotted Fever', y: 0.4},
     ],
     predictionData: {},
     latitude: 0,
     longitude: 0
    }
=======
    this.state = {data: [
      {x: 'A', y: 20},
      {x: 'B', y: 30},
      {x: 'C', y: 40},
      {x: 'D', y: 20},
      {x: 'E', y: 40},
      {x: 'F', y: 25},
      {x: 'G', y: 5}
    ],
    cardData:[
      {name: 'Johns Hopkins Medical Services',phone: '1 (410)-874-1486', distance: '14.45699 mi',url: 'http://www.hopkinsmedicine.org/patients/odenton/index.html'},
      {name: 'Johns Hopkins Medical Services',phone: '1 (410)-874-1486', distance: '14.45699 mi',url: 'http://www.hopkinsmedicine.org/patients/odenton/index.html'},
      {name: 'Johns Hopkins Medical Services',phone: '1 (410)-874-1486', distance: '14.45699 mi',url: 'http://www.hopkinsmedicine.org/patients/odenton/index.html'},
      {name: 'Johns Hopkins Medical Services',phone: '1 (410)-874-1486', distance: '14.45699 mi',url: 'http://www.hopkinsmedicine.org/patients/odenton/index.html'},
      {name: 'Johns Hopkins Medical Services',phone: '1 (410)-874-1486', distance: '14.45699 mi',url: 'http://www.hopkinsmedicine.org/patients/odenton/index.html'}
    ]
  }
>>>>>>> Update

    this.getLocation();
  }

<<<<<<< HEAD
=======
  handleClick () {
    //this.setState({ n: this.state.n + 1 })
    this.state.data[0].y = this.state.data[0].y + 50;
    this.refs.rashChart.updateChart();
  }

  generateCards () {

    cardHTML = ""

    for (i = 0; i < this.state.cardData.length ; i++) {
      locationLine = "<locationCards id='location"+i.toString()"+' ref='locationsCards' data = {this.state.cardData"+i.toString()+"}/>"
      cardHTML = cardHTML + locationLine
    }
    console.log(cardHTML)
    return cardHTML
  }

  cardBlock = generateCards()

>>>>>>> Update
  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron">
            <h1>Rashi<img className="heart" src="/img/heard.png"></img>nal</h1>
          </div>
        </div>
        <Pic onPicture={this.postPicture.bind(this)}/>
        <Message/>
<<<<<<< HEAD
        <RashChart id ="chart" ref="rashChart" data = {this.state.rashChartData} />
        <locationCards/>
=======
        <div>
          <RashChart id ="chart" ref="rashChart" data = {this.state.data} />
        </div>
        // <locationCards id="location" ref="locationsCards" data = {this.state.cardData}/>
>>>>>>> Update
      </div>
    )
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
      const data = res.data;
      this.setState({ predictionData: res.data })
      this.initChartData(res.data);
      console.log(data);
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

}


<<<<<<< HEAD
=======

>>>>>>> Update
module.exports = App;
