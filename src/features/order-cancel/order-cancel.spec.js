import { screen, fireEvent } from '@testing-library/react';
import renderWithProviders, {
  mockTestData,
} from '../../shared/utils/test-utils';
import OrderCancel from './order-cancel';
import '@testing-library/jest-dom';

test('Проверка наличия данных в компоненте OrderCancel', () => {
  renderWithProviders(<OrderCancel id={18} />, {
    preloadedState: {
      allOrders: {
        cancelledOrders: mockTestData,
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

test('Проверка на наличие кнопки "Удалить запись" в компоненте OrderCancel', () => {
  renderWithProviders(<OrderCancel id={18} />, {
    preloadedState: {
      allOrders: {
        cancelledOrders: mockTestData,
      },
    },
  });

  expect(
    screen.getByRole('button', { name: 'Удалить запись' })
  ).toBeInTheDocument();
});
