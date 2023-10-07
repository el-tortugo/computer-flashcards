import React, { useState } from 'react';
import './App.css';
import Flashcard from './Flashcard';
import AnswerInput from './answer-input';

function App() {
  const [isCorrect, setIsCorrect] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const flashcards = [
    {
      problem: 'What is a hard drive?',
      solution: 'A hard drive is a storage device that stores and retrieves data on a computer.',
      difficulty: 'easy',
    },
    {
      problem: 'What is the difference between a browser and a search engine?',
      solution: 'A browser is a software application used to access and display web pages, while a search engine is a website that allows users to search for information on the internet.',
      difficulty: 'medium',
    },
    {
      problem: 'How do you turn on a computer?',
      solution: 'To turn on a computer, you can press the power button.',
      difficulty: 'easy',
  
    },
    {
      problem: 'What is RAM?',
      solution: 'RAM stands for Random Access Memory. It is a type of computer memory that can be accessed randomly, meaning any byte of memory can be accessed without touching the preceding bytes.',
      difficulty: 'medium',
    },
    {
      problem: 'What is the difference between a stack and a queue?',
      solution: 'A stack is a data structure that stores items in a Last-In/First-Out (LIFO) or First-In/Last-Out (FILO) manner. A queue is a data structure that stores items in a First-In/First-Out (FIFO) or Last-In/Last-Out (LILO) manner.',
      difficulty: 'hard',
    },
    {
      problem: 'What is a virus?',
      solution: 'A virus is a type of malicious software that can self-replicate and spread to other computers.',
      difficulty: 'medium',
  
    },
    {
      problem: 'How can you best protect your computer from viruses?',
      solution: 'You can best protect your computer from viruses by installing anti-virus software and keeping it up to date.',
      difficulty: 'easy',
    },
    {
      problem: 'What is a solid state drive?',
      solution: 'A solid state drive is a storage device that stores and retrieves data on a computer. It is similar to a hard drive, but it has no moving parts and is faster and more reliable.',
      difficulty: 'easy',
    },
    {
      problem: 'What is a CPU?',
      solution: 'A CPU, or Central Processing Unit, is the part of a computer that executes instructions. It is often called the "brain" of the computer.',
      difficulty: 'medium',
    },
    {
      problem: 'What is a graphics card?',
      solution: 'A graphics card is a hardware device that is used to render images and videos on a computer screen.',
      difficulty: 'medium',
    }
  ];
  

  return (
    <div className="app">
      <Flashcard
        problem={flashcards[currentCardIndex].problem}
        solution={flashcards[currentCardIndex].solution}
        difficulty={flashcards[currentCardIndex].difficulty}
        isCorrect={isCorrect}
        onNextCard={handleNextCard}
        onPrevCard={handlePrevCard}
      />
      {isCorrect === null && (
        <AnswerInput onSubmit={handleAnswerSubmit} />
      )}
    </div>
  );
}

export default App;