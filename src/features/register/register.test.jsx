import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderWithProviders from '../../shared/utils/test-utils';
import Register from './register';

test('Проверка на наличие всех Input в компоненте Register', () => {
  renderWithProviders(<Register />);

  expect(screen.getByTestId('firstName')).toBeInTheDocument();
  expect(screen.getByTestId('phoneNumber')).toBeInTheDocument();
  expect(screen.getByTestId('password')).toBeInTheDocument();
  expect(screen.getByTestId('confirmPassword')).toBeInTheDocument();
});

test('Проверка на наличие Checkbox в компоненте Register', () => {
  renderWithProviders(<Register />);

  expect(screen.getByLabelText('Чекбокс')).toBeInTheDocument();
});

test('Проверка на наличие CheckboxAuthDescription в компоненте Register', () => {
  renderWithProviders(<Register />);

  expect(screen.getByTestId('description')).toBeInTheDocument();
});

test('Проверка на наличие Button в компоненте Register', () => {
  renderWithProviders(<Register />);

  expect(screen.getByText('Зарегистрироваться')).toBeInTheDocument();
});
