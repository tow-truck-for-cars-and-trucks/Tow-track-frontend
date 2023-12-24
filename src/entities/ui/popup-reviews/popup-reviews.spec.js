import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderWithProviders from '../../../shared/utils/test-utils';
import PopupReviews from './popup-reviews';

test('Проверка на наличие компоненента Popup в компоненте PopupDeferredOrder', () => {
  renderWithProviders(<PopupReviews />);

  expect(screen.getByTestId('popup')).toBeInTheDocument();
});

test('Проверка на наличие buttonStar в компоненте PopupDeferredOrder', () => {
  renderWithProviders(<PopupReviews />);

  expect(screen.getByTestId('button-star')).toBeInTheDocument();
});

test('Проверка на наличие checkbox в компоненте PopupDeferredOrder', () => {
  renderWithProviders(<PopupReviews />);

  expect(screen.getAllByTestId('checkbox')[0]).toBeInTheDocument();
});

test('Проверка на наличие comment в компоненте PopupDeferredOrder', () => {
  renderWithProviders(<PopupReviews />);

  expect(screen.getByTestId('comment')).toBeInTheDocument();
});

test('Проверка на наличие компоненента кнопки "Оставить отзыв" в компоненте PopupDeferredOrder', () => {
  renderWithProviders(<PopupReviews />);

  expect(
    screen.getByRole('button', { name: 'Оставить отзыв' })
  ).toBeInTheDocument();
});
