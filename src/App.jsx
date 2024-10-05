import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SDGQuizPage from "./pages/SDGQuizPage";
import NotFoundPage from "./pages/NotFoundPage"; // Create this page

function App() {
    return (
        <Router>
            <div className='flex flex-col min-h-screen'>
                <Header />
                <main className='flex-grow'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/quiz/:sdgNumber' element={<SDGQuizPage />} />
                        <Route path='*' element={<NotFoundPage />} /> {/* Handle not found separately */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
