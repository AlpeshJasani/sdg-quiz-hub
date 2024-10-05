import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white py-6 mt-8'>
            {" "}
            {/* mt-8 can be adjusted or removed if not needed */}
            <div className='container mx-auto text-center'>
                <h3 className='text-xl font-semibold mb-2'>Connect with Alpesh Jasani</h3>
                <div className='flex justify-center space-x-4 mb-4'>
                    {/* <a href='https://www.facebook.com/AlpeshJasani' target='_blank' rel='noopener noreferrer'>
                        <FaFacebook className='text-2xl hover:text-blue-500 transition-colors' />
                    </a> */}
                    <a href='https://x.com/AlpeshJasani' target='_blank' rel='noopener noreferrer'>
                        <FaTwitter className='text-2xl hover:text-blue-400 transition-colors' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/alpesh-jasani-a16b64220/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FaLinkedin className='text-2xl hover:text-blue-600 transition-colors' />
                    </a>
                    <a href='https://www.instagram.com/alpeshjasani777/' target='_blank' rel='noopener noreferrer'>
                        <FaInstagram className='text-2xl hover:text-pink-500 transition-colors' />
                    </a>
                    <a href='https://github.com/AlpeshJasani/' target='_blank' rel='noopener noreferrer'>
                        <FaGithub className='text-2xl hover:text-gray-400 transition-colors' />
                    </a>
                </div>
                <p className='text-sm'>© {new Date().getFullYear()} Alpesh Jasani. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
