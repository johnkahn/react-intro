import React from 'react';
import './App.css';
import ky from 'ky';

class App extends React.Component {
  state = {
    loadingText: 'Loading',
    movies: [],
  };

  async componentDidMount() {
    const movies = await ky.get('http://www.omdbapi.com/?apikey=5599d96d&s=Guardians').json();


  }

  render() {
    const movies = this.state.movies;
    return (
      <div>
        <h1>MovieDB 2</h1>
        {this.state.loadingText === 'Done' ? (
          <div>
            <p>{movies.length}</p>
            {movies.map(movie => {
              return <p>{movie.Title}</p>;
            })}
          </div>
        ) : (
          <p>{this.state.loadingText}</p>
        )}
      </div>
    );
  }
}

export default App;
