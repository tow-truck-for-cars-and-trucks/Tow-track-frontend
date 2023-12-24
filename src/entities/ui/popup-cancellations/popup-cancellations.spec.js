import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderWithProviders from '../../../shared/utils/test-utils';
import PopupCancellations from './popup-cancellations';

test('Проверка на наличие компоненента Popup в компоненте PopupCancellations', () => {
  renderWithProviders(<PopupCancellations />);

  expect(screen.getByTestId('popup')).toBeInTheDocument();
});

test('Проверка на наличие радиокнопок в компоненте PopupCancellations', () => {
  renderWithProviders(<PopupCancellations />);

  expect(screen.getByTestId('error-radio')).toBeInTheDocument();
  expect(screen.getByTestId('cancell-radio')).toBeInTheDocument();
  expect(screen.getByTestId('not-suit-radio')).toBeInTheDocument();
  expect(screen.getByTestId('long-radio')).toBeInTheDocument();
  expect(screen.getByTestId('fast')).toBeInTheDocument();
  expect(screen.getByTestId('need')).toBeInTheDocument();
  expect(screen.getByTestId('other')).toBeInTheDocument();
});

test('Проверка на наличие comment в компоненте PopupCancellations', () => {
  renderWithProviders(<PopupCancellations />);

  fireEvent.click(screen.getByTestId('other'));

  expect(screen.getByTestId('comment')).toBeInTheDocument();
});

test('Проверка на наличие компоненента кнопки "Применить" в компоненте PopupCancellations', () => {
  renderWithProviders(<PopupCancellations />);

  expect(screen.getByRole('button', { name: 'Применить' })).toBeInTheDocument();
});
