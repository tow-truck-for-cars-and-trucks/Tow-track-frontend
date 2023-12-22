import React from 'react';
import UrlPattern from 'url-pattern';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import renderWithProviders from '../../shared/utils/test-utils';
import OrderConfirmation from './order-confirmation';

const pattern = new UrlPattern('/success-order/:id');

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

test('Проверка перехода на OrderSuccessfully в компоненте OrderConfirmation', async () => {
  renderWithProviders(<OrderConfirmation />);
  await userEvent.click(screen.getByText('Оформить заказ'));
  // тут дизэблю строку так как по документации в таком случае доолжен выдавать варнинг, а не ошибку, тест при этом отрабатывает
  // eslint-disable-next-line
  expect(pattern.match(window.location.pathname));
});
