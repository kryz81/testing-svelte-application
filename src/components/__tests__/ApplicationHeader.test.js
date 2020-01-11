import ApplicationHeader from '../ApplicationHeader';
import { createComponent, cleanBody } from '../../test_utils';

beforeEach(() => {
  cleanBody();
});

it('renders without error', async () => {
  const result = () =>
    createComponent(ApplicationHeader, { appVersion: 'v1.0' });

  expect(result).not.toThrowError();
});

it('correctly renders the component', () => {
  const { renderedElement } = createComponent(ApplicationHeader, {
    appVersion: 'v1.0',
  });

  expect(renderedElement).toMatchSnapshot();
});

it('correctly renders the app header', () => {
  const { renderedElement } = createComponent(ApplicationHeader, {
    appVersion: 'v1.0',
  });

  const result = renderedElement.getElementsByTagName('h2');

  expect(result[0].innerHTML).toEqual('My Expense Tracker v1.0');
});
