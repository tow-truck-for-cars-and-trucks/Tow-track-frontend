import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { setupStore } from '../../app/model/store';

export default function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export const mockTestData = [
  {
    id: 18,
    addressFrom: 'Москва, Красная пл., д.1',
    addressTo: 'Москва, Красная пл., д.2',
    carType: 2,
    delay: false,
    orderDate: '2023-12-21T16:02:45+03:00',
    tariff: 1,
    wheelLock: 1,
    towin: false,
    comment: 'Какой-то комментарий',
    total: 1820,
    driver: 'Констанитин Константиновский',
    modelCar: 'Isuzu NPR-75LK',
    licensePlates: 'А 123 АА 77 RUS',
    avarageScore: 4,
  },
];
