import { screen } from '@testing-library/react';
import renderWithProviders from '../../shared/utils/test-utils';
import MyOrderPage from './my-order-page';
import '@testing-library/jest-dom';

test('Проверка на наличие компоненента Header в компоненте MyOrderPage', () => {
  renderWithProviders(<MyOrderPage />);

  expect(screen.getByTestId('header')).toBeInTheDocument();
});

test('Проверка на наличие компоненента MyOrder в компоненте MyOrderPage', () => {
  renderWithProviders(<MyOrderPage />);

  expect(screen.getByTestId('my-order')).toBeInTheDocument();
});

test('Проверка на наличие компоненента Footer в компоненте MyOrderPage', () => {
  renderWithProviders(<MyOrderPage />);

  expect(screen.getByTestId('footer')).toBeInTheDocument();
});
