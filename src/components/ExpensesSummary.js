import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

const ExpensesSummary = (props) => (
  <div>
    <p>
      Viewing {props.expenseCount}{' '}
      {props.expenseCount === 1 ? 'expense' : 'expenses'} totalling{' '}
      {props.expensesTotal}
    </p>
  </div>
);

const mapStateToProps = (state) => {
  const expenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: expenses.length,
    expensesTotal: numeral(getExpensesTotal(expenses) / 100).format('$0,0.00')
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
