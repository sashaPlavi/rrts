import React from 'react';

import styled from 'styled-components';
import QusestionCard from './components/QuestionCard';

const MainWraper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const App = () => {
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
      <QusestionCard />
    </MainWraper>
  );
};

export default App;
