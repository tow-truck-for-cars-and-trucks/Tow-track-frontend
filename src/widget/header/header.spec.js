import { screen, fireEvent } from '@testing-library/react';
import renderWithProviders from '../../shared/utils/test-utils';
import Header from './header';

import '@testing-library/jest-dom';

test('Проверка на открытие меню при нажатии на кнопку бургера', () => {
  renderWithProviders(<Header />);

  expect(screen.getByTestId('menu')).toHaveClass('menu_display-none');

  fireEvent.click(screen.getByTestId('burger-menu'));

  expect(screen.getByTestId('menu')).not.toHaveClass('menu_display-none');
});

test('Проверка на наличие DesktopMenu в компоненте Header', () => {
  renderWithProviders(<Header />);

  expect(screen.getByTestId('desktop-menu')).toBeInTheDocument();
});

test('Проверка на наличие Profile в компоненте Header', () => {
  renderWithProviders(<Header />);

  expect(screen.getByTestId('profile')).toBeInTheDocument();
});

test('Проверка на наличие PopupCancel в компоненте Header', () => {
  renderWithProviders(<Header />);

  fireEvent.click(screen.getByTestId('profile-button'));

  expect(screen.getByTestId('popup-cancel-order')).toBeInTheDocument();
});
