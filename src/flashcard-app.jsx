import React, { useState } from 'react';
import Flashcard from './flashcard.jsx';
import FlashcardNavigation from './flashcard-navigation.jsx';
import './flashcard.css'
import AnswerInput from './answer-input.jsx';

function FlashcardApp({ flashcards }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  function handleNextCard() {
    setShowAnswer(false);
    setCurrentCardIndex((currentCardIndex + 1) % flashcards.length);
  }

  function handlePrevCard() {
    setShowAnswer(false);
    setCurrentCardIndex((currentCardIndex - 1 + flashcards.length) % flashcards.length);
  }

  function handleShowAnswer() {
    setShowAnswer(true);
  }

  return (
    <div className="flashcard-app">
      <Flashcard
        problem={flashcards[currentCardIndex].problem}
        explanation={flashcards[currentCardIndex].explanation}
        difficulty={flashcards[currentCardIndex].difficulty}
        showAnswer={showAnswer}
        onShowAnswer={handleShowAnswer}
      />
      <FlashcardNavigation
        onNextCard={handleNextCard}
        onPrevCard={handlePrevCard}
      />
      <AnswerInput
        onSubmit={handleNextCard}
        solution={flashcards[currentCardIndex].solution}
      />

    </div>
  );
}

export default FlashcardApp;