import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieGridItem from '../MovieGridItem/MovieGridItem';
import styles from './MovieGrid.module.css';

export default class MovieGrid extends Component {
  state = {};

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      }),
    ).isRequired,
  };

  render() {
    const { items } = this.props;
    return (
      <div className={styles.movieGrid}>
        {items.length === 0 && <h3>No matching results!</h3>}
        {items.map(item => (
          <MovieGridItem {...item} key={item.id} />
        ))}
      </div>
    );
  }
}
