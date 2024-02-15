import React, { useEffect, useState } from 'react';
import Question from './Question';
import fetchQuestions from '../utils/api';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
    };

    getQuestions();
  }, []);

  return (
    <div className="container mx-auto">
      {questions.map((question, index) => (
        <Question key={index} question={question.question} />
      ))}
    </div>
  );
};

export default Quiz;
