import logo from './logo.svg';
import loader from './loading.png';
import './App.css';
import React from "react";

class ImageWithStatusText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: 
      <div>
        <img alt='loader' src={loader} /> 
        <h1>loading...</h1> 
      </div>
    };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: <h3>Loaded successfully!</h3> });
  }

  handleImageErrored() {
    this.setState({ imageStatus: <h3>Failed to load :(</h3> });
  }

  render() {
    return (
      <div>
        <img 
          src={logo} 
          className="App-logo" 
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
          alt='logo'
        />
        <br></br>
        {this.state.imageStatus}
      </div>
    );
  }
}

export default ImageWithStatusText;
        
      