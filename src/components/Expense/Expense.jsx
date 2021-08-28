import ExpenseItem from './components/ExpenseItem';
import ExpenseFilter from './components/ExpenseFilter';
import Card from '../UI/Card';
import './Expense.css';

function Expense(props) {
  const saveFilterDataHandler = (enteredFilterData) => {
    const filterData = enteredFilterData;
    console.log("Expense", filterData);
  }
  
  return (
    <div>
      <ExpenseFilter onSaveFilterData={saveFilterDataHandler}/>
      <Card className='expenses'>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>

  )
}

export default Expense;