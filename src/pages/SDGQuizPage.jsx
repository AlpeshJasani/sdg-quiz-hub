import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Quiz from "../components/Quiz";

const SDGQuizPage = () => {
    const quizzes = {
        13: {
            title: "Climate Action",
            questions: [
                {
                    question: "What is the main cause of global warming?",
                    choices: [
                        { text: "Greenhouse gases", isCorrect: true },
                        { text: "Deforestation", isCorrect: false },
                        { text: "Overpopulation", isCorrect: false },
                    ],
                },
                {
                    question: "Which renewable energy source is most used?",
                    choices: [
                        { text: "Solar", isCorrect: false },
                        { text: "Wind", isCorrect: false },
                        { text: "Hydropower", isCorrect: true },
                    ],
                },
                // More questions can be added here...
            ],
        },
        // Add more SDG quizzes here...
        1: {
            title: "No Poverty",
            questions: [
                {
                    question: "What percentage of the world's population lives on less than $1.90 a day?",
                    choices: [
                        { text: "10%", isCorrect: false },
                        { text: "25%", isCorrect: false },
                        { text: "9%", isCorrect: true },
                    ],
                },
                // More questions can be added here...
            ],
        },
        5: {
            title: "Gender Equality",
            questions: [
                {
                    question: "Which country was the first to grant women the right to vote?",
                    choices: [
                        { text: "New Zealand", isCorrect: true },
                        { text: "Australia", isCorrect: false },
                        { text: "Finland", isCorrect: false },
                    ],
                },
                // More questions can be added here...
            ],
        },
        // Add further SDGs with their respective quizzes here...
    };

    const { sdgNumber } = useParams(); // Get the SDG number using useParams
    const quiz = quizzes[sdgNumber]; // Get the quiz for the specific SDG number
    const navigate = useNavigate(); // Initialize useNavigate

    // Handle case where the quiz is not found
    if (!quiz) {
        return (
            <div className='p-6'>
                <h1 className='text-2xl font-bold mb-4'>Quiz Not Found</h1>
                <p>Sorry, there is no quiz available for SDG {sdgNumber}.</p>
                <button
                    onClick={() => navigate("/")} // Navigate to the home page
                    className='bg-green-600 text-white px-4 py-2 rounded-lg'
                >
                    Home
                </button>
            </div>
        );
    }

    return (
        <div className='p-6'>
            <h1 className='text-2xl font-bold mb-4'>
                SDG {sdgNumber}: {quiz.title} Quiz
            </h1>
            <Quiz questions={quiz.questions} /> {/* Render the Quiz component with the questions */}
        </div>
    );
};

export default SDGQuizPage;
