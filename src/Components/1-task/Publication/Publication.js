import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

export default class Publication extends Component {
  state = {};

  static propTypes = {
    publication: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { publication } = this.props;

    return (
      <section className={styles.publication}>
        <h2 className={styles.title}>{publication.title}</h2>
        <p className={styles.text}>{publication.text}</p>
      </section>
    );
  }
}
