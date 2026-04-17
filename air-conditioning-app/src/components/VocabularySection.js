import React, { useState } from 'react';
import vocabularyData from '../data/vocabularyData';

const VocabularySection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentWord = vocabularyData[currentWordIndex];

  const handleNext = () => {
    setCurrentWordIndex((prev) => (prev < vocabularyData.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="p-4">
      <h2>Vocabulary</h2>
      <div className="mb-4">
        <p><strong>Word:</strong> {currentWord.word}</p>
        <p><strong>Definition:</strong> {currentWord.definition} ({currentWord.vietnamese})</p>
        <p><strong>Example:</strong> {currentWord.exampleSentence}</p>
      </div>
      <h4>Quiz:</h4>
      {currentWord.quizQuestion}
      <div className="mb-4">
        {currentWord.options.map((option) => (
          <label key={option.id} className="block">
            <input
              type="radio"
              name="quizOption"
              value={option.id}
            />
            {option.label} {option.correct ? '✔' : ''}
          </label>
        ))}
      </div>
      <button onClick={handleNext}>Next Word</button>
    </div>
  );
};

export default VocabularySection;
