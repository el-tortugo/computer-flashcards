// FlashcardNavigation.jsx
import React from 'react';
import './flashcard-navigation.css'

function FlashcardNavigation({ onNextCard, onPrevCard }) {
  return (
    <div className="flashcard-navigation">
      <div className="flashcard-arrow" onClick={onPrevCard}>
        &lt;
      </div>
      <div className="flashcard-arrow" onClick={onNextCard}>
        &gt;
      </div>
    </div>
  );
}

export default FlashcardNavigation;