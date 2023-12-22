import { screen, fireEvent } from '@testing-library/react';
import renderWithProviders from '../../shared/utils/test-utils';
import NotFound from './not-found';
import '@testing-library/jest-dom';

test('Тест для проверки навигации на главную страницу', () => {
  renderWithProviders(<NotFound />);

  const navigateButton = screen.getByText(/Эвакуироваться на главную/i);
  expect(navigateButton).toBeInTheDocument();

  fireEvent.click(navigateButton);

  expect(window.location.pathname).toBe('/');
});
