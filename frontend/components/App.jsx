import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import Modal from './modal';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
const splash_title = ["Find yourself outside.", "Everywhere you want to camp.", "It was in-tents.", "A perfect day would be to get into the car, drive out to Yosemite, and go camping.", "The woods are lovely, dark and deep.", "If people sat outside and looked at the stars each night, I'll bet they'd live a lot differently", "My wish is to stay always like this, living quietly in a corner of nature.", "Look deep into nature, and then you will understand everything better.", "I go to nature to be soothed and healed, and to have my sense put in order.", "Real freedom lies in wildness, not in civilization.", "Roses are red, mud is brown, the wood are better than any night on the town.", "The wilderness holds answers to questions we have not yet learned to ask.", "The mountains are calling and I must go.", "A bad day camping is still better than a good day working.", "Wilderness is not a luxury but necessity of the human spirit.", "We can never have enough of nature."];
const random_splash = splash_title[Math.floor((Math.random()*splash_title.length))];

const App = () => (
    <>
        <Modal />
        <header className="header">
            <span ><Link to="/" ><img src={window.logo} className="logo"/></Link></span>
            
            <nav className="header-nav">
                <ul>
                    <li><Link to='/' className="header-link">Camp</Link></li>
                    <li><Link to='/' className="header-link">Host</Link></li>
                    <li ><Link to='/' className="header-link">Help</Link></li>
                    <GreetingContainer />
                </ul>
            </nav>
        </header>
        <div className="splash-content">
            <span className="splash-title"><h2>{random_splash}</h2></span>
            <div className="splash-body"><p>Book unique camping experiences on over <strong>300,000</strong> campsites, ranches, vineyards, public parks and more.</p></div>
        </div>
        <Switch>
            <Route exact path="/" />
            <Redirect to="/" />
        </Switch>
    </>
);

export default App;