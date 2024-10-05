import React from "react";
import QuizCard from "../components/QuizCard";

const HomePage = () => {
    const sdgs = [
        { number: 13, title: "Climate Action" },
        { number: 1, title: "No Poverty" },
        { number: 5, title: "Gender Equality" },
        { number: 4, title: "Quality Education" },
        { number: 6, title: "Clean Water and Sanitation" },
        { number: 7, title: "Affordable and Clean Energy" },
        // Add more SDGs as needed
    ];

    return (
        <div className='p-6'>
            <h1 className='text-2xl font-bold text-center mb-6'>Welcome to the SDG Quiz Website</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {sdgs.map((sdg) => (
                    <QuizCard key={sdg.number} sdgNumber={sdg.number} sdgTitle={sdg.title} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
