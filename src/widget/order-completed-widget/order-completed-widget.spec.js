import { screen, fireEvent } from '@testing-library/react';
import renderWithProviders, {
  mockTestData,
} from '../../shared/utils/test-utils';
import OrderCompletedWidget from './order-completed-widget';
import '@testing-library/jest-dom';

test('Проверка на наличие компоненента OrderNumber в компоненте OrderCompletedWidget', () => {
  renderWithProviders(<OrderCompletedWidget />, {
    preloadedState: {
      allOrders: {
        completedOrders: [
          {
            id: 18,
            orderDate: '2023-12-21T16:02:45+03:00',
          },
        ],
      },
    },
  });

  expect(screen.getByTestId('order-number')).toBeInTheDocument();
  expect(screen.getByText(/18/i)).toBeInTheDocument();
  expect(screen.getByText(/21.12.2023/i)).toBeInTheDocument();
});

test('Проверка на наличие компоненента OrderCancel в компоненте OrderCompletedWidget', () => {
  renderWithProviders(<OrderCompletedWidget />, {
    preloadedState: {
      allOrders: {
        completedOrders: mockTestData,
      },
    },
  });

  fireEvent.click(screen.getAllByTestId('arrow-button')[0]);
  expect(screen.getByTestId('complete-order')).toBeInTheDocument();
});
