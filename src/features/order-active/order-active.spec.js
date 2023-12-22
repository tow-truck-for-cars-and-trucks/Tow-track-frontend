import { screen, fireEvent } from '@testing-library/react';
import renderWithProviders, {
  mockTestData,
} from '../../shared/utils/test-utils';
import OrderActive from './order-active';
import '@testing-library/jest-dom';

test('Проверка на наличие компоненента DeliveryTime в компоненте OrderActive', () => {
  renderWithProviders(<OrderActive id={18} />, {
    preloadedState: {
      allOrders: {
        activeOrders: mockTestData,
      },
    },
  });

  expect(screen.getByTestId('delivery-time')).toBeInTheDocument();
  expect(screen.getByText('16:02')).toBeInTheDocument();
});

test('Проверка на наличие компоненента ProgressBar в компоненте OrderActive', () => {
  renderWithProviders(<OrderActive id={18} />, {
    preloadedState: {
      allOrders: {
        activeOrders: mockTestData,
      },
    },
  });

  expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
});

test('Проверка на наличие компоненента Alert в компоненте OrderActive', () => {
  renderWithProviders(<OrderActive id={18} />, {
    preloadedState: {
      allOrders: {
        activeOrders: mockTestData,
      },
    },
  });

  expect(screen.getByTestId('alert')).toBeInTheDocument();
});

test('Проверка на наличие компоненента кнопки "Связаться с водителем" в компоненте OrderActive', () => {
  renderWithProviders(<OrderActive id={18} />, {
    preloadedState: {
      allOrders: {
        activeOrders: mockTestData,
      },
    },
  });

  expect(
    screen.getByRole('button', { name: 'Связаться с водителем' })
  ).toBeInTheDocument();
});

test('Проверка на наличие кнопки "Отменить заказ" в компоненте OrderActive', () => {
  renderWithProviders(<OrderActive id={18} />, {
    preloadedState: {
      allOrders: {
        activeOrders: mockTestData,
      },
    },
  });

  expect(
    screen.getByRole('button', { name: 'Отменить заказ' })
  ).toBeInTheDocument();
});

test('Проверка на открытие попапа с отменой заказа при нажатии на кнопку "Отменить заказ', () => {
  renderWithProviders(<OrderActive id={18} />, {
    preloadedState: {
      allOrders: {
        activeOrders: mockTestData,
      },
    },
  });

  expect(screen.getByTestId('popup-cancel-order')).toHaveClass('popup-cancel');

  fireEvent.click(screen.getByRole('button', { name: 'Отменить заказ' }));

  expect(screen.getByTestId('popup-cancel-order')).toHaveClass(
    'popup-cancel active'
  );
});

test('Проверка наличия данных в компоненте OrderActive', () => {
  renderWithProviders(<OrderActive id={18} />, {
    preloadedState: {
      allOrders: {
        activeOrders: mockTestData,
      },
      allCars: { carType: [{ car_type: 'Легковой', id: 2 }] },
      allPricing: { tariff: [{ name: 'Эконом', id: 1 }] },
    },
  });

  expect(screen.getByText(/Москва, Красная пл., д.1/i)).toBeInTheDocument();
  expect(screen.getByText(/Москва, Красная пл., д.2/i)).toBeInTheDocument();
  expect(screen.getByText(/1820/i)).toBeInTheDocument();

  fireEvent.click(screen.getAllByTestId('accordion-icon')[0]);

  expect(screen.getByText('Легковой')).toBeInTheDocument();
  expect(screen.getByText('Эконом')).toBeInTheDocument();
  expect(screen.getByTestId('towin-caption').innerHTML).toBe('Нет');
  expect(screen.getByText('1 колесо')).toBeInTheDocument();
  expect(screen.getByTestId('delay-caption').innerHTML).toBe('Нет');

  fireEvent.click(screen.getAllByTestId('comment-button')[0]);

  expect(screen.getByText('Какой-то комментарий')).toBeInTheDocument();

  fireEvent.click(screen.getAllByTestId('accordion-icon')[1]);

  expect(screen.getByText('Констанитин Константиновский')).toBeInTheDocument();
  expect(screen.getByText('Isuzu NPR-75LK')).toBeInTheDocument();
  expect(screen.getByText('А 123 АА 77 RUS')).toBeInTheDocument();
  expect(screen.getByText('4')).toBeInTheDocument();
});
