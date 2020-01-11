import AddExpense from '../AddExpense';
import { createComponent, cleanBody, fireInput } from '../../test_utils';

const mock = jest.fn();

jest.mock('svelte', () => ({
  createEventDispatcher: () => mock,
}));

beforeEach(() => {
  cleanBody();
  mock.mockReset();
});

it('triggers a new expense add after button click', () => {
  const { renderedElement } = createComponent(AddExpense);

  const amountInput = renderedElement.getElementsByClassName(
    'form-control amount'
  );
  fireInput(amountInput[0], '1250');

  const descriptionInput = renderedElement.getElementsByClassName(
    'form-control description'
  );
  fireInput(descriptionInput[0], 'Laptop');

  const btn = renderedElement.getElementsByTagName('button');
  btn[0].click();

  expect(mock).toBeCalledWith('add', { amount: '1250', description: 'Laptop' });
});

it('clears input fields after expense add', async () => {
  const { renderedElement } = createComponent(AddExpense);

  const amountInput = renderedElement.getElementsByClassName(
    'form-control amount'
  );
  fireInput(amountInput[0], '500');

  const descriptionInput = renderedElement.getElementsByClassName(
    'form-control description'
  );
  fireInput(descriptionInput[0], 'Mobile');

  const btn = renderedElement.getElementsByTagName('button');
  btn[0].click();

  // give svelte chance to update components
  await Promise.resolve();

  expect(descriptionInput[0].value).toEqual('');
  expect(amountInput[0].value).toEqual('');
});

it('does not trigger add when the amount is not a number', () => {
  const { renderedElement } = createComponent(AddExpense);

  const btn = renderedElement.getElementsByTagName('button');
  btn[0].click();

  expect(mock).not.toBeCalled();
});
