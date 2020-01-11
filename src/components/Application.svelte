<script>
  import ApplicationHeader from './ApplicationHeader';
  import ExpensesList from './ExpensesList';
  import AddExpense from './AddExpense';
  import ExpensesSum from './ExpensesSum';
  import {
    fetchExpenses,
    addExpense,
    deleteExpense,
  } from '../services/expenses';

  const APP_VERSION = '1.2.1'; // in real world it would be injected on application build
  let expensesList = [];
  let filter = '';

  const getExpenses = async () => {
    expensesList = await fetchExpenses(filter);
  };

  const onFilter = ({ detail }) => {
    filter = detail;
    getExpenses();
  };

  const onAdd = async ({ detail }) => {
    await addExpense(detail.amount, detail.description);
    getExpenses();
  };

  const onDelete = async ({ detail }) => {
    await deleteExpense(detail);
    getExpenses();
  };

  getExpenses();
</script>

<div class="container">
  <div class="row">
    <div class="col-md-12">
      <ApplicationHeader appVersion={`v${APP_VERSION}`} />
      <AddExpense on:add={onAdd} />
      <hr />
      <ExpensesList
        list={expensesList}
        on:filter={onFilter}
        on:delete={onDelete} />
      <ExpensesSum items={expensesList} />
    </div>
  </div>
</div>
