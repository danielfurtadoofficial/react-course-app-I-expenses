import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    hideNewExpenseFormHandler();
    props.onAddExpense(expenseData);

  };

  const showNewExpenseFormHandler = () => {
    setShowForm(true);
  };

  const hideNewExpenseFormHandler = () => {
    setShowForm(false);
  };

  let form = <button onClick={showNewExpenseFormHandler}>Add Expense</button>;

  if (showForm) {
    form = (
      <ExpenseForm
        onSaveExpenseForm={saveExpenseDataHandler}
        onCancel={hideNewExpenseFormHandler}
      />
    );
  }

  return <div className="new-expense">{form}</div>;
};

export default NewExpense;
