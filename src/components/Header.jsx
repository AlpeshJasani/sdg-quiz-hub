import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='bg-blue-600 p-4 text-white text-center'>
            <Link to='/'>
                <h1 className='text-3xl font-bold'>SDG Quiz Website</h1>
                <p className='mt-2'>Learn about the Sustainable Development Goals (SDGs)</p>
            </Link>
        </header>
    );
};

export default Header;
