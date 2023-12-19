import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../app/model/store';
import Main from './main';
import '@testing-library/jest-dom';

test('Проверка на наличие компоненента Header в компоненте Main', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByTestId('header')).toBeInTheDocument();
});

test('Проверка на наличие компоненента Banner в компоненте Main', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByTestId('banner')).toBeInTheDocument();
});

test('Проверка на наличие компоненента Application в компоненте Main', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByTestId('application')).toBeInTheDocument();
});

test('Проверка на наличие компоненента Feedbacks в компоненте Main', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByTestId('feedbacks')).toBeInTheDocument();
});

test('Проверка на наличие компоненента Questions в компоненте Main', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByTestId('questions')).toBeInTheDocument();
});

test('Проверка на наличие компоненента Footer в компоненте Main', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByTestId('footer')).toBeInTheDocument();
});
