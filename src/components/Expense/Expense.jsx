import { useState } from 'react'
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseChart from './components/ExpenseChart';
import Card from '../UI/Card';
import './Expense.css';

function Expense(props) {
  const [selectedYear, setSelectedYear] = useState('2020')

  const saveFilterDataHandler = (selectedFilterData) => {
    setSelectedYear(selectedFilterData)
  }

  const filteredExpenses = props.expenses.filter(expense => 
    expense.date.getFullYear().toString() === selectedYear
  )

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={selectedYear}
          onSaveFilterData={saveFilterDataHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList item={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expense;