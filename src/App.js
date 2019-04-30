import React, { Component, Fragment } from 'react';
import './App.css';
import Reader from './Components/1-task/Reader/Reader';
import MoviePage from './Components/2-task/MoviePage/MoviePage';
import Dashboard from './Components/3-task/Dashboard/Dashboard';

export default class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Reader />
        <MoviePage />
        <Dashboard />
      </Fragment>
    );
  }
}
