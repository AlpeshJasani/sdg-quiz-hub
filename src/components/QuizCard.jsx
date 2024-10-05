import React from "react";
import { Link } from "react-router-dom";

const QuizCard = ({ sdgNumber, sdgTitle }) => {
    return (
        <Link
            to={`/quiz/${sdgNumber}`}
            className='block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
            <h2 className='text-xl font-bold mb-2'>
                SDG {sdgNumber}: {sdgTitle}
            </h2>
            <p className='text-gray-600'>Click to take the quiz on {sdgTitle}.</p>
        </Link>
    );
};

export default QuizCard;
