import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import store from '../../app/model/store';
import Header from './header';
import '@testing-library/jest-dom';

test('Проверка на открытие меню при нажатии на кнопку бургера', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByTestId('menu')).toHaveClass('menu_display-none');

  fireEvent.click(screen.getByTestId('burger-menu'));

  expect(screen.getByTestId('menu')).not.toHaveClass('menu_display-none');
});
