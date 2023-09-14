import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"

const ExpenseItem = (props) => {

    const expenseTitle = props.title
    const expensePrice = props.amount

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
