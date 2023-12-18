import './questions.scss';
import QuestionInfo from '../../entities/ui/questions-info/questions-info';
import questionsData from '../../shared/utils/questions';

function Questions() {
  return (
    <section className="questions">
      <div className="questions__header">
        <h2 className="questions__title">Частые вопросы</h2>
      </div>
      {questionsData.map((question) => (
        <QuestionInfo key={question.id} data={question} />
      ))}
    </section>
  );
}

export default Questions;
