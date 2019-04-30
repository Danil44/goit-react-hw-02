import React, { Component } from 'react';
import styles from './Reader.module.css';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import Controls from '../Controls/Controls';
import publications from '../publication.json';

export default class Reader extends Component {
  state = {
    page: 0,
    totalPages: publications.length - 1,
  };

  handlePreviousPage = () => {
    const { page } = this.state;
    this.setState(state => ({
      page: page > 0 ? state.page - 1 : false,
    }));
  };

  handleNextPage = () => {
    const { page, totalPages } = this.state;
    this.setState(state => ({
      page: page < totalPages ? state.page + 1 : false,
    }));
  };

  render() {
    const { page, totalPages } = this.state;
    const publication = publications[page];
    return (
      <div className={styles.reader}>
        <Publication publication={publication} />

        <Counter currentPage={page} totalPages={totalPages} />

        <Controls
          onPrevious={this.handlePreviousPage}
          onNext={this.handleNextPage}
          availability={{ prev: page === 0, next: page === totalPages }}
        />
      </div>
    );
  }
}
