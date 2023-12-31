import './questions.scss';
import QuestionInfo from '../../entities/ui/questions-info/questions-info';
import questionsData from '../../shared/utils/questions';

function Questions() {
  return (
    <section className="questions" data-testid="questions">
      <h2 className="questions__title">Частые вопросы</h2>
      {questionsData.map((question) => (
        <QuestionInfo key={question.id} data={question} />
      ))}
    </section>
  );
}

export default Questions;
