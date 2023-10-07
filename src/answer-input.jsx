import React, { useState } from 'react';
import './answer-Input.css';

function AnswerInput({ onSubmit, solution }) {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  function handleAnswerChange(event) {
    setAnswer(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsCorrect(answer === solution);
    onSubmit(answer);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Answer:
        <input type="text" value={answer} onChange={handleAnswerChange} />
      </label>
      <button type="submit">Submit</button>
      {isCorrect !== null && (
        <div className={`flashcard-answer-message ${isCorrect ? 'flashcard-correct' : 'flashcard-incorrect'}`}>
          {isCorrect ? 'Correct!' : 'Incorrect! The answer is: ' + solution}
        </div>
      )}
    </form>
  );
}

export default AnswerInput;