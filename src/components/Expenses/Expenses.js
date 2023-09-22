import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./../NewExpenses/ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const applyFilterHandler = (value) => {
    setFilteredYear(value);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredYear}
          onFilterChange={applyFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
