import { screen } from '@testing-library/react';
import renderWithProviders from '../../shared/utils/test-utils';
import Contacts from './contacts';
import '@testing-library/jest-dom';

test('Проверка на наличие компоненента PagesTitle в компоненте Contacts', () => {
  renderWithProviders(<Contacts />);

  expect(screen.getByTestId('pages-title')).toBeInTheDocument();
});
