import React from 'react';
import FlashcardApp from './flashcard-app';
import './App.css';

const flashcards = [
  {
    problem: 'What is a hard drive?',
    explanation: 'A hard drive is a storage device that stores and retrieves data on a computer.',
    solution: 'A type of storage device',
    difficulty: 'easy',
  },
  {
    problem: 'What is the difference between a browser and a search engine?',
    explanation: 'A browser is a software application used to access and display web pages, while a search engine is a website that allows users to search for information on the internet.',
    solution: 'A browser accesses web pages, while a search engine finds information on the internet.',
    difficulty: 'medium',
  },
  {
    problem: 'How do you turn on a computer?',
    explanation: 'To turn on a computer, you can press the power button.',
    solution: 'Press the power button',
    difficulty: 'easy',

  },
  {
    problem: 'What is RAM?',
    explanation: 'RAM stands for Random Access Memory. It is a type of computer memory that can be accessed randomly, meaning any byte of memory can be accessed without touching the preceding bytes.',
    solution: 'Random Access Memory',
    difficulty: 'medium',
  },
  {
    problem: 'What is the difference between a stack and a queue?',
    explanation: 'A stack is a data structure that stores items in a Last-In/First-Out (LIFO) or First-In/Last-Out (FILO) manner. A queue is a data structure that stores items in a First-In/First-Out (FIFO) or Last-In/Last-Out (LILO) manner.',
    solution: 'A stack is LIFO or FILO, while a queue is FIFO or LILO.',
    difficulty: 'hard',
  },
  {
    problem: 'What is a virus?',
    explanation: 'A virus is a type of malicious software that can self-replicate and spread to other computers.',
    solution: 'A type of malicious software',
    difficulty: 'medium',

  },
  {
    problem: 'How can you best protect your computer from viruses?',
    explanation: 'You can best protect your computer from viruses by installing anti-virus software and keeping it up to date.',
    solution: 'Install anti-virus software and keep it up to date',
    difficulty: 'easy',
  },
  {
    problem: 'What is a solid state drive?',
    explanation: 'A solid state drive is a storage device that stores and retrieves data on a computer. It is similar to a hard drive, but it has no moving parts and is faster and more reliable.',
    solution: 'A fast form of storage device',
    difficulty: 'easy',
  },
  {
    problem: 'What is a CPU?',
    solution: 'A Central Processing Unit',
    explanation: 'A CPU, or Central Processing Unit, is the part of a computer that executes instructions. It is often called the "brain" of the computer.',
    difficulty: 'medium',
  },
  {
    problem: 'What is a graphics card?',
    solution: 'A hardware device that renders images and videos on a computer screen',
    explanation: 'A graphics card is a hardware device that is used to render images and videos on a computer screen.',
    difficulty: 'medium',
  }
];

const App = () => {
  return (
    <div className="app">
    <h1> Computer FlashCard Quiz</h1>
    <p> Test your knowledge of computers with these flashcards!</p>
    <p> Number of flashcards: {flashcards.length}</p>
    <FlashcardApp flashcards={flashcards} />
      <h3> Created by Kehinde Adeoso</h3>
    </div>
  );
};

export default App;