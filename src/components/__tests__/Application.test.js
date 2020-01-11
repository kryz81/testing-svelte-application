import { render, fireEvent, act } from '@testing-library/svelte';
import Application from '../Application';

it('renders proper application version', () => {
  const { getByText } = render(Application);
  expect(getByText('My Expense Tracker v1.2.1')).toBeInTheDocument();
});

it('adds a new expense', async () => {
  let result;
  await act(() => (result = render(Application)));

  const addBtn = result.getByText('ADD');
  const amountInput = document.getElementById('amountInput');
  const descriptionInput = document.getElementById('descriptionInput');
  const items = result.container.getElementsByClassName('card item');

  // initial items number
  expect(items.length).toBe(3);

  // add a new expense
  await fireEvent.input(amountInput, { target: { value: '11.29' } });
  await fireEvent.input(descriptionInput, { target: { value: 'Oranges' } });
  await fireEvent.click(addBtn);

  await Promise.resolve();

  expect(items.length).toBe(4);
});
