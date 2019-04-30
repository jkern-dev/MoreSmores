import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up!</Link>
        </nav>
    );

    const personalGreeting = () => (
        <header>
            <h2>Hi, {currentUser.first_name}</h2>
            <button onClick={logout}>Log Out</button>
        </header>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;