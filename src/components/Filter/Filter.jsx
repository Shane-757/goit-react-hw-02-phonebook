import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

class Filter extends Component {
  static propTypes = {
    onFilterChange: PropTypes.func.isRequired,
  };

  state = {
    filter: '',
  };

  handleFilterChange = (event) => {
    const filterValue = event.target.value;
    this.setState({ filter: filterValue });
    this.props.onFilterChange(filterValue);
  };

  render() {
    return (
      <>
        <h2 className={styles.filterTitle}>Search</h2>
        <input
          className={styles.filterInput}
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleFilterChange}
        />
      </>
    );
  }
}

export default Filter;