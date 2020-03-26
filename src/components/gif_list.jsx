import React, { Component } from 'react';

import Gif from './gif.jsx';

class GifList extends Component {

  displayGifs() {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} change={this.click}/>);
  }

  click = (e) => {
    this.props.change(e.currentTarget.id);
  }

  render() {
    return (
      <div className="gif-list">
       {this.displayGifs()}
      </div>
    );
  }
}

export default GifList;
