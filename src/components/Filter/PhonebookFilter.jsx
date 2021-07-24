import React from 'react';
// import s from './ContactList.module.css';

import s from './PhonebookFilter.module.css';
 
const PhonebookFilter = ({ onSetFilter, filterValue }) => (
  <>
    <label className={s.label}>
      <p>Filter: </p>
      <input
        className={s.input}
        name="filter"
        onInput={onSetFilter}
        type="text"
        value={filterValue}
      />
    </label>
  </>
);

export default PhonebookFilter;
