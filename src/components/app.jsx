import React, { Component } from 'react';
import giphy from 'giphy-api';

import Search from './search.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: 'lr7eD7ajnA8orrujPG'
    };
  }

   changeSelectedGif = (res) => {
    this.setState({
      selectedGif: res
    });
  }

  search = (query) => {
    giphy('m84poM39J4JxKgaOH4ZRww13KQZWe53m').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  render() {

    return (
      <div>
        <div className="left-scene">
          <Search searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGif}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} change={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
