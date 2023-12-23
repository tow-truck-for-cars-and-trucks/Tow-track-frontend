import { screen, fireEvent } from '@testing-library/react';
import renderWithProviders, {
  mockTestData,
} from '../../shared/utils/test-utils';
import OrderComplete from './order-complete';
import '@testing-library/jest-dom';

test('Проверка на наличие кнопки "Оставить отзыв" в компоненте OrderComplete', () => {
  renderWithProviders(<OrderComplete id={18} />, {
    preloadedState: {
      allOrders: {
        completedOrders: mockTestData,
      },
    },
  });

  expect(
    screen.getAllByRole('button', { name: 'Оставить отзыв' })[0]
  ).toBeInTheDocument();
});

test('Проверка на открытие попапа с отменой заказа при нажатии на кнопку "Оставить отзыв"', () => {
  renderWithProviders(<OrderComplete id={18} />, {
    preloadedState: {
      allOrders: {
        completedOrders: mockTestData,
      },
    },
  });

  expect(screen.getByTestId('popup')).toHaveClass('popup');

  fireEvent.click(screen.getAllByRole('button', { name: 'Оставить отзыв' })[1]);

  expect(screen.getByTestId('popup')).not.toHaveClass('popup popup_active');
});

test('Проверка наличия данных в компоненте OrderComplete', () => {
  renderWithProviders(<OrderComplete id={18} />, {
    preloadedState: {
      allOrders: {
        completedOrders: mockTestData,
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

test('Проверка на наличие кнопки "Удалить запись" в компоненте OrderComplete', () => {
  renderWithProviders(<OrderComplete id={18} />, {
    preloadedState: {
      allOrders: {
        completedOrders: mockTestData,
      },
    },
  });

  expect(
    screen.getByRole('button', { name: 'Удалить запись' })
  ).toBeInTheDocument();
});
