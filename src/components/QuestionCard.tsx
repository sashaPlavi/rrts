import React from 'react';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnwers: any;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnwers,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button disabled={userAnwers} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
