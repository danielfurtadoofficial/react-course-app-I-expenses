import "./ExpenseDate.css";

const ExpenseDate = (props) => {

  const expenseDate_month = props.date.toLocaleString('en-us',{month:'short',})
  const expenseDate_day = props.date.toLocaleString('en-us',{day:'2-digit'})
  const expenseDate_year = props.date.getFullYear()

  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseDate_month}</div>
      <div className="expense-date__year">{expenseDate_year}</div>
      <div className="expense-date__date">{expenseDate_day}</div>
    </div>
  );
}

export default ExpenseDate;
