import { screen } from '@testing-library/react';
import renderWithProviders from '../../shared/utils/test-utils';
import Banner from './banner';
import '@testing-library/jest-dom';

test('Проверка на наличие компоненента AdvantageCard в компоненте Banner', () => {
  renderWithProviders(<Banner />);

  expect(screen.getAllByTestId('advantage-card').length).toBe(3);
});
