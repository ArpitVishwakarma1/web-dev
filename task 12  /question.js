
import React from 'react';

const Question = ({ question }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{question}</h2>
    </div>
  );
};

export default Question;
