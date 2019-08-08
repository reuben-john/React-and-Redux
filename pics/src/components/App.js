import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('http://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
