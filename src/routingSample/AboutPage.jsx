import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <h1>ABOUT PAGE !!!</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                consectetur architecto eos temporibus id possimus expedita
                beatae quisquam! Saepe quod sint aliquam quos ea rerum nostrum
                iusto ipsam? Soluta, quas.
            </p>
            <Link to={'/'}>Go back to Home Page</Link>
        </div>
    );
};

export default AboutPage;
