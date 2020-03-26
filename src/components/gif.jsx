import React, { Component } from 'react';


class Gif extends Component {
  render() {
    const gif = `https://media3.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={gif} alt="" className="gif" onClick={this.props.change} id={this.props.id}/>
    );
  }
}

export default Gif;
