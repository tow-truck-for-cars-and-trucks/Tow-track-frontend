import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderWithProviders from '../../shared/utils/test-utils';
import PopupDeferredOrder from './popup-deferred-order';

test('Проверка на наличие компоненента Popup в компоненте PopupDeferredOrder', () => {
  renderWithProviders(<PopupDeferredOrder />);

  expect(screen.getByTestId('popup')).toBeInTheDocument();
});

test('Проверка на наличие dropdown в компоненте PopupDeferredOrder', () => {
  renderWithProviders(<PopupDeferredOrder />);

  expect(screen.getAllByTestId('dropdown').length).toBe(3);
});

test('Проверка на наличие компоненента кнопки "Сохранить" в компоненте PopupDeferredOrder', () => {
  renderWithProviders(<PopupDeferredOrder />);

  expect(screen.getByRole('button', { name: 'Сохранить' })).toBeInTheDocument();
});
