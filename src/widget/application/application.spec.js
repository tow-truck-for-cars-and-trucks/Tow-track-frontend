import { screen } from '@testing-library/react';
import renderWithProviders from '../../shared/utils/test-utils';
import '@testing-library/jest-dom';
import Application from './application';

test('Проверка на наличие компоненента CreateOrder в компоненте Appliction', () => {
  renderWithProviders(<Application />);

  expect(screen.getByTestId('createOrder')).toBeInTheDocument();
});
