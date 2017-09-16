const React = require('react');

class Pic extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      imageFile: {},
      base64Image: ''
    };
    this.divStyle = {
      display: 'none'
    };
  }


  render() {
    return (
      <div className="columns is-mobile is-centered">
        <div id ="start" className="image-upload column is-one-quarter is-narrow">
          <label htmlFor="file-input">
            <img className="upload-picture" src="/img/camera-upload.png" style={{cursor: "pointer"}}/>
          </label>
          <input id="file-input" type="file" style={this.divStyle}
            className="input" accept="image/*;capture=camera" 
            onChange={(e) => this.readFile(e)}></input>
        </div>
      </div>
    );
  }

  readFile(data) {
    const files = data.target.files;
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
      };
      reader.readAsDataURL(file);
    }
  }
}

module.exports = Pic;
