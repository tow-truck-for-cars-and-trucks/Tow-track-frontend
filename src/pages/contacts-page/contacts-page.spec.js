import { screen } from '@testing-library/react';
import renderWithProviders from '../../shared/utils/test-utils';
import ContactsPage from './contacts-page';
import '@testing-library/jest-dom';

test('Проверка на наличие компоненента Header в компоненте ContactsPage', () => {
  renderWithProviders(<ContactsPage />);

  expect(screen.getByTestId('header')).toBeInTheDocument();
});

test('Проверка на наличие компоненента Contacts в компоненте ContactsPage', () => {
  renderWithProviders(<ContactsPage />);

  expect(screen.getByTestId('contacts')).toBeInTheDocument();
});

test('Проверка на наличие компоненента Footer в компоненте ContactsPage', () => {
  renderWithProviders(<ContactsPage />);

  expect(screen.getByTestId('footer')).toBeInTheDocument();
});
