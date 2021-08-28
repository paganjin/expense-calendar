import ExpenseItem from '../ExpenseItem'
import './ExpenseList.css'

const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      {props.item.map(item =>        
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      )}
    </ul>
  )
}

export default ExpenseList