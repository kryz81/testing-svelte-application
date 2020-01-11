import ExpensesList from '../ExpensesList';
import { createComponent, cleanBody, fireInput } from '../../test_utils';

beforeEach(() => {
  cleanBody();
});

it('renders elements', async () => {
  const { renderedElement } = createComponent(ExpensesList, {
    list: [
      { id: 1, amount: 10, description: 'Item 1' },
      { id: 2, amount: 20, description: 'Item 2' },
      { id: 3, amount: 30, description: 'Item 3' },
    ],
  });

  expect(renderedElement.getElementsByClassName('card item').length).toBe(3);
});
