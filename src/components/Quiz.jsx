import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResults(true);
        }
    };

    return showResults ? (
        <div className='text-center'>
            <h2 className='text-2xl font-bold'>
                Your Score: {score}/{questions.length}
            </h2>
            <div className='mt-4'>
                <button
                    onClick={() => window.location.reload()}
                    className='mr-2 bg-blue-600 text-white px-4 py-2 rounded-lg'
                >
                    Retry Quiz
                </button>
                <button
                    onClick={() => navigate("/")} // Navigate to the home page
                    className='bg-green-600 text-white px-4 py-2 rounded-lg'
                >
                    Home
                </button>
            </div>
        </div>
    ) : (
        <div>
            <h2 className='text-xl mb-4'>{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].choices.map((choice, index) => (
                <button
                    key={index}
                    className='block w-full p-2 mb-2 bg-gray-200 hover:bg-blue-200 rounded-lg'
                    onClick={() => handleAnswerClick(choice.isCorrect)}
                >
                    {choice.text}
                </button>
            ))}
        </div>
    );
};

export default Quiz;
