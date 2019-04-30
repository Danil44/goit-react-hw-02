import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

export default class Counter extends Component {
  state = {};

  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
  };

  render() {
    const { currentPage, totalPages } = this.props;

    return (
      <p className={styles.counter}>
        {currentPage}/{totalPages}
      </p>
    );
  }
}
