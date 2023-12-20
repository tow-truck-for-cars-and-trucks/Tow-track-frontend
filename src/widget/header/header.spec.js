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
