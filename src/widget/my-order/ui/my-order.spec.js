import { screen, fireEvent } from '@testing-library/react';
import renderWithProviders from '../../../shared/utils/test-utils';
import MyOrder from './my-order';
import '@testing-library/jest-dom';

test('Проверка на наличие компоненента PagesTitle в компоненте MyOrder', () => {
  renderWithProviders(<MyOrder />);

  expect(screen.getByTestId('pages-title')).toBeInTheDocument();
});

test('Проверка на наличие компоненента ChipList в компоненте MyOrder', () => {
  renderWithProviders(<MyOrder />);

  expect(screen.getByTestId('chip-list')).toBeInTheDocument();
});

test('При нажатии на activeTab "active" отрендерится OrderActiveWidget в компоненте MyOrder', () => {
  renderWithProviders(<MyOrder />);

  const elems = screen.getAllByTestId('chip');

  fireEvent.click(elems[0]);

  expect(screen.getByTestId('active-order-widget')).toBeInTheDocument();
});

test('При нажатии на activeTab "completed" отрендерится OrderCompletedWidget в компоненте MyOrder', () => {
  renderWithProviders(<MyOrder />);

  const elems = screen.getAllByTestId('chip');

  fireEvent.click(elems[1]);

  expect(screen.getByTestId('comleted-order-widget')).toBeInTheDocument();
});

test('При нажатии на activeTab "cancelled" отрендерится OrderCancelWidget в компоненте MyOrder', () => {
  renderWithProviders(<MyOrder />);

  const elems = screen.getAllByTestId('chip');

  fireEvent.click(elems[2]);

  expect(screen.getByTestId('cancelled-order-widget')).toBeInTheDocument();
});
