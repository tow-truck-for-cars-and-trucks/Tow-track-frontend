import { screen } from '@testing-library/react';
import renderWithProviders from '../../shared/utils/test-utils';
import Main from './main';
import '@testing-library/jest-dom';

test('Проверка на наличие компоненента Header в компоненте Main', () => {
  renderWithProviders(<Main />);

  expect(screen.getByTestId('header')).toBeInTheDocument();
});

test('Проверка на наличие компоненента Banner в компоненте Main', () => {
  renderWithProviders(<Main />);

  expect(screen.getByTestId('banner')).toBeInTheDocument();
});

test('Проверка на наличие компоненента Application в компоненте Main', () => {
  renderWithProviders(<Main />);

  expect(screen.getByTestId('application')).toBeInTheDocument();
});

test('Проверка на наличие компоненента Feedbacks в компоненте Main', () => {
  renderWithProviders(<Main />);

  expect(screen.getByTestId('feedbacks')).toBeInTheDocument();
});

test('Проверка на наличие компоненента Questions в компоненте Main', () => {
  renderWithProviders(<Main />);

  expect(screen.getByTestId('questions')).toBeInTheDocument();
});

test('Проверка на наличие компоненента Footer в компоненте Main', () => {
  renderWithProviders(<Main />);

  expect(screen.getByTestId('footer')).toBeInTheDocument();
});
