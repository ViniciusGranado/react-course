import React, { useState } from 'react';
import { Card } from '../UI/Card/Card';
import { ExpensesFilter } from './ExpensesFilter/ExpensesFilter';
import { ExpensesList } from './ExpensesList/ExpensesList';
import { ExpensesChart } from './ExpensesChart/ExpensesChart';
import './Expenses.css';

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="Expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};
