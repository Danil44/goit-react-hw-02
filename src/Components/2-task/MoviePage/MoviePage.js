import React, { Component } from 'react';
import MovieGrid from '../MovieGrid/MovieGrid';
import SearchBar from '../SearchBar/SearchBar';
import movies from '../movies.json';
import styles from './MoviePage.module.css';

const filterMovies = (title, moviesList) => {
  return moviesList.filter(movie =>
    movie.title.toLowerCase().includes(title.toLowerCase()),
  );
};

export default class MoviePage extends Component {
  state = {
    title: '',
    moviesList: movies,
  };

  handleFilterMovies = e => {
    const { value } = e.target;
    this.setState({ title: value });
  };

  render() {
    const { title, moviesList } = this.state;
    const filteredMovies = filterMovies(title, moviesList);
    return (
      <div className={styles.container}>
        <SearchBar onFilterMovies={this.handleFilterMovies} />
        <MovieGrid items={filteredMovies} />
      </div>
    );
  }
}
