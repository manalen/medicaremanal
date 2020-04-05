//import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';
import React, { Component } from 'react';
import Formulaire from './Formulaire.jsx';
import Navigation from './navigation.jsx';


class App extends Component {
    render() {
        return (<>
                <Navigation/>
                <Formulaire/>
            </>
        );
    }
}
export default App;
