import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

export default class Balance extends Component {
  state = {};

  static propTypes = {
    balance: PropTypes.number.isRequired,
    increment: PropTypes.number.isRequired,
    decrement: PropTypes.number.isRequired,
  };

  render() {
    const { balance, increment, decrement } = this.props;
    return (
      <section className={styles.container}>
        <span>+{increment}$</span>
        <span>-{decrement}$</span>
        <span>Balance: {balance}$</span>
      </section>
    );
  }
}
