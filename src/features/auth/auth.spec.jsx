import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderWithProviders from '../../shared/utils/test-utils';
import Auth from './auth';

test('Проверка на наличие всех Input в компоненте Auth', () => {
  renderWithProviders(<Auth />);

  expect(screen.getByTestId('phoneNumber')).toBeInTheDocument();
  expect(screen.getByTestId('password')).toBeInTheDocument();
});

test('Проверка на наличие Button в компоненте Auth', () => {
  renderWithProviders(<Auth />);

  expect(screen.getByText('Войти')).toBeInTheDocument();
});
