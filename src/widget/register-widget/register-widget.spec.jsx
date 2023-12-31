import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import renderWithProviders from '../../shared/utils/test-utils';
import RegisterWidget from './register-widget';

test('Проверка на наличие ChipsList в компоненте RegisterWidget', () => {
  renderWithProviders(<RegisterWidget />);

  expect(screen.getByTestId('chip-list')).toBeInTheDocument();
});

test('Проверка на наличие Auth в компоненте RegisterWidget', async () => {
  renderWithProviders(<RegisterWidget />);

  await userEvent.click(screen.getByText('Вход'));
  expect(screen.getByTestId('auth')).toBeInTheDocument();
});

test('Проверка на наличие Register в компоненте RegisterWidget', async () => {
  renderWithProviders(<RegisterWidget />);

  await userEvent.click(screen.getByText('Регистрация'));
  expect(screen.getByTestId('register')).toBeInTheDocument();
});
