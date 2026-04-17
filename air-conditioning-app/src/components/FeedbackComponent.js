import React from 'react';

const FeedbackComponent = ({ feedback }) => {
  return (
    <div className="p-4 border rounded mt-4">
      <h3>Feedback:</h3>
      <p><strong>Fluency:</strong> {feedback.fluency}</p>
      <p><strong>Grammar Mistakes:</strong> {feedback.grammarMistakes}</p>
      <p><strong>Vocabulary Suggestions:</strong> {feedback.vocabularySuggestions}</p>
      <p><strong>Improved Answer:</strong> {feedback.improvedAnswer}</p>
    </div>
  );
};

export default FeedbackComponent;
