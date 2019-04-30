import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export default class TransactionHistory extends Component {
  state = {};

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { items } = this.props;
    return (
      <table className={styles.container}>
        <thead>
          <tr className={styles.headRow}>
            <th className={styles.titleHead}>Transaction</th>
            <th className={styles.titleHead}>Amount</th>
            <th className={styles.titleHead}>Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            return (
              <tr key={item.id} className={styles.row}>
                <td className={styles.col}>{item.type}</td>
                <td className={styles.col}>{item.amount}$</td>
                <td className={styles.col}>{item.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
