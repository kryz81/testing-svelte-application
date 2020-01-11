let fakeDBStorage = [
  {
    id: 1,
    amount: 399,
    description: 'Office table, chair',
  },
  {
    id: 2,
    amount: 19.75,
    description: 'Weekly travelcard',
  },
  {
    id: 3,
    amount: 56.43,
    description: 'Pizza, pierogi, drinks',
  },
];

export const fetchExpenses = filter => {
  const items = filter
    ? fakeDBStorage.filter(item =>
        item.description.toUpperCase().startsWith(filter.toUpperCase())
      )
    : fakeDBStorage;

  return Promise.resolve([...items]);
};

export const addExpense = (amount, description) => {
  fakeDBStorage = [
    { id: fakeDBStorage.length + 1, amount: Number(amount), description },
    ...fakeDBStorage,
  ];
  return Promise.resolve();
};

export const deleteExpense = expenseId => {
  fakeDBStorage = fakeDBStorage.filter(item => item.id !== expenseId);
  return Promise.resolve();
};
