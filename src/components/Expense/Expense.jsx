import { useState } from 'react'
import ExpenseItem from './components/ExpenseItem';
import ExpenseFilter from './components/ExpenseFilter';
import Card from '../UI/Card';
import './Expense.css';

function Expense(props) {
  const [selectedYear, setSelectedYear] = useState('2020')

  const saveFilterDataHandler = (selectedFilterData) => {
    setSelectedYear(selectedFilterData)
  }
  
  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter 
          selected={selectedYear}
          onSaveFilterData={saveFilterDataHandler}
        />
        {
          props.expenses
          .filter(expense => 
            expense.date.getFullYear().toString() === selectedYear
          )
          .map(item =>        
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          )
        }
      </Card>
    </div>
  )
}

export default Expense;