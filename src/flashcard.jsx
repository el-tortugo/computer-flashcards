// Flashcard.jsx
import React from 'react';

function Flashcard({ problem, solution, difficulty, showAnswer, onShowAnswer, explanation }) {
  return (
    <div className={`flashcard ${difficulty}`}>
      <div className="flashcard-content" onClick={onShowAnswer}>
        <div className="flashcard-problem">{showAnswer ? explanation : problem}</div>
        {!showAnswer && (
          <div className="flashcard-click-to-reveal">
            Click to reveal answer
          </div>
        )}
      </div>
    </div>
  );
}


export default Flashcard;