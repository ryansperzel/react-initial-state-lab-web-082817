import React from 'react';
import ReactDOM from 'react-dom';
// Bomb Component Code Goes Here
class ImageSlider extends React.Component {
  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }
  render() {
    return <p>I am on slide {this.state.currentSlideIndex}</p>
  }
}

export default ImageSlider
