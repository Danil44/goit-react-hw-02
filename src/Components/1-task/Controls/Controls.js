import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

export default class Controls extends Component {
  state = {};

  static propTypes = {
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    availability: PropTypes.shape({
      prev: PropTypes.bool.isRequired,
      next: PropTypes.bool.isRequired,
    }).isRequired,
  };

  render() {
    const { onPrevious, onNext, availability } = this.props;
    const { prev, next } = availability;
    const prevBtnClasses = [styles.button];
    const nextBtnClasses = [styles.button];

    if (prev) {
      prevBtnClasses.push(styles.disabled);
    } else if (next) {
      nextBtnClasses.push(styles.disabled);
    }

    return (
      <section className={styles.controls}>
        <button
          type="button"
          className={prevBtnClasses.join(' ')}
          onClick={onPrevious}
        >
          Назад
        </button>
        <button
          type="button"
          className={nextBtnClasses.join(' ')}
          onClick={onNext}
        >
          Вперед
        </button>
      </section>
    );
  }
}
