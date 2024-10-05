import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SDGQuizPage from "./pages/SDGQuizPage";

function App() {
    return (
        <Router>
            <div className='flex flex-col min-h-screen'>
                {/* Make the main div a flex container */}
                <Header />
                <main className='flex-grow'>
                    {/* This will allow the main content to grow and fill available space */}
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/quiz/:sdgNumber' element={<SDGQuizPage />} />
                        <Route path='*' element={<HomePage />} />
                    </Routes>
                </main>
                <Footer /> {/* Footer is now positioned at the bottom */}
            </div>
        </Router>
    );
}

export default App;
