import React, { useState } from 'react';

import { fetchQuizQuestion, Difficulty } from './API';
//types

import styled from 'styled-components';
import QusestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;

const MainWraper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setscore] = useState(0);
  const [gameOver, setgameOver] = useState(true);

  console.log(fetchQuizQuestion(TOTAL_QUESTIONS, Difficulty.EASY));

  const StartTrivia = async () => {};
  const CheckAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const NextQuestion = () => {};

  return (
    <MainWraper>
      <h1>React Quiz</h1>
      <button className="start" onClick={StartTrivia}>
        Start
      </button>
      <p className="score">Score:10</p>
      <p>Loadin Questios</p>
      <button className="next" onClick={NextQuestion}>
        Next Question
      </button>
      {/* <QusestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnwers={userAnswers ? userAnswers[number] : undefined}
      /> */}
    </MainWraper>
  );
};

export default App;
