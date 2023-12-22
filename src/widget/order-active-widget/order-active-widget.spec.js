import { screen, fireEvent } from '@testing-library/react';
import renderWithProviders from '../../shared/utils/test-utils';
import OrderActiveWidget from './order-active-widget';
import '@testing-library/jest-dom';

const mockTestData = [
  {
    id: 18,
    addressFrom: 'Москва, Красная пл., д.1',
    addressTo: 'Москва, Красная пл., д.2',
    carType: 2,
    delay: false,
    orderDate: '2023-12-21T16:02:45+03:00',
    tariff: 1,
    wheelLock: 1,
    towin: false,
    comment: 'Какой-то комментарий',
    total: 1820,
    driver: 'Констанитин Константиновский',
    modelCar: 'Isuzu NPR-75LK',
    licensePlates: 'А 123 АА 77 RUS',
    avarageScore: 4,
  },
];

test('Проверка на наличие компоненента OrderNumber в компоненте OrderActiveWidget', () => {
  renderWithProviders(<OrderActiveWidget />, {
    preloadedState: {
      allOrders: {
        activeOrders: [
          {
            id: 18,
            orderDate: '2023-12-21T16:02:45+03:00',
          },
        ],
      },
    },
  });

  expect(screen.getByTestId('order-number')).toBeInTheDocument();
  expect(screen.getByText(/18/i)).toBeInTheDocument();
  expect(screen.getByText(/21.12.2023/i)).toBeInTheDocument();
});

test('Проверка на наличие компоненента OrderActive в компоненте OrderActiveWidget', () => {
  renderWithProviders(<OrderActiveWidget />, {
    preloadedState: {
      allOrders: {
        activeOrders: mockTestData,
      },
    },
  });

  fireEvent.click(screen.getAllByTestId('arrow-button')[0]);
  expect(screen.getByTestId('order-active')).toBeInTheDocument();
});

// test('Проверка на наличие OrderActive в компоненте OrderActiveWidget', () => {
//   renderWithProviders(<OrderActiveWidget />, {
//     preloadedState: {
//       allOrders: {
//         activeOrders: mockTestData,
//       },
//       allCars: { carType: [{ car_type: 'Легковой', id: 2 }] },
//       allPricing: { tariff: [{ name: 'Эконом', id: 1 }] },
//     },
//   });

//   fireEvent.click(screen.getAllByTestId('arrow-button')[0]);
//   expect(screen.getByTestId('order-active')).toBeInTheDocument();
//   expect(screen.getByText('16:02')).toBeInTheDocument();
//   expect(screen.getByText(/Москва, Красная пл., д.1/i)).toBeInTheDocument();
//   expect(screen.getByText(/Москва, Красная пл., д.2/i)).toBeInTheDocument();
//   expect(screen.getByText(/1820/i)).toBeInTheDocument();

//   fireEvent.click(screen.getAllByTestId('accordion-icon')[0]);

//   expect(screen.getByText('Легковой')).toBeInTheDocument();
//   expect(screen.getByText('Эконом')).toBeInTheDocument();
//   expect(screen.getByTestId('towin-caption').innerHTML).toBe('Нет');
//   expect(screen.getByText('1 колесо')).toBeInTheDocument();
//   expect(screen.getByTestId('delay-caption').innerHTML).toBe('Нет');

//   fireEvent.click(screen.getAllByTestId('comment-button')[0]);

//   expect(screen.getByText('Какой-то комментарий')).toBeInTheDocument();

//   fireEvent.click(screen.getAllByTestId('accordion-icon')[1]);

//   expect(screen.getByText('Констанитин Константиновский')).toBeInTheDocument();
//   expect(screen.getByText('Isuzu NPR-75LK')).toBeInTheDocument();
//   expect(screen.getByText('А 123 АА 77 RUS')).toBeInTheDocument();
//   expect(screen.getByText('4')).toBeInTheDocument();
// });
