import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home/Home'
import Editor from './components/pages/Editor/Editor'
import SignUp from './components/pages/SignUp/SignUp'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="page-container">
            <div className="content-wrap">
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/editor' exact component={Editor} />
                        <Route path='/sign-up' exact component={SignUp} />
                    </Switch>
                </Router>
            </div>
            
        </div>
       
    );
}

export default App;
