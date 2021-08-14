import React, { useState } from 'react';
import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';

export const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const openExpenseForm = () => {
    setShowForm(true);
  };
  const closeExpenseForm = () => {
    setShowForm(false);
  };

  const getNewExpenseContent = () => {
    return showForm ? (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        closeExpenseForm={closeExpenseForm}
      />
    ) : (
      <button onClick={openExpenseForm}>Add New Expense</button>
    );
  };

  return (
    <div className="new-expense">
      {getNewExpenseContent()}
    </div>
  );
};
