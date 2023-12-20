import { screen } from '@testing-library/react';
import renderWithProviders from '../../../shared/utils/test-utils';
import '@testing-library/jest-dom';
import Feedbacks from './feedbacks';

test('Проверка на наличие компоненента Feedback в компоненте Feedbacks', () => {
  renderWithProviders(<Feedbacks />, {
    preloadedState: {
      feedbacks: {
        allFeedbacks: [{ score: 1, name: 'name', comment: 'comment' }],
      },
    },
  });

  expect(screen.getByTestId('feedback')).toBeInTheDocument();
});
