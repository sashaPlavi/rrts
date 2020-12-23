import React from 'react';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnwer: any;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnwer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Qusetion: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <div>
            <button disabled={userAnwer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
      <div>bla</div>;
    </div>
  );
};

export default QuestionCard;
