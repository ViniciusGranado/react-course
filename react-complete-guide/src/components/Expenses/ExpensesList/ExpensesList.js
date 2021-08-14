import React from 'react';
import { ExpenseItem } from '../ExpenseItem/ExpenseItem';

import './ExpensesList.css';

export const ExpensesList = (props) => {
  if (!props.items.length) {
    return <p className='expenses-list__fallback'>No expenses found.</p>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};
