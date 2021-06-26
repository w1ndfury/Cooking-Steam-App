import React from 'react';
import './App.css';
import Editor from './components/pages/Editor/Editor'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="page-container">
            <div className="content-wrap">
                <Router>
                    <Switch>
                        <Route path='/' exact component={Editor} />
                    </Switch>
                </Router>
            </div>
            
        </div>
       
    );
}

export default App;
