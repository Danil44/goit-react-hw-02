import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

export default class SearchBar extends Component {
  state = {};

  static propTypes = {
    onFilterMovies: PropTypes.func.isRequired,
  };

  render() {
    const { onFilterMovies } = this.props;
    return (
      <input
        className={styles.input}
        type="text"
        name="title"
        onChange={onFilterMovies}
      />
    );
  }
}
