import React, { Component } from 'react';
import styles from './Dashboard.module.css';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import Balance from '../Balance/Balance';
import Controls from '../Controls/Controls';

export default class Dashboard extends Component {
  state = {
    history: [],
    balance: 0,
  };

  operations = {
    increment: 0,
    decrement: 0,
  };

  handleIncrement = transaction => {
    const { amount } = transaction;

    if (amount === 0) {
      return alert('Введите сумму для проведения операции!');
    }

    this.operations.increment += amount;

    return this.setState(state => ({
      history: [...state.history, transaction],
      balance: state.balance + amount,
    }));
  };

  handleDecrement = transaction => {
    const { amount } = transaction;
    const { balance } = this.state;

    if (amount > balance) {
      return alert('На счету недостаточно средств для проведения операции!');
    }

    this.operations.decrement += amount;

    return this.setState(state => ({
      history: [...state.history, transaction],
      balance: state.balance - amount,
    }));
  };

  render() {
    const { history, balance } = this.state;
    const { increment, decrement } = this.operations;
    return (
      <div className={styles.dashboard}>
        <Controls
          onTransactionChange={this.handleChange}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <Balance
          balance={balance}
          increment={increment}
          decrement={decrement}
        />
        <TransactionHistory items={history} />
      </div>
    );
  }
}
