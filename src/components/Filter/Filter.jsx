import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    setFilter(filterValue);
  };

  return (
    <>
      <h2 className={styles.filterTitle}>Search</h2>
      <input
        className={styles.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;