import React, { Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import './styles/App.css';


function App() {

    return (
        <Router>
        <div className="app">
          <Switch>
            <Route exact path='/signin' >
                <Signin/>
            </Route>
            <Route exact path='/home' >
                <Home/>
            </Route>
          </Switch>
        </div>
    </Router>
    )
}

export default App;
