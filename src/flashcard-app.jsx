import React, { useState } from 'react';
import Flashcard from './Flashcard';

import FlashcardNavigation from './flashcard-navigation.jsx';
import './flashcard.css'

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
        solution={flashcards[currentCardIndex].solution}
        difficulty={flashcards[currentCardIndex].difficulty}
        showAnswer={showAnswer}
        onShowAnswer={handleShowAnswer}
      />
      <FlashcardNavigation
        onNextCard={handleNextCard}
        onPrevCard={handlePrevCard}
      />
    </div>
  );
}

export default FlashcardApp;