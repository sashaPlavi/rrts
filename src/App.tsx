import React, { useState } from 'react';

import { fetchQuizQuestion, Difficulty, QusetionState } from './API';
//types

import styled from 'styled-components';
import QusestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;

const MainWraper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  corectAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QusetionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestion(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const CheckAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const NextQuestion = () => {};

  return (
    <MainWraper>
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      ) : null}
      {!gameOver ? <p className="score">Score:10</p> : null}
      {loading ? <p>Loadin Questios</p> : null}

      {!loading && !gameOver && (
        <QusestionCard
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnwers={userAnswers ? userAnswers[number] : undefined}
          callback={CheckAnswer}
        />
      )}
      {!loading &&
      !gameOver &&
      userAnswers.length == number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={NextQuestion}>
          Next Question
        </button>
      ) : null}
    </MainWraper>
  );
};

export default App;
