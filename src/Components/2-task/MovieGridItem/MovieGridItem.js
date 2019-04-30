import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGridItem.module.css';

export default class MovieGridItem extends Component {
  state = {};

  static defaultProps = {
    overview: '',
  };

  static propTypes = {
    posterUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
  };

  render() {
    const { posterUrl, title, overview } = this.props;
    return (
      <div className={styles.movieCard}>
        <img src={posterUrl} alt={title} className={styles.picture} />
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{overview}</p>
        </div>
      </div>
    );
  }
}
