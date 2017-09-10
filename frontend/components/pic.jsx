const React = require('react');
const bootstrap = require('./css/bootstrap.min.css')
const boxStyle = require('./pic.css')

class Pic extends React.Component {
  constructor(props) {
    super()
    this.props = props;
    this.state = {
      imageFile: {},
      base64Image: ''
    }
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
          <input id="file-input" type="file" className="input" accept="image/*;capture=camera" onChange={(e) => this.readFile(e)}></input>
        </div>
      </div>
    );
  }

  readFile(data) {
    const files = data.target.files;
    const self = this;
    if(files && files[0] ) {
    let reader = new FileReader();
    let file = files[0];
    reader.onloadend = () => {
      let splitFile = reader.result.split(',');
      this.setState({
        imageFile: file,
        base64Image: splitFile[1]
      });
      this.props.onPicture(this.state.base64Image);
    }
    reader.readAsDataURL(file)
    }
  };

}

module.exports = Pic;
