import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './Controls.module.css';

export default class Controls extends Component {
  state = {
    id: '',
    type: '',
    amount: '',
    date: '',
  };

  static propTypes = {
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
  };

  reset = () => {
    this.setState({ id: '', type: '', amount: '', date: '' });
  };

  handleChangeAmount = e => {
    const { value } = e.target;

    this.setState({ amount: +value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target;
    const { onIncrement, onDecrement } = this.props;

    this.setState(
      {
        id: shortid.generate(),
        type: value,
        date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      },
      () => {
        this.reset();
        return value === 'deposit'
          ? onIncrement({ ...this.state })
          : onDecrement({ ...this.state });
      },
    );
  };

  render() {
    const { amount } = this.state;
    return (
      <section className={styles.container}>
        <input
          className={styles.input}
          type="number"
          name="amount"
          value={amount}
          onChange={this.handleChangeAmount}
        />
        <button
          className={styles.button}
          type="button"
          value="deposit"
          onClick={this.handleSubmit}
        >
          Deposit
        </button>
        <button
          className={styles.button}
          type="button"
          value="withdraw"
          onClick={this.handleSubmit}
        >
          Withdraw
        </button>
      </section>
    );
  }
}
