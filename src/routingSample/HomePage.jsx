import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>HOME PAGE !!!</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                consectetur architecto eos temporibus id possimus expedita
                beatae quisquam! Saepe quod sint aliquam quos ea rerum nostrum
                iusto ipsam? Soluta, quas.
            </p>
            <Link to={'/about'}>Go to About</Link>
        </div>
    );
};

export default HomePage;
