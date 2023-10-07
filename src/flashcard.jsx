import React, { useState } from 'react';
import './flashcard.css';
import AnswerInput from './answer-input';

function Flashcard({ problem, solution, difficulty }) {
  const [isCorrect, setIsCorrect] = useState(null);

  function handleAnswerSubmit(answer) {
    setIsCorrect(answer === solution);
  }

  const difficultyClass = `flashcard-${difficulty}`;

  return (
    <div className={`flashcard ${difficultyClass}`}>
      <div className="flashcard-content">
        <div className="flashcard-problem">{problem}</div>
        {isCorrect === null ? (
          <AnswerInput onSubmit={handleAnswerSubmit} solution={solution} />
        ) : (
          <div className={`flashcard-solution ${isCorrect ? 'flashcard-correct' : 'flashcard-incorrect'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect!'}
            <div className="flashcard-solution-text">{solution}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Flashcard;