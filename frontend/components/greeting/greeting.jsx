import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        // <nav>
        //     <Link to="/login">Login</Link>
        //     <br />
        //     <Link to="/signup">Sign Up!</Link>
        // </nav>

        <>
            <li><Link to="/login" className="header-link">Login</Link></li>
            <li><Link to="/signup" className="header-link">Sign Up!</Link></li>
        </>
    );

    const personalGreeting = () => (
        <header>
            <li className="header-link">{currentUser.first_name.charAt(0).toUpperCase() + currentUser.first_name.slice(1)}</li>
            <li><button onClick={logout}>Log Out</button></li>
        </header>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;