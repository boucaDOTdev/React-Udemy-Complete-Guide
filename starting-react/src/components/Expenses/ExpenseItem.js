import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {
  const expenseTitle = props.title
  const expenseAmount = props.amount
  const clickHandler = () => {
    console.log('clicked!')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">$ {expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}
export default ExpenseItem
