import { screen } from '@testing-library/react';
import renderWithProviders from '../../shared/utils/test-utils';
import Questions from './questions';
import '@testing-library/jest-dom';

test('Проверка на наличие компоненента QuestionInfo в компоненте Questions', () => {
  renderWithProviders(<Questions />);

  expect(screen.getAllByTestId('question-info').length).toBe(3);
});
