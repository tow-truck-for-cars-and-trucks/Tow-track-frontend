import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../app/model/store';
import '@testing-library/jest-dom';
import Application from './application';

test('Проверка на наличие компоненента CreateOrder в компоненте Appliction', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Application />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByTestId('createOrder')).toBeInTheDocument();
});
