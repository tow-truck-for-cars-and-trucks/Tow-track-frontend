import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderWithProviders from '../../../shared/utils/test-utils';
import PopupCancel from './popup-cancel';

test('Проверка на наличие компоненента Popup в компоненте PopupCancel', () => {
  renderWithProviders(<PopupCancel />);

  expect(screen.getByTestId('popup')).toBeInTheDocument();
});

test('Проверка на наличие компоненента кнопки "Вернуться" в компоненте PopupCancel', () => {
  renderWithProviders(<PopupCancel />);

  expect(screen.getByRole('button', { name: 'Вернуться' })).toBeInTheDocument();
});

test('Проверка на наличие компоненента кнопки "Да, отменить" в компоненте PopupCancel', () => {
  renderWithProviders(<PopupCancel />);

  expect(screen.getByTestId('popup')).toHaveClass('popup');

  fireEvent.click(screen.getByRole('button', { name: 'Да, отменить' }));

  expect(screen.getByTestId('popup')).toHaveClass('popup popup_active');
});
