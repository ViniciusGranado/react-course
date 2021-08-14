import React, { useState } from 'react';
import { ExpenseItem } from './ExpenseItem/ExpenseItem';
import { Card } from '../UI/Card/Card';
import { ExpensesFilter } from './ExpensesFilter/ExpensesFilter';
import './Expenses.css';

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const getExpenseItems = (expenses) => {
    return expenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
      />
      )
    })
  }

  return (
    <>
      <Card className="Expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {getExpenseItems(props.items)}
      </Card>
    </>
  );
};
