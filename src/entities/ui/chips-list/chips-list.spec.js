import { screen } from '@testing-library/react';
import renderWithProviders from '../../../shared/utils/test-utils';
import ChipsList from './chips-list';
import '@testing-library/jest-dom';

test('Проверка на наличие компоненента Chips в компоненте ChipsList', () => {
  renderWithProviders(
    <ChipsList
      chips={[
        { label: 'Активные', id: 'active' },
        { label: 'Завершенные', id: 'completed' },
        { label: 'Отмененные', id: 'cancelled' },
      ]}
    />
  );

  expect(screen.getAllByTestId('chip').length).toBe(3);
});
