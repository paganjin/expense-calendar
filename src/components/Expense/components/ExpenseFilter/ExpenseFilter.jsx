import { useState } from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  const [enteredYear, setEnteredYear] = useState('2022')

  const yearChangeHandler = (event) => {
    props.onSaveFilterData(event.target.value)
    setEnteredYear(event.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select 
          defaultValue={enteredYear}
          onChange={yearChangeHandler}
        >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;