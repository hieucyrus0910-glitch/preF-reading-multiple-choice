import React, { useState } from 'react';
import speakingData from '../data/speakingData';

const SpeakingSection = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = speakingData[currentQuestionIndex];
  const [userAnswer, setUserAnswer] = useState('');

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => (prev < speakingData.length - 1 ? prev + 1 : 0));
  };

  const handleFeedback = () => {
    // Simulate feedback
    alert('Your feedback will appear here!');
  };

  return (
    <div className="p-4">
      <h2>Speaking</h2>
      <div className="mb-4">
        {currentQuestion.question}
      </div>
      <div className="mb-4">
        <textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          rows="5"
          cols="30"
        />
      </div>
      <button onClick={handleFeedback}>Submit and Get Feedback</button>
      <button onClick={handleNext} className="ml-2">Next Question</button>
    </div>
  );
};

export default SpeakingSection;
