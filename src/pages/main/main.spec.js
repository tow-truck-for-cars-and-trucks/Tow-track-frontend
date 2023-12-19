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
