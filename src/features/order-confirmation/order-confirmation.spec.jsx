import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderWithProviders from '../../shared/utils/test-utils';
import OrderConfirmation from './order-confirmation';

test('Проверка на наличие BackButton в компоненте OrderConfirmation', () => {
  renderWithProviders(<OrderConfirmation />);

  expect(screen.getByLabelText('Назад')).toBeInTheDocument();
});

test('Проверка на наличие заголовка в компоненте OrderConfirmation', () => {
  renderWithProviders(<OrderConfirmation />);

  expect(screen.getByTestId('pages-title')).toBeInTheDocument();
});

test('Проверка на наличие всех Input в компоненте OrderConfirmation', () => {
  renderWithProviders(<OrderConfirmation />);

  expect(screen.getByTestId('referencePoint')).toBeInTheDocument();
  expect(screen.getByTestId('arrivalPoint')).toBeInTheDocument();
});

test('Проверка на наличие времени прибытия в компоненте OrderConfirmation', () => {
  renderWithProviders(<OrderConfirmation />);

  expect(screen.getByTestId('timeOfArrival')).toBeInTheDocument();
});

test('Проверка на наличие выбранноого спосооба оплаты в компоненте OrderConfirmation', () => {
  renderWithProviders(<OrderConfirmation />);

  expect(screen.getByTestId('chip-list')).toBeInTheDocument();
});

test('Проверка на наличие деталей заказа  в компоненте OrderConfirmation', () => {
  renderWithProviders(<OrderConfirmation />);

  expect(screen.getByTestId('order-details')).toBeInTheDocument();
});

test('Проверка на наличие стоимости заказа в компоненте OrderConfirmation', () => {
  renderWithProviders(<OrderConfirmation />);

  expect(screen.getByTestId('total-price')).toBeInTheDocument();
});
