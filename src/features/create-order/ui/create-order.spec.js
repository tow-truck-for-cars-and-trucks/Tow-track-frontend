import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import renderWithProviders from '../../../shared/utils/test-utils';
import CreateOrder from './create-order';

const mock = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mock,
}));

test('Возвращение стоимости заказа', async () => {
  renderWithProviders(<CreateOrder />);

  expect(mock).not.toHaveBeenCalled();

  let addressFrominput = screen.getByTestId('addressFrom');

  act(() => {
    userEvent.type(addressFrominput, 'Москва, Красная площадь, д.1');
  });
  addressFrominput = screen.getByTestId('addressFrom');
  expect(addressFrominput.value).toBe('Москва, Красная площадь, д.1');

  let addressToinput = screen.getByTestId('addressTo');

  act(() => {
    userEvent.type(addressToinput, 'Москва, Красная площадь, д.2');
  });

  addressToinput = screen.getByTestId('addressTo');
  expect(addressToinput.value).toBe('Москва, Красная площадь, д.2');

  await new Promise((r) => {
    setTimeout(r, 2000);
  });

  expect(mock).toHaveBeenCalledTimes(2);
});

test('Проверка на наличие компоненента Input в компоненте CreateOrder', () => {
  renderWithProviders(<CreateOrder />);

  expect(screen.getByTestId('addressFrom')).toBeInTheDocument();
  expect(screen.getByTestId('addressTo')).toBeInTheDocument();
});

test('Проверка на наличие компоненента Description в компоненте CreateOrder', () => {
  renderWithProviders(<CreateOrder />);

  expect(screen.getByTestId('description')).toBeInTheDocument();
});

test('Проверка на наличие компоненента ChipList в компоненте CreateOrder', () => {
  renderWithProviders(<CreateOrder />);

  expect(screen.getByTestId('chip-list')).toBeInTheDocument();
});

test('Проверка на наличие компоненента ButtonToggle в компоненте CreateOrder', () => {
  renderWithProviders(<CreateOrder />);

  expect(screen.getByTestId('towin')).toBeInTheDocument();
  expect(screen.getByTestId('delay')).toBeInTheDocument();
});

test('Проверка на наличие компоненента PricingList в компоненте CreateOrder', () => {
  renderWithProviders(<CreateOrder />);

  expect(screen.getByTestId('pricing-list')).toBeInTheDocument();
});

test('Проверка на наличие компоненента ButtonController в компоненте CreateOrder', () => {
  renderWithProviders(<CreateOrder />);

  expect(screen.getByTestId('button-controller')).toBeInTheDocument();
});

test('Проверка на наличие компоненента Comment в компоненте CreateOrder', () => {
  renderWithProviders(<CreateOrder />);

  expect(screen.getByTestId('comment')).toBeInTheDocument();
});

test('Проверка на наличие компоненента TotalPrice в компоненте CreateOrder', () => {
  renderWithProviders(<CreateOrder />);

  expect(screen.getByTestId('total-price')).toBeInTheDocument();
});
