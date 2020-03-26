import React, { Component } from 'react';

class Search extends Component {

  handleChange = (e) => {
    this.props.searchFunction(e.currentTarget.value);
  }

  render() {
    return (
      <div>
        <input type="text" className="form-search" onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Search;
