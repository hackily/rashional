const React = require('react');
const bootstrap = require('./css/bootstrap.min.css')
const boxStyle = require('./pic.css')

// const bootstrap_1 = require('./css/bootstrap-grid.css')

class Pic extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div className="description">
          Welcome to R<i>#</i>iOnal! A machine learning hack aimed at identifying rash's that would require emergency care. Please take or upload a photo!
        </div>

        <div className="image-upload">
          <label htmlFor="file-input">
            <img src="/img/camera.png"/>
          </label>
          <input id="file-input" type="file" className="input" accept="image/*;capture=camera"></input>
        </div>
      </div>
    );
  }

}

function makeRequest (method, url, body) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, body);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send(body);
  });
}

var data = "base64Image=asdf";
makeRequest('POST', '/api/post/predict', body)
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error('Augh, there was an error!', err.statusText);
});

module.exports = Pic;
